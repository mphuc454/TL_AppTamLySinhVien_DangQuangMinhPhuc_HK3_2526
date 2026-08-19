import {
  deleteArticle,
  insertArticle,
  updateArticle,
  uploadArticleImage,
} from "@/src/repository/admin/ArticleAdminRepository";
import { getArticleByID } from "@/src/repository/ArticleRepository";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { Alert } from "react-native";

// xoá bài viết
export function useDeleteArticle() {
  const handleRemoveArticle = (id: number) => {
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
  return handleRemoveArticle;
}

// thêm bài viết
export function useAddArticle() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [time, setTime] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [category, setCategory] = useState<number | null>(null);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState<string | null>(null);

  const addArticle = async (
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
  const handleAddArticle = async () => {
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
    const succ = await addArticle(
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
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permission.granted) {
      Alert.alert("Thông báo", "Bạn cần cấp quyền truy cập thư viện ảnh.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled) {
      try {
        const uri = result.assets[0].uri;
        setImage(uri);
        const url = await uploadArticleImage(uri);

        setThumbnail(url);
      } catch (error) {
        console.log("Upload image error:", error);

        Alert.alert("Thông báo", "Không thể tải ảnh lên.");
      }
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
    handleAddArticle,
    pickImage,
    loading,
  };
}

// sửa bài viết
export function useEditArticle(id: number) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [time, setTime] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [category, setCategory] = useState<number | null>(null);
  const [content, setContent] = useState("");
  const [image, setImage] = useState<string | null>(null);

  const updateArticles = useCallback(async () => {
    try {
      const article = await getArticleByID(id);
      setTitle(article.title);
      setAuthor(article.name_author);
      setContent(article.content);
      setThumbnail(article.thumbnail);
      setCategory(article.id_category_articles?.id ?? null);
      setTime(String(article.time_to_read));
    } catch (error) {
      console.log(error);
      Alert.alert("Lỗi", "Không thể tải bài viết");
    }
  }, [id]);
  useEffect(() => {
    updateArticles();
  }, [updateArticles]);

  const handleUpdateArticles = async () => {
    if (!category) {
      Alert.alert("Thông báo", "Vui lòng chọn danh mục bài viết");
      return;
    }
    try {
      await updateArticle(
        id,
        category,
        title,
        thumbnail,
        content,
        author,
        Number(time),
      );
      Alert.alert("Thông báo", "Cập nhật bài viết thành công");
      router.back();
    } catch (error) {
      console.log(error);
      Alert.alert("Lỗi", "Cập nhật bài viết thất bại");
    }
  };
  const pickImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permission.granted) {
      Alert.alert("Thông báo", "Bạn cần cấp quyền truy cập thư viện ảnh.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled) {
      try {
        const uri = result.assets[0].uri;
        setImage(uri);
        const url = await uploadArticleImage(uri);
        setThumbnail(url);
      } catch (error) {
        console.log("Upload image error:", error);

        Alert.alert("Thông báo", "Không thể tải ảnh lên.");
      }
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
    handleUpdateArticles,
    pickImage,
  };
}
