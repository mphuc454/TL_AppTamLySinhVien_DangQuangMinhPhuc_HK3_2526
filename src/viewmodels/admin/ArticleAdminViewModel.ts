import { insertArticle } from "@/src/repository/ArticleRepository";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import { useState } from "react";
import { Alert } from "react-native";
export function useAddArticle() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [time, setTime] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [category, setCategory] = useState<number | null>(null);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const saveArticle = async (
    id_category_articles: number,
    title: string,
    thumbnail: string,
    content: string,
    name_author: string,
    time_to_read: number,
  ) => {
    try {
      setLoading(true);

      await insertArticle(
        id_category_articles,
        title,
        thumbnail,
        content,
        name_author,
        time_to_read,
      );

      return true;
    } catch (error) {
      console.log(error);
      return false;
    } finally {
      setLoading(false);
    }
  };
  const handleSave = async () => {
    if (!title.trim()) {
      Alert.alert("Nhập tiêu đề");
      return;
    }

    if (!category) {
      Alert.alert("Thông báo", "Vui lòng chọn danh mục.");
      return;
    }
    if (!content.trim()) {
      Alert.alert("Thông báo", "Nhập nội dung");
      return;
    }
    if (!author.trim()) {
      Alert.alert("Thông báo", "Nhập tên tác giả");
      return;
    }
    const timeValid = Number(time);
    if (timeValid <= 0 || isNaN(timeValid)) {
      Alert.alert("Thông báo", "Nhập thời gian không hợp lệ");
      return;
    }
    const succ = await saveArticle(
      category,
      title,
      thumbnail,
      content,
      author,
      timeValid,
    );

    if (succ) {
      Alert.alert("Thông báo", "Thêm bài viết thành công");
      setTitle("");
      setAuthor("");
      setContent("");
      setTime("");
      setCategory(null);
      setThumbnail("");
      router.replace("/admin/ArticleManagement");
    } else {
      Alert.alert("Thông báo", "Lỗi khi thêm vào");
    }
  };
  const pickImage = async () => {
    const res = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });
    if (!res.canceled) {
      setThumbnail(res.assets[0].uri);
    }
  };
  return {
    title,
    setTitle,
    author,
    setAuthor,
    time,
    setTime,
    category,
    setCategory,
    content,
    setContent,
    thumbnail,
    setThumbnail,
    loading,
    handleSave,
    pickImage,
  };
}
