import { Account } from "./Account";
import { Emotion } from "./Emotion";

export interface EmotionLog {
  id: number;
  account_id: Account;
  emotion_id: number;
  content: string;
  created_at: string;
  emotions?: Emotion;
}
