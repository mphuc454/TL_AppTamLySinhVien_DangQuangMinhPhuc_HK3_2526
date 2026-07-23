export interface Messages {
  id: number;
  conversation_id: number;
  sender_account_id: number;
  message: string;
  is_read: boolean;
  created_at: string;
}
