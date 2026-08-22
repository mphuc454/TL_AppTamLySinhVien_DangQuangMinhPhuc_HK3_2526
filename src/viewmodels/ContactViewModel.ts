import * as MailComposer from "expo-mail-composer";
import { useState } from "react";
import { Alert } from "react-native";
import { checkHealthManagement } from "../repository/doctor/HealthManagementRepository";

export function useSendMail() {
  const [loading, setLoading] = useState(false);
  const sendContact = async (id: number, email: string) => {
    try {
      setLoading(true);
      const checkreq = await checkHealthManagement(id);
      if (!checkreq) {
        Alert.alert(
          "Thông báo",
          "Bạn cần gửi yêu cầu đến bác sĩ mới gửi email được.",
        );
        return false;
      }
      if (!checkreq.status) {
        Alert.alert("Thông báo", "Bác sĩ chưa chấp nhận yêu cầu theo dõi.");
        return false;
      }
      const isAvailable = await MailComposer.isAvailableAsync();
      if (!isAvailable) {
        Alert.alert("Thông báo", "Thiết bị không hỗ trợ gửi email.");
        return;
      }
      await MailComposer.composeAsync({
        subject: "",
        body: "",
        recipients: [email],
      });
    } catch (error) {
      console.log(error);
      Alert.alert("Lỗi", "Không thể mở ứng dụng email.");
    } finally {
      setLoading(false);
    }
  };
  return { sendContact, loading };
}
