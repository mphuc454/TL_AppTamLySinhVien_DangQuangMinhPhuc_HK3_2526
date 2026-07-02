import { Article } from "@/src/models/Article";
import { CategoryArticle } from "@/src/models/CategoryArticle";
import { ArticleViewModel } from "@/src/viewmodels/ArticleViewModel";
import { CategoryArticlesViewModel } from "@/src/viewmodels/CategoryArticleViewModel";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const viewModel = new ArticleViewModel();
const categoryViewModel = new CategoryArticlesViewModel();

export default function ArticleView() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [categoryArticles, setCategoryArticles] = useState<CategoryArticle[]>(
    [],
  );

  useEffect(() => {
    loadArticles();
    loadCategoryArticles();
  }, []);

  const loadArticles = async () => {
    try {
      const data = await viewModel.loadArticles();
      setArticles(data);
    } catch (error) {
      console.log(error);
    }
  };
  const loadCategoryArticles = async () => {
    try {
      const data = await categoryViewModel.loadCategoryArticles();
      setCategoryArticles(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#F5EDED" }}
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
          <Ionicons name="arrow-back" size={25} />
        </TouchableOpacity>

        <Text
          style={{
            flex: 1,
            textAlign: "center",
            fontSize: 20,
            fontWeight: "bold",
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
            style={{
              backgroundColor: "#D9D9D9",
              paddingHorizontal: 12,
              paddingVertical: 8,
              borderRadius: 16,
              marginRight: 10,
            }}
          >
            <Text>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={{ marginTop: 20 }}>
        {articles.map((article) => (
          <TouchableOpacity
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
                  {article.category_articles?.name}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}
