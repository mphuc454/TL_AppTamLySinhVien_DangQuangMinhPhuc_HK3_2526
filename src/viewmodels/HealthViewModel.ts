import { Alert } from "react-native";
import {
  checkHealthManagement,
  reqHealthManagement,
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
