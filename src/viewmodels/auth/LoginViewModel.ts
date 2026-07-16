import {
  getAccount,
  hasAccount,
  login,
} from "@/src/repository/auth/AuthRepository";
import { router } from "expo-router";
import { useState } from "react";
import { Alert } from "react-native";

export function useLoginViewModel() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const validate = () => {
    if (!email.trim()) {
      alert("Vui lòng nhập email.");
      return false;
    }

    if (!password.trim()) {
      alert("Vui lòng nhập mật khẩu.");
      return false;
    }

    return true;
  };

  const handleLogin = async () => {
    if (!validate()) return;
    try {
      setLoading(true);
      const result = await login(email, password);
      if (!result.success) {
        Alert.alert("Thông báo", "Email hoặc mật khẩu không đúng.");
        return;
      }
      const hasAcc = await hasAccount();
      if (!hasAcc) {
        router.replace("/auth/InputUsr");
        Alert.alert("Thông báo", "Tài khoản chưa tồn tại");
        return;
      }
      const acc = await getAccount();
      switch (acc.role) {
        case 1:
          router.replace("/(tabs)/Index");
          break;
        case 2:
          router.replace("/admin/Dashboard");
          break;
        case 3:
          router.replace("/doctor/MainDoctor");
          break;
      }
    } catch {
      alert("Đăng nhập thất bại.");
    } finally {
      setLoading(false);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    loading,
    handleLogin,
  };
}
