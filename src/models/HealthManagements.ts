import { Account } from "./Account";
import { Doctor } from "./Doctor";

export interface HealthManagements {
  id?: number;
  account_id: Account;
  doctor_id: Doctor;
  status: boolean;
}
