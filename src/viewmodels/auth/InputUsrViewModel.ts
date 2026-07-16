import { createAccount } from "@/src/repository/auth/AuthRepository";
import { router } from "expo-router";
import { useState } from "react";
import { Alert } from "react-native";

//1. Xử lý dữ liệu nhập input
export function useInputUsrViewModel() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = async () => {
    if (!name.trim()) {
      alert("Vui lòng nhập tên.");
      return;
    }
    if (!role) {
      alert("Vui lòng chọn vai trò.");
      return;
    }
    const success = await createAccount(name, Number(role));
    if (success) {
      Alert.alert("Thông báo", "Hoàn tất thông tin");
      switch (role) {
        case "1":
          router.replace("/(tabs)/Index");
          break;
        case "2":
          router.replace("/admin/Dashboard");
          break;
        case "3":
          router.replace("/doctor/MainDoctor");
          break;
      }
    }
  };

  return {
    name,
    setName,
    role,
    setRole,
    handleSubmit,
  };
}
