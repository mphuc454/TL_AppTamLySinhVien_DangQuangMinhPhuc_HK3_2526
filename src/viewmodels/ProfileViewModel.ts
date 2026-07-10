import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Account } from "../models/Account";
import { logout } from "../repository/AuthRepository";
import { getAccountById } from "../repository/ProfileRepository";

//1. đăng xuất tài khoản
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

//2. lấy chi tiết user account by id
export function useAccountDetailViewModel() {
  const [acc, setAcc] = useState<Account | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const load = async () => {
      setLoading(true);

      try {
        const data = await getAccountById();
        setAcc(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, []);

  return {
    acc,
    loading,
  };
}
