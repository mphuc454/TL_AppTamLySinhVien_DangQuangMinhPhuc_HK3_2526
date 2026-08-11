import { useState } from "react";
import { Alert } from "react-native";

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
