import { useAddArticle } from "@/src/viewmodels/admin/ArticleAdminViewModel";
import { useCategoryArticlesViewModel } from "@/src/viewmodels/CategoryArticleViewModel";
import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { router } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function FormAddView() {
  const {
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
    handleAddArticle,
    pickImage,
  } = useAddArticle();
  const { categoryArticles } = useCategoryArticlesViewModel();
  const hasThumbnail = Boolean(thumbnail?.trim());
  const imageUri = hasThumbnail
    ? thumbnail
    : "https://placehold.co/600x350.png";

  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
      <Text
        style={{
          marginTop: 30,
          flex: 1,
          textAlign: "center",
          fontSize: 20,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        Nhập thêm bài viết
      </Text>
      <TouchableOpacity onPress={pickImage} style={styles.imagePicker}>
        <Image
          source={{
            uri: imageUri,
          }}
          style={styles.image}
        />
        {!hasThumbnail && (
          <View style={styles.imageOverlay}>
            <Ionicons name="camera" size={32} color="#fff" />
            <Text style={styles.imageText}>Chọn ảnh bìa</Text>
          </View>
        )}
      </TouchableOpacity>

      <View style={styles.group}>
        <Text style={styles.label}>Tiêu đề</Text>
        <TextInput
          placeholder="Nhập tiêu đề bài viết"
          value={title}
          onChangeText={setTitle}
          style={styles.input}
        />
      </View>

      <View style={styles.group}>
        <Text style={styles.label}>Danh mục</Text>
        <Picker
          style={styles.dropdown}
          selectedValue={category}
          onValueChange={(value) => setCategory(value)}
        >
          <Picker.Item label="Chọn danh mục" value={null} />
          {categoryArticles.map((item) => (
            <Picker.Item
              key={item.id}
              label={item.name}
              value={item.id}
            ></Picker.Item>
          ))}
        </Picker>
      </View>

      <View style={styles.group}>
        <Text style={styles.label}>Tác giả</Text>
        <TextInput
          placeholder="Nhập tên tác giả"
          value={author}
          onChangeText={setAuthor}
          style={styles.input}
        />
      </View>

      <View style={styles.group}>
        <Text style={styles.label}>Nội dung</Text>

        <TextInput
          multiline
          placeholder="Nhập nội dung bài viết..."
          value={content}
          onChangeText={setContent}
          style={styles.textArea}
          textAlignVertical="top"
        />
      </View>

      <View style={styles.group}>
        <Text style={styles.label}>Thời gian đọc</Text>
        <TextInput
          placeholder="Nhập thời gian đọc"
          value={time}
          onChangeText={setTime}
          style={styles.input}
        />
      </View>
      <TouchableOpacity onPress={handleAddArticle} style={styles.button}>
        <Text style={styles.buttonText}>Thêm bài viết</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.back()}
        style={{
          marginTop: 30,
          height: 56,
          backgroundColor: "#f72f0c",
          borderRadius: 14,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          gap: 8,
        }}
      >
        <Text style={styles.buttonText}>Huỷ</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6FA",
  },

  content: {
    padding: 18,
    paddingBottom: 40,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 20,
  },

  imagePicker: {
    height: 200,
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 25,
    backgroundColor: "#E5E7EB",
  },

  image: {
    width: "100%",
    height: "100%",
  },

  imageOverlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.35)",
  },

  imageText: {
    color: "#fff",
    marginTop: 10,
    fontSize: 16,
    fontWeight: "600",
  },

  group: {
    marginBottom: 18,
  },

  label: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 8,
    color: "#1F2937",
  },

  input: {
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    height: 55,
    paddingHorizontal: 16,
    fontSize: 16,
  },

  dropdown: {
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    height: 55,
    paddingHorizontal: 16,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },

  textArea: {
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    minHeight: 180,
    padding: 16,
    fontSize: 16,
  },

  switchContainer: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 16,
    marginBottom: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  subText: {
    color: "#6B7280",
    marginTop: 4,
    width: 250,
  },

  button: {
    marginTop: 30,
    height: 56,
    backgroundColor: "#2563EB",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 18,
  },
});
