import * as ImagePicker from "expo-image-picker";
import { router, useFocusEffect } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { Alert } from "react-native";
import { Article } from "../models/Article";
import {
  deleteArticle,
  getArticleByID,
  getArticles,
  inscreaseView,
  insertArticle,
  updateArticle,
} from "../repository/ArticleRepository";

// lấy danh sách bài viết
export function useArticleViewModel() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(false);
  const loadArticles = async () => {
    try {
      setLoading(true);
      const data = await getArticles();
      setArticles(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useFocusEffect(
    useCallback(() => {
      loadArticles();
    }, []),
  );

  return { articles, loading };
}
// lấy chi tiết bài viết
export function useArticleDetailViewModel(id: number) {
  const [arc, setArc] = useState<Article | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadDetail = async () => {
      try {
        setLoading(true);
        const data = await getArticleByID(id);
        setArc(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    loadDetail();
  }, [id]);

  return { arc, loading };
}
// lấy số lượng người xem bài viết
export function useViewsbyUserViewModel(id: number) {
  useEffect(() => {
    if (!id || Number.isNaN(id)) return;

    const totalView = async () => {
      try {
        await inscreaseView(id);
      } catch (err) {
        console.log(err);
      }
    };

    totalView();
  }, [id]);
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
    try {
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
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Lỗi",
        "Không thể chọn ảnh. Vui lòng kiểm tra quyền truy cập thư viện ảnh.",
      );
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

// xoá bài viết
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

// sửa bài viết
export function useEditArticle(id: number) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [time, setTime] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [category, setCategory] = useState<number | null>(null);
  const [content, setContent] = useState("");

  const loadArticles = useCallback(async () => {
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
    loadArticles();
  }, [loadArticles]);

  const handleUpdate = async () => {
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
    try {
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
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Lỗi",
        "Không thể chọn ảnh. Vui lòng kiểm tra quyền truy cập thư viện ảnh.",
      );
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
