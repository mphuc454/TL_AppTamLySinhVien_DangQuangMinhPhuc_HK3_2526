import { User } from "./User";

export interface Account {
  id: number;
  user_id: User;
  username: string;
  address: string;
  birth_date: number;
  gender: string;
  role: number;
  created_at: string;
  profile?: User;
}
