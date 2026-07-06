import { Account } from "./Account";

export interface Doctor {
  id: number;
  account_id: Account;
  experience_years: number;
  specialization: string;
  bio: string;
}