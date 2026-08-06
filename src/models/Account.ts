import { User } from "./User";

export interface Account {
  id: number;
  user_id: User;
  username: string;
  gender: string;
  role: number;
  created_at: string;
  profile?: User;
  expo_push_token: string;
}
