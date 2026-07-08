import { FilterArticle } from "@/src/filter/FilterView";
import { useCategoryArticlesViewModel } from "@/src/viewmodels/CategoryArticleViewModel";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useContext } from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ThemeContext } from "../theme/ThemeContext";

export default function ArticleView() {
  const { colors } = useContext(ThemeContext);
  const { selectedCategory, setSelectedCategory, filterArticles } =
    FilterArticle();
  const { categoryArticles } = useCategoryArticlesViewModel();
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.background }}
      contentContainerStyle={{ paddingBottom: 180 }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 30,
          marginLeft: 20,
        }}
      >
        <TouchableOpacity onPress={() => router.push("/(tabs)/Index")}>
          <Ionicons
            style={{ color: colors.text }}
            name="arrow-back"
            size={25}
          />
        </TouchableOpacity>

        <Text
          style={{
            flex: 1,
            textAlign: "center",
            fontSize: 20,
            fontWeight: "bold",
            color: colors.text,
          }}
        >
          Bài viết
        </Text>
      </View>

      <TextInput
        placeholder="Tìm kiếm bài viết..."
        style={{
          marginTop: 30,
          height: 50,
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 15,
          marginHorizontal: 20,
          paddingHorizontal: 15,
          backgroundColor: "#fff",
        }}
      />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 15, paddingHorizontal: 20 }}
      >
        {categoryArticles.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => setSelectedCategory(item.id)}
            style={{
              backgroundColor: "#D9D9D9",
              paddingHorizontal: 12,
              paddingVertical: 8,
              borderRadius: 16,
              marginRight: 10,
            }}
          >
            <Text
              style={{ color: selectedCategory === item.id ? "#fff" : "#000" }}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={{ marginTop: 20 }}>
        {filterArticles.length > 0 ? (
          filterArticles.map((article) => (
            <TouchableOpacity
              onPress={() =>
                router.push({
                  pathname: "/(no tabs)/DetailedArticle",
                  params: {
                    id: article.id,
                  },
                })
              }
              key={article.id}
              style={{
                backgroundColor: "#FFF",
                marginHorizontal: 20,
                marginBottom: 15,
                borderRadius: 20,
                padding: 12,
                borderWidth: 1,
                borderColor: "#000",
                flexDirection: "row",
                alignItems: "center",
                shadowColor: "#000",
                shadowOffset: {
                  width: 2,
                  height: 3,
                },
                shadowOpacity: 0.2,
                shadowRadius: 4,
                elevation: 4,
              }}
            >
              <Image
                source={{ uri: article.thumbnail }}
                style={{
                  width: 55,
                  height: 55,
                  borderRadius: 8,
                  marginRight: 10,
                }}
              />

              <View style={{ flex: 1 }}>
                <Text
                  numberOfLines={2}
                  style={{
                    fontSize: 16,
                    fontWeight: "600",
                  }}
                >
                  {article.title}
                </Text>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 6,
                  }}
                >
                  <Ionicons name="time-outline" size={14} color="#555" />

                  <Text
                    style={{
                      marginLeft: 4,
                      color: "#555",
                      fontSize: 13,
                    }}
                  >
                    {article.time_to_read} phút đọc
                  </Text>
                </View>

                <View
                  style={{
                    alignSelf: "flex-start",
                    backgroundColor: "#D9D9D9",
                    borderRadius: 20,
                    paddingHorizontal: 14,
                    paddingVertical: 4,
                    marginTop: 8,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: "500",
                    }}
                  >
                    {article.id_category_articles.name}
                  </Text>
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
      </View>
    </ScrollView>
  );
}
