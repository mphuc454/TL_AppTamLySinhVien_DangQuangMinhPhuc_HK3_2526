import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { Alert } from "react-native";
import { HealthManagements } from "../models/HealthManagements";
import {
  allHealthManagement,
  checkHealthManagement,
  reqHealthManagement,
} from "../repository/HealthManagementRepository";

// 1. gửi yêu cầu theo dõi sức khoẻ
export function useHandleRequestVM() {
  const handleAdd = async (doctorAccountId: number) => {
    try {
      const existed = await checkHealthManagement(doctorAccountId);
      if (existed) {
        Alert.alert("Thông báo", "Bạn đã gửi yêu cầu theo dõi đến bác sĩ này.");
        return;
      }
      await reqHealthManagement(doctorAccountId);
      Alert.alert(
        "Thông báo",
        "Bạn đã gửi thành công, vui lòng chờ xác nhận của bác sĩ",
      );
    } catch (error) {
      Alert.alert("Lỗi", "Đã xảy ra lỗi không thể gửi yêu cầu");
      console.log(error);
    }
  };
  return handleAdd;
}
// 2. lấy ds tk gửi yêu cầu
export function useGetRequestVM() {
  const [heal, setHeal] = useState<HealthManagements[]>([]);
  const [loading, setLoading] = useState(false);

  const loadAll = async () => {
    try {
      setLoading(true);
      const data = await allHealthManagement();
      setHeal(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadAll();
    }, []),
  );
  return { heal, loading };
}
