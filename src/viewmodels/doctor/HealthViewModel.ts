import { router, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { Alert, Linking } from "react-native";
import { HealthManagements } from "../../models/HealthManagements";
import {
  allHealthManagement,
  checkHealthManagement,
  deleteHealthManagement,
  getDetailHealthManagement,
  reqHealthManagement,
  toggleStatus,
  totalEmotion,
} from "../../repository/doctor/HealthManagementRepository";

// xử lý yêu cầu theo dõi sức khoẻ
export function useHandleRequestVM() {
  const handleAddRequest = async (doctorAccountId: number) => {
    try {
      const existed = await checkHealthManagement(doctorAccountId);
      if (existed) {
        Alert.alert(
          "Thông báo",
          "Bạn đã thực hiện yêu cầu theo dõi đến bác sĩ này rồi.",
        );
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
  return { handleAddRequest };
}

// xem theo dõi sức khoẻ của người dùng
export function useGetRequestVM() {
  const [heal, setHeal] = useState<HealthManagements[]>([]);
  const [loading, setLoading] = useState(false);

  const loadDetailedHealth = async () => {
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
      loadDetailedHealth();
    }, []),
  );
  return { heal, loading };
}

// chấp nhận yêu cầu theo dõi sức khoẻ
export function useAcceptRequest() {
  const acceptRequest = async (id: number, statusCurrent: boolean) => {
    try {
      await toggleStatus(id, !statusCurrent);

      Alert.alert("Thông báo", "Bạn đã chấp nhận xem");
      router.back();
    } catch (error) {
      Alert.alert("Thông báo", "Lỗi không thể xử lý được!");
      console.log(error);
    }
  };
  return acceptRequest;
}

// từ chối yêu cầu theo dõi sức khoẻ
export function useRejectRequest() {
  const rejectRequest = (id: number) => {
    return new Promise<boolean>((resolve) => {
      Alert.alert(
        "Xoá theo dõi",
        "Bạn có muốn chắc kết thúc theo dõi không ?",
        [
          {
            text: "Huỷ",
            style: "cancel",
            onPress: () => resolve(false),
          },
          {
            text: "Xoá",
            style: "destructive",
            onPress: async () => {
              try {
                await deleteHealthManagement(id);
                Alert.alert(
                  "Thông báo",
                  "Bạn đã kết thúc theo dõi người dùng.",
                );
                resolve(true);
              } catch (error) {
                console.log(error);
                Alert.alert("Thông báo", "Lỗi không thể xử lý được!");
                resolve(false);
              }
            },
          },
        ],
      );
    });
  };

  return rejectRequest;
}
export function useTotalEmotion(userId?: string) {
  const [emoTotal, setEmoTotal] = useState({
    tichcuc: 0,
    binhthan: 0,
    loau: 0,
    buonba: 0,
    giandu: 0,
  });

  const reset = () => {
    setEmoTotal({
      tichcuc: 0,
      binhthan: 0,
      loau: 0,
      buonba: 0,
      giandu: 0,
    });
  };

  const loadTotalEmotion = useCallback(async () => {
    if (!userId) return;

    try {
      const total = await totalEmotion(userId);
      setEmoTotal(total);
    } catch (error) {
      console.log(error);
    }
  }, [userId]);

  useFocusEffect(
    useCallback(() => {
      if (!userId) return;

      loadTotalEmotion();
    }, [loadTotalEmotion, userId]),
  );

  return { emoTotal, reset };
}

// xem thông tin chi tiết theo dõi sức khoẻ
export function useHealthDetail(id: number) {
  const [heal_id, setHeal] = useState<HealthManagements | null>(null);

  const loadDetailedUser = useCallback(async () => {
    try {
      if (id == null || Number.isNaN(id)) return;
      const data = await getDetailHealthManagement(id);
      setHeal(data);
    } catch (error) {
      console.log(error);
      setHeal(null);
    }
  }, [id]);

  useFocusEffect(
    useCallback(() => {
      loadDetailedUser();
    }, [loadDetailedUser]),
  );

  return {
    heal_id,
    loadDetailedUser,
    clear: () => setHeal(null),
  };
}

// chấp nhận yêu cầu gọi điện thoại
export function useAccepttoCall() {
  const acceptToCall = async (id: number, phone: string | undefined) => {
    try {
      const mana = await checkHealthManagement(id);
      if (!mana) {
        Alert.alert(
          "Thông báo",
          "Bạn cần gửi yêu cầu đến bác sĩ mới gọi được.",
        );
        return false;
      }

      if (!mana.status) {
        Alert.alert("Thông báo", "Bác sĩ chưa chấp nhận yêu cầu theo dõi.");
        return false;
      }
      if (!phone) {
        Alert.alert("Thông báo", "Không có số điện thoại.");
        return false;
      }
      const p = `tel:${phone}`;
      const supported = await Linking.canOpenURL(p);
      if (!supported) {
        Alert.alert("Thông báo", "Thiết bị không hỗ trợ gọi điện.");
        return;
      }
      await Linking.openURL(p);
      return true;
    } catch (error) {
      console.log(error);
      Alert.alert("Thông báo", "Không thể kiểm tra trạng thái.");
      return false;
    }
  };

  return acceptToCall;
}
