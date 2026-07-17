import { router, useFocusEffect } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { Alert } from "react-native";
import { Emotion } from "../models/Emotion";
import { EmotionLog } from "../models/EmotionLog";
import {
  deleteEmotionLog,
  getAllEmotion,
  getEmotionLog,
  insertEmotionLog,
  mostEmotion,
  totalEmotionLog,
} from "../repository/EmotionRepository";

// lấy danh sách các emotion
export function useEmotionViewModel() {
  const [em, setEm] = useState<Emotion[]>([]);
  const [loading, setLoading] = useState(false);

  const loadEmotion = async () => {
    try {
      setLoading(true);
      const data = await getAllEmotion();
      setEm(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadEmotion();
    }, []),
  );
  return { em, loading };
}

//thêm emotion log
export function useAddEmotionLog() {
  const [selectedEmotionId, setSelectedEmotionId] = useState<number | null>(
    null,
  );
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const saveEmotionLog = async (emotionId: number, content: string) => {
    try {
      setLoading(true);
      await insertEmotionLog(emotionId, content);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    } finally {
      setLoading(false);
    }
  };
  const handleSave = async () => {
    if (!selectedEmotionId) {
      alert("Vui lòng chọn biểu tượng cảm xúc");
      return;
    }
    if (!content.trim()) {
      alert("Vui lòng nhập nội dung");
      return;
    }
    const success = await saveEmotionLog(selectedEmotionId, content);
    if (success) {
      Alert.alert("Thông báo", "Thêm nhật ký thành công");
      setContent("");
      setSelectedEmotionId(null);
    } else {
      Alert.alert("Thông báo", "Lỗi khi thêm vào");
    }
  };
  return {
    loading,
    content,
    setContent,
    selectedEmotionId,
    setSelectedEmotionId,
    handleSave,
  };
}

//lấy lịch sử nhật ký
export function useEmotionLog() {
  const [emLog, setEmLog] = useState<EmotionLog[]>([]);
  const [loading, setLoading] = useState(false);

  const loadEmotionLog = async () => {
    try {
      setLoading(true);
      const data = await getEmotionLog();
      setEmLog(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    loadEmotionLog();
  });
  return { emLog, loading };
}

// xoá nhật ký
export function useDeleteEmotionLog() {
  const handleRemove = async (id: number) => {
    Alert.alert("Xoá", "Bạn có muốn chắc xoá nhật ký này không ?", [
      { text: "Huỷ", style: "cancel" },
      {
        text: "Xoá",
        style: "destructive",
        onPress: async () => {
          try {
            await deleteEmotionLog(id);
            Alert.alert("Thông báo", "Xóa thành công");
            router.back();
          } catch (error) {
            console.log(error);
            Alert.alert("Thông báo", "Lỗi không thể xoá được");
          }
        },
      },
    ]);
  };
  return handleRemove;
}

export function useTotalLogViewModel() {
  const [logTotal, setLogTotal] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const loadTotal = async () => {
    try {
      setLoading(true);
      const total = await totalEmotionLog();
      setLogTotal(total);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useFocusEffect(
    useCallback(() => {
      loadTotal();
    }, []),
  );
  return { logTotal, loading };
}

export function useMostEmotionViewModel() {
  const [emotion, setEmotion] = useState<Emotion | null>(null);
  const [count, setCount] = useState(0);

  const loadTotal = async () => {
    try {
      const most = await mostEmotion();
      const emotionMap = new Map<number, { emotion: Emotion; count: number }>();
      most.forEach((item: any) => {
        if (!item.emotions) return;
        const exist = emotionMap.get(item.emotion_id);
        if (exist) {
          exist.count++;
        } else {
          emotionMap.set(item.emotion_id, {
            emotion: item.emotions,
            count: 1,
          });
        }
      });
      const result = [...emotionMap.values()].sort(
        (a, b) => b.count - a.count,
      )[0];
      if (result) {
        setEmotion(result.emotion);
        setCount(result.count);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useFocusEffect(
    useCallback(() => {
      loadTotal();
    }, []),
  );

  return {
    emotion,
    count,
  };
}
