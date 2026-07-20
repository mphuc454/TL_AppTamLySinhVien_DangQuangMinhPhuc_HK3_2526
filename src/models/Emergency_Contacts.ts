import { Account } from "./Account";
import { Doctor } from "./Doctor";

export interface Emergency_Contacts {
  id: number;
  account_id: Account;
  doctor_id: Doctor;
  created_at: string;
}
