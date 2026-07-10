import { hasAccount, login } from "@/src/repository/auth/AuthRepository";
import { router } from "expo-router";
import { useState } from "react";

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
        alert("Email hoặc mật khẩu không đúng.");
        return;
      }
      const hasAcc = await hasAccount();
      if (hasAcc) {
        router.replace("/(tabs)/Index");
      } else {
        router.replace("/auth/InputUsr");
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
