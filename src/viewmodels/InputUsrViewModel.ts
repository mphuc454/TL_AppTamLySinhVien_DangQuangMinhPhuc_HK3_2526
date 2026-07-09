import { useState } from "react";
import { router } from "expo-router";
import { createAccount } from "../services/AuthService";

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
    const success = await createAccount(
      name,
      Number(role)
    );
    if (success) {
      alert("Hoàn tất thông tin");
      router.replace("/(tabs)/Index");
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