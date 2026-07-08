import { Emotion } from "./Emotion";

export interface EmotionLog {
  id: number;
  account_id: number;
  emotion_id: number;
  content: string;
  created_at: string;
  emotions?: Emotion;
}