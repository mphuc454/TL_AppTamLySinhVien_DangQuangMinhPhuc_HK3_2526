import { useState } from "react";
import { router } from "expo-router";
import { login } from "../services/AuthService";

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

      await login(email, password);

      router.replace("/auth/Profile"); // hoặc trang Home của bạn
    } catch (error: any) {
      alert(error.message);
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