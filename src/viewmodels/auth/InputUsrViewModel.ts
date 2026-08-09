import { createAccount } from "@/src/repository/auth/AuthRepository";
import { router } from "expo-router";
import { useState } from "react";
import { Alert } from "react-native";

//1. Xử lý dữ liệu nhập input
export function useInputUsrViewModel() {
  const ROLE_LABELS: Record<string, string> = {
    "1": "Người dùng",
    "3": "Bác sĩ",
  };
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    if (!name.trim()) {
      Alert.alert("Thông báo", "Vui lòng nhập tên.");
      return;
    }
    if (!role) {
      Alert.alert("Thông báo", "Vui lòng chọn vai trò.");
      return;
    }

    Alert.alert(
      "Xác nhận vai trò",
      `Bạn có chắc chắn muốn đăng ký với vai trò ${ROLE_LABELS[role]} ?`,
      [
        { text: "Hủy", style: "cancel" },
        { text: "Xác nhận", onPress: submitAccount },
      ],
    );
  };

  const submitAccount = async () => {
    try {
      setLoading(true);
      const success = await createAccount(name, Number(role));

      if (success) {
        Alert.alert("Thông báo", "Hoàn tất thông tin");
        switch (role) {
          case "1":
            router.replace("/(tabs)/Index");
            break;
          case "3":
            router.replace("/doctor/MainDoctor");
            break;
          default:
            router.replace("/(tabs)/Index");
        }
      } else {
        Alert.alert("Lỗi", "Không thể tạo tài khoản, vui lòng thử lại.");
      }
    } catch (error) {
      Alert.alert("Lỗi", "Đã xảy ra lỗi, vui lòng thử lại sau.");
      console.error("createAccount error:", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    name,
    setName,
    role,
    setRole,
    handleSubmit,
    loading,
  };
}
