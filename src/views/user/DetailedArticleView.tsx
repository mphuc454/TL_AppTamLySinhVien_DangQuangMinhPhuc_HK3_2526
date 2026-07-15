import {
  useArticleDetailViewModel,
  useArticleViewModel,
  useViewsbyUserViewModel,
} from "@/src/viewmodels/ArticleViewModel";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useContext } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { ThemeContext } from "../theme/ThemeContext";

export default function DetailedArticleView() {
  const { colors } = useContext(ThemeContext);
  const { id } = useLocalSearchParams();
  const { arc } = useArticleDetailViewModel(Number(id));
  const { articles } = useArticleViewModel();
  // const { totalView } = useViewsbyUserViewModel();
  useViewsbyUserViewModel(Number(id));

  const otherArticles = articles
    .filter((articles) => articles.id !== Number(id))
    .slice(0, 2);

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: colors.background,
        marginTop: 30,
        paddingHorizontal: 20,
      }}
      contentContainerStyle={{ paddingBottom: 120 }}
    >
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 30 }}
      >
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons
            style={{ color: colors.text }}
            name="arrow-back"
            size={25}
          ></Ionicons>
        </TouchableOpacity>
      </View>

      <Image
        source={{ uri: arc?.thumbnail }}
        style={{
          width: "100%",
          height: 180,
        }}
      ></Image>
      <View
        style={{
          alignSelf: "flex-start",
          backgroundColor: "#D9D9D9",
          paddingHorizontal: 15,
          paddingVertical: 6,
          borderRadius: 20,
          marginTop: 15,
          marginLeft: 12,
        }}
      >
        <Text
          style={{
            fontWeight: "semibold",
          }}
        >
          {arc?.id_category_articles.name}
        </Text>
      </View>
      <Text
        style={{
          fontSize: 22,
          fontWeight: "bold",
          lineHeight: 28,
          marginTop: 15,
          marginHorizontal: 12,
          color: colors.text,
        }}
      >
        {arc?.title}
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginHorizontal: 12,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
          <Text style={{ color: colors.text }}>
            {arc?.created_at
              ? new Date(arc.created_at).toLocaleDateString("vi-VN")
              : ""}
          </Text>
          <Text
            style={{ marginLeft: 15, fontWeight: "light", color: colors.text }}
          >
            Tác giả:{" "}
          </Text>
          <Text
            numberOfLines={1}
            style={{
              marginLeft: 1,
              fontWeight: "bold",
              flex: 1,
              color: colors.text,
            }}
          >
            {arc?.name_author}
          </Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons
            style={{ color: colors.text }}
            name="time-outline"
            size={15}
          />
          <Text style={{ marginLeft: 4, color: colors.text }}>
            {arc?.time_to_read} phút
          </Text>
        </View>
      </View>
      <Text
        style={{
          marginTop: 25,
          marginHorizontal: 12,
          fontSize: 16,
          lineHeight: 30,
          color: colors.text,
          textAlign: "justify",
          fontWeight: "semibold",
        }}
      >
        {arc?.content}
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          marginTop: 40,
          marginHorizontal: 12,
          color: colors.text,
        }}
      >
        Bài viết khác:
      </Text>
      <View style={{ marginTop: 20 }}>
        {otherArticles.map((article) => (
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

                <Ionicons
                  name="eye-outline"
                  size={14}
                  color="#555"
                  style={{ marginLeft: 15 }}
                />
                <Text
                  style={{
                    marginLeft: 4,
                    color: "#555",
                    fontSize: 13,
                  }}
                >
                  {article.views ?? 0} lượt xem
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
        ))}
      </View>
    </ScrollView>
  );
}
