import * as MailComposer from "expo-mail-composer";
import { useState } from "react";
import { Alert } from "react-native";

export function useSendMail() {
  const [loading, setLoading] = useState(false);
  const sendContact = async (email: string) => {
    try {
      setLoading(true);
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
