import {
  deleteArticle,
  getArticleByID,
  insertArticle,
  updateArticle,
} from "@/src/repository/ArticleRepository";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import { useCallback, useEffect, useState } from "react";
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
      router.back();
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
      const uri = res.assets?.[0]?.uri?.trim();
      setThumbnail(uri || "");
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
    handleSave,
    pickImage,
    loading,
  };
}

export function useDeleteArticle() {
  const handleRemove = (id: number) => {
    Alert.alert("Xoá bài viết", "Bạn có muốn chắc xoá bài viết không ?", [
      { text: "Huỷ", style: "cancel" },
      {
        text: "Xoá",
        style: "destructive",
        onPress: async () => {
          try {
            await deleteArticle(id);
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

export function useEditArticle(id: number) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [time, setTime] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [category, setCategory] = useState<number | null>(null);
  const [content, setContent] = useState("");

  const loadArticles = useCallback(async () => {
    const article = await getArticleByID(id);
    setTitle(article.title);
    setAuthor(article.name_author);
    setContent(article.content);
    setThumbnail(article.thumbnail);
    setCategory(article.id_category_articles.id);
    setTime(String(article.time_to_read));
  }, [id]);
  useEffect(() => {
    loadArticles();
  }, [loadArticles]);
  const handleUpdate = async () => {
    await updateArticle(
      id,
      category!,
      title,
      thumbnail,
      content,
      author,
      Number(time),
    );
    Alert.alert("Thông báo", "Cập nhật bài viết thành công");
    router.back();
  };
  const pickImage = async () => {
    const res = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [16, 9],
      quality: 1,
    });

    if (!res.canceled) {
      const uri = res.assets?.[0]?.uri?.trim();
      setThumbnail(uri || "");
    }
  };
  return {
    title,
    setTitle,
    author,
    setAuthor,
    content,
    setContent,
    thumbnail,
    setThumbnail,
    category,
    setCategory,
    time,
    setTime,
    handleUpdate,
    pickImage,
  };
}
