import { supabase } from "../lib/supabase";

export async function getMessages(conversationId: number) {
  const { data, error } = await supabase
    .from("messages")
    .select("*")
    .eq("conversation_id", conversationId)
    .order("created_at", { ascending: true });

  if (error) throw error;

  return data;
}

export async function sendMessage(
  conversationId: number,
  senderId: number,
  text: string,
) {
  const { error } = await supabase.from("messages").insert({
    conversation_id: conversationId,
    sender_account_id: senderId,
    message: text,
  });

  if (error) throw error;
}

export async function getOrCreateConversation(
  userAccountId: number,
  doctorAccountId: number,
) {
  const { data: existing, error: findError } = await supabase
    .from("conversations")
    .select("*")
    .eq("user_account_id", userAccountId)
    .eq("doctor_account_id", doctorAccountId)
    .maybeSingle();

  if (findError) throw findError;
  if (existing) return existing;

  const { data: created, error: createError } = await supabase
    .from("conversations")
    .insert({
      user_account_id: userAccountId,
      doctor_account_id: doctorAccountId,
    })
    .select()
    .single();

  if (createError) throw createError;
  return created;
}
