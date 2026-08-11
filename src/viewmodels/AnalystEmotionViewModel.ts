import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export function useEmotionAnalytics() {
  const [emotionStatus, setEmotionStatus] = useState("Đang phân tích...");
  const [loading, setLoading] = useState(false);
  const emotion_color =
    emotionStatus === "Nghiêm trọng"
      ? "#ea7f67"
      : emotionStatus === "Cần theo dõi"
        ? "#f8d589"
        : "#7989ea";
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
      console.log("Phân tích thành công ");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAnalytics();
  }, []);
  return { emotionStatus, emotion_color, loading, getAnalytics };
}
