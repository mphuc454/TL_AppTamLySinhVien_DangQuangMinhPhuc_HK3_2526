import { router } from "expo-router";
import { logout } from "../services/AuthService";

export function useProfileViewModel() {
  const handleLogout = async () => {
    const success = await logout();

    if (success) {
      router.replace("/auth/Login");
    }
  };

  return {
    handleLogout,
  };
}