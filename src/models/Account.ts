import { User } from "./User";
 enum Role {
  User = 1,
  Admin = 2,
  Doctor = 3,
}
export interface Account {
  id: number;
  user_id: User;
  username: string;
  password: string;
  role: Role;
  created_at: string;
}