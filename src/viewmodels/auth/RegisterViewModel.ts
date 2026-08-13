import { isExistEmail, register } from "@/src/repository/auth/AuthRepository";
import { router } from "expo-router";
import { useState } from "react";
import { Alert } from "react-native";

//1. xử lý dữ liệu đăng ký tài khoản
export function useRegisterViewModel() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const validate = async () => {
    if (!username.trim()) {
      alert("Vui lòng nhập tên");
      return false;
    }
    if (!email.trim()) {
      alert("Vui lòng nhập email.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Email không hợp lệ.");
      return false;
    }

    const CheckExistsEmail = await isExistEmail(email);
    if (CheckExistsEmail) {
      Alert.alert("Lỗi", "Email đã tồn tại trên hệ thống");
      return;
    }
    if (!phone.trim()) {
      alert("Vui lòng nhập số điện thoại.");
      return false;
    }
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      alert("Số điện thoại không hợp lệ.");
      return false;
    }

    if (!password) {
      alert("Vui lòng nhập mật khẩu.");
      return false;
    }

    if (password.length < 6) {
      alert("Mật khẩu phải có ít nhất 6 ký tự.");
      return false;
    }

    if (password !== confirmPassword) {
      alert("Mật khẩu xác nhận không khớp.");
      return false;
    }
    return true;
  };
  const handleRegister = async () => {
    if (!validate()) return;
    try {
      const result = await register(username, email, phone, password);
      if (result.success) {
        Alert.alert(
          "Thành công",
          "Đăng ký thành công, Vui lòng xác nhận đã gửi về email của bạn !",
        );
        router.replace("/auth/Login");
      } else {
        console.log("Lỗi đăng ký thất bại");
      }
    } catch (error) {
      console.log(error);
      alert("Đã có xảy ra lỗi vui lòng thử lại");
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
    handleRegister,
  };
}
