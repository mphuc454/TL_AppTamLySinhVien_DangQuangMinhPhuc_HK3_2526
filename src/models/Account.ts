import { User } from "./User";

export interface Account {
  user_id: User;
  username: string;
  address: string;
  birth_date: number;
  gender: string;
  role: number;
  created_at: string;
}
