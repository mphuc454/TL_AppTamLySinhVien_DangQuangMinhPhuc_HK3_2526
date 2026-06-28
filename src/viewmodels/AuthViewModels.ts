import { useRouter } from "expo-router";
import { useState } from "react";
import { RegisterModel } from "../models/User";
import { authService } from "../services/AuthService";

export function useRegisterViewModel() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const validate = (): string | null => {
    if (!username || !email || !phone || !password || !confirmPassword) {
      return "Vui lòng điền đầy đủ thông tin";
    }
    if (password !== confirmPassword) {
      return "Mật khẩu xác nhận không khớp";
    }
    if (password.length < 6) {
      return "Mật khẩu phải có ít nhất 6 ký tự";
    }
    return null;
  };

  const handleRegister = async () => {
    const validationError = validate();
    if (validationError) {
      setErrorMessage(validationError);
      return;
    }

    setLoading(true);
    setErrorMessage("");

    const payload: RegisterModel = {
      username,
      email,
      phone,
      password,
      confirmPassword,
    };

    const result = await authService.register(payload);
    setLoading(false);

    if (!result.success) {
      setErrorMessage(result.message || "Đăng ký thất bại");
      return;
    }

    router.push("/auth/Login");
  };

  const handleOAuth = async (provider: "google" | "facebook") => {
    try {
      await authService.loginWithOAuth(provider);
    } catch (e: any) {
      setErrorMessage(e.message);
    }
  };

  return {
    username,
    setUsername,
    email,
    setEmail,
    phone,
    setPhone,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    loading,
    errorMessage,
    handleRegister,
    handleOAuth,
  };
}
