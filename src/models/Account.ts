import { User } from "@supabase/supabase-js";

export interface Account {
  user_id: User;
  username: string;
  address: string;
  avatar_url: string;
  birth_date: number;
  gender: number;
  role: number;
  created_at: string;
}
