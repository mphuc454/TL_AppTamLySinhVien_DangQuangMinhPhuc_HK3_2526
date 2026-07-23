export interface Conversation {
  id: number;
  user_account_id: number;
  doctor_account_id: number;
  status: boolean;
  created_at: string;
}
