import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { supabase } from "../lib/supabase";

export function useEmotionAnalytics() {
  const [emotionStatus, setEmotionStatus] = useState("Đang phân tích...");
  const [loading, setLoading] = useState(false);

  const getAnalytics = async () => {
    try {
      setLoading(true);
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) throw new Error("Chưa đăng nhập");
      const res = await fetch("http://192.168.1.117:5000/data-analysic", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          account_id: user.id,
        }),
      });
      const data = await res.json();
      if (data) {
        setEmotionStatus(data.emotion_status);
      }
      Alert.alert("Thành công", "Đã phân tích tâm trạng của bạn.");
    } catch (error) {
      console.log(error);
      Alert.alert("Lỗi", "Không thể phân tích tâm trạng.");
    } finally {
      setLoading(false);
    }
  };
  const emotion_color =
    emotionStatus === "Nghiêm trọng"
      ? "#ea7f67"
      : emotionStatus === "Cần theo dõi"
        ? "#f8d589"
        : "#7989ea";

  useEffect(() => {
    getAnalytics();
  }, []);
  return { emotionStatus, emotion_color, loading, getAnalytics };
}

export function useChatbotAI() {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([
    {
      id: "1",
      sender: "chatbot",
      text: "Chào bạn! Dạo này bạn cảm thấy thế nào?",
    },
  ]);
  const sendMess = async (mess: string) => {
    try {
      const res = await fetch("http://192.168.1.117:5000/chatbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: mess,
        }),
      });
      const data = await res.json();
      return data.reply;
    } catch (error) {
      console.log(error);
      Alert.alert("Xin lỗi", "Hiện tại chatbot đang gặp sự cố.");
    }
  };

  const handle = async () => {
    if (!text.trim()) return;
    const usrText = text;
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        sender: "me",
        text: usrText,
      },
    ]);
    setText("");
    const reply = await sendMess(usrText);
    if (reply) {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: "chatbot",
          text: reply,
        },
      ]);
    }
  };

  return { sendMess, text, messages, handle, setText };
}
