import { router, useFocusEffect } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { Alert } from "react-native";
import { HealthManagements } from "../models/HealthManagements";
import { totalEmotion } from "../repository/EmotionRepository";
import {
  allHealthManagement,
  checkHealthManagement,
  getDetailHealthManagement,
  reqHealthManagement,
  toggleStatus,
} from "../repository/HealthManagementRepository";

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

export function useAcceptRequest() {
  const accept = async (id: number, statusCurrent: boolean) => {
    try {
      await toggleStatus(id, !statusCurrent);
      Alert.alert("Thông báo", "Bạn đã chấp nhận xem");
      router.back();
    } catch (error) {
      Alert.alert("Thông báo", "Lỗi không thể xử lý được!");
      console.log(error);
    }
  };
  return accept;
}

export function useTotalEmotion() {
  const [emoTotal, setEmoTotal] = useState({
    tichcuc: 0,
    binhthan: 0,
    loau: 0,
    buonba: 0,
    giandu: 0,
  });
  const loadTotal = async () => {
    try {
      const total = await totalEmotion();
      setEmoTotal(total);
    } catch (error) {
      console.log(error);
    }
  };
  useFocusEffect(
    useCallback(() => {
      loadTotal();
    }, []),
  );

  return { emoTotal };
}

export function useHealthDetail(id: number) {
  const [heal_id, setHeal] = useState<HealthManagements | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadDetail = async () => {
      try {
        setLoading(true);
        const data = await getDetailHealthManagement(id);
        setHeal(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    loadDetail();
  }, [id]);

  return { heal_id, loading };
}
