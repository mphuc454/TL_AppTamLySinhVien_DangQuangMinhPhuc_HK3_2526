import { useEffect, useState } from "react";
import { Emotion } from "../models/Emotion";
import { getAllEmotion, insertEmotionLog } from "../repository/EmotionRepository";

// lấy danh sách các emotion
export function useEmotionViewModel(){
    const [em, setEm] = useState<Emotion[]>([]);
    const [loading, setLoading] = useState(false);

    const loadEmotion = async () => {
            try{
                setLoading(true)
                const data = await getAllEmotion();
                setEm(data);
            }catch(error){
                console.log(error)
            }finally{
                setLoading(false)
            }
        }
         useEffect(() => {
                loadEmotion();
            }, []);
       return {em, loading}     
}
export function useAddEmotionLog() {
  const [selectedEmotionId, setSelectedEmotionId] = useState<number | null>(null);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const saveEmotionLog = async (
    accountId: number,
    emotionId: number,
    content: string
  ) => {
    try {
      setLoading(true);

      await insertEmotionLog(accountId, emotionId, content);

      return true;
    } catch (error) {
      console.log(error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (accountId: number) => {
    if (!selectedEmotionId) {
      alert("Vui lòng chọn biểu tượng cảm xúc");
      return;
    }

    if (!content.trim()) {
      alert("Vui lòng nhập nội dung");
      return;
    }

    const success = await saveEmotionLog(
      accountId,
      selectedEmotionId,
      content
    );

    if (success) {
      alert("Lưu thành công");
      setContent("");
      setSelectedEmotionId(null);
    }
};
  return {loading,content,setContent,selectedEmotionId,setSelectedEmotionId,handleSave};
}
