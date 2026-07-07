import { Doctor } from "./Doctor";
import { Skill } from "./Skill";

export interface DoctorSkill {
  doctor_id: Doctor;
  skill_id: Skill;
}