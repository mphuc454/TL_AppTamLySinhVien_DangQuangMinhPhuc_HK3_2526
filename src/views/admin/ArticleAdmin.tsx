import { useArticleViewModel } from "@/src/viewmodels/ArticleViewModel";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function AdminArticleView() {
  const { articles } = useArticleViewModel();
  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
      <View
        style={{
          paddingHorizontal: 20,
          paddingTop: 20,
          paddingBottom: 24,
          borderBottomLeftRadius: 24,
          borderBottomRightRadius: 24,
          marginTop: 30,
          elevation: 5,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.15,
          shadowRadius: 4,
        }}
      >
        <Text
          style={{
            fontSize: 28,
            fontWeight: "bold",
          }}
        >
          Quản lý bài viết
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#fff",
          margin: 15,
          paddingHorizontal: 15,
          borderRadius: 12,
          elevation: 2,
        }}
      >
        <Ionicons name="search" size={20} color="gray" />

        <TextInput
          placeholder="Tìm bài viết..."
          style={{
            flex: 1,
            height: 45,
            marginLeft: 10,
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() => router.push("/admin/CRUD/FormAddArticle")}
        style={{
          backgroundColor: "#2563eb",
          marginHorizontal: 15,
          borderRadius: 10,
          padding: 14,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontWeight: "bold",
          }}
        >
          Thêm bài viết
        </Text>
      </TouchableOpacity>
      {articles.length > 0 ? (
        articles.map((item) => (
          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: "/(no tabs)/DetailedArticle",
                params: {
                  id: item.id,
                },
              })
            }
            key={item.id}
            style={{
              backgroundColor: "#fff",
              marginHorizontal: 15,
              marginTop: 15,
              borderRadius: 15,
              overflow: "hidden",
              elevation: 3,
            }}
          >
            <Image
              source={{ uri: item.thumbnail }}
              style={{
                width: "100%",
                height: 180,
              }}
            />

            <View style={{ padding: 15 }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                {item.title}
              </Text>

              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                }}
              >
                {item.name_author}
              </Text>

              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "500",
                }}
              >
                {item.id_category_articles.name}
              </Text>

              <Text
                style={{
                  color: "#555",
                  fontSize: 13,
                }}
              >
                {item.views} lượt xem
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  marginTop: 15,
                }}
              >
                <TouchableOpacity style={{ marginRight: 20 }}>
                  <Ionicons name="create-outline" size={24} color="#2563eb" />
                </TouchableOpacity>

                <TouchableOpacity>
                  <Ionicons name="trash-outline" size={24} color="red" />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        ))
      ) : (
        <Text
          style={{
            width: "100%",
            textAlign: "center",
            marginTop: 20,
            fontSize: 16,
            color: "#666",
          }}
        >
          Hiện chưa có bài viết nào.
        </Text>
      )}
    </ScrollView>
  );
}
