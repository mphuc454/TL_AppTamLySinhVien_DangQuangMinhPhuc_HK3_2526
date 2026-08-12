import { supabase } from "@/src/lib/supabase";

//1. Vô hiệu hoá tài khoản:
export const toggleVerify = async (id: number, verify: boolean) => {
  const { data, error } = await supabase
    .from("doctors")
    .update({ verify })
    .eq("id", id);
  if (error) throw error;
  return data;
};
