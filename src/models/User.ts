export interface User {
  id: string;
  username: string;
  email: string;
  phone: string;
  password: string;
  role: "user" | "doctor" | "admin";
  avatar_url: string;
  created_at: string;
  updated_at: string;
}
export interface RegisterModel {
  username: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}
export interface AuthResult {
  success: boolean;
  message?: string;
  userId?: string;
}
