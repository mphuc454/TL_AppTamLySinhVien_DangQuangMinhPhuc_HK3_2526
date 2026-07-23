import { Messages } from "../models/Messages";

const API = "http://192.168.1.117:5000";
export async function getMessage(conversationId: number): Promise<Messages[]> {
  const res = await fetch(`${API}/messages/${conversationId}`);
  return await res.json();
}
export async function sendMessage(
  conversationId: number,
  senderID: number,
  content: string,
) {
  const res = await fetch(`${API}/messages`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      conversation_id: conversationId,
      sender_account_id: senderID,
      message: content,
    }),
  });
  return await res.json();
}
