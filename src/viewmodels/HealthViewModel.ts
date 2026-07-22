import { router, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { Alert } from "react-native";
import { HealthManagements } from "../models/HealthManagements";
import { totalEmotion } from "../repository/EmotionRepository";
import {
  allHealthManagement,
  checkHealthManagement,
  getDeleteHealthManagement,
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
  const accept = async (
    id: number,
    statusCurrent: boolean,
    // accountId: number,
  ) => {
    try {
      await toggleStatus(id, !statusCurrent);
      // const token = await getExpoToken(accountId);
      // if (token) {
      //   await sendPushNotification(
      //     token,
      //     "Yêu cầu được chấp nhận",
      //     "Bác sĩ đã chấp nhận yêu cầu theo dõi của bạn.",
      //   );
      // }
      Alert.alert("Thông báo", "Bạn đã chấp nhận xem");
      router.back();
    } catch (error) {
      Alert.alert("Thông báo", "Lỗi không thể xử lý được!");
      console.log(error);
    }
  };
  return accept;
}

export function useRejectRequest() {
  const reject = async (id: number) => {
    console.log("Deleting health_managements with id =", id);

    Alert.alert("Xoá theo dõi", "Bạn có muốn chắc kết thúc theo dõi không ?", [
      { text: "Huỷ", style: "cancel" },
      {
        text: "Xoá",
        style: "destructive",
        onPress: async () => {
          try {
            await getDeleteHealthManagement(id);
            Alert.alert(
              "Thông báo",
              "Bạn đã từ chối yêu cầu theo dõi sức khoẻ người này",
            );
            router.replace("/doctor/ListUser");
          } catch (error) {
            console.log(error);
            Alert.alert("Thông báo", "Lỗi không thể xử lý được!");
          }
        },
      },
    ]);
  };
  return reject;
}

export function useTotalEmotion(userId?: string) {
  const [emoTotal, setEmoTotal] = useState({
    tichcuc: 0,
    binhthan: 0,
    loau: 0,
    buonba: 0,
    giandu: 0,
  });
  const loadTotal = useCallback(async () => {
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

      loadTotal();
    }, [loadTotal, userId]),
  );

  return { emoTotal };
}

export function useHealthDetail(id: number) {
  const [heal_id, setHeal] = useState<HealthManagements | null>(null);

  const loadDetail = useCallback(async () => {
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
      loadDetail();
    }, [loadDetail]),
  );

  return { heal_id };
}

export function useAccepttoChat(id: number) {
  const acceptToChat = async () => {
    try {
      const mana = await checkHealthManagement(id);

      if (!mana) {
        Alert.alert(
          "Thông báo",
          "Bạn cần gửi yêu cầu đến bác sĩ mới được nhắn tin.",
        );
        return false;
      }

      if (!mana.status) {
        Alert.alert("Thông báo", "Bác sĩ chưa chấp nhận yêu cầu theo dõi.");
        return false;
      }

      return true;
    } catch (error) {
      console.log(error);
      Alert.alert("Thông báo", "Không thể kiểm tra trạng thái.");
      return false;
    }
  };

  return acceptToChat;
}
