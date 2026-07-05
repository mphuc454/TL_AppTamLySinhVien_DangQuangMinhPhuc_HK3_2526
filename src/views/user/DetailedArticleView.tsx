import { useArticleDetailViewModel, useArticleViewModel } from "@/src/viewmodels/ArticleViewModel";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function DetailedArticleView() {
  const {id} = useLocalSearchParams();
  const {arc} = useArticleDetailViewModel(Number(id));
  const {articles} = useArticleViewModel();
  const otherArticles = articles.filter((articles) => articles.id !== Number(id)).slice(0,2)
  
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#F7F7F8",
        marginTop: 30,
        paddingHorizontal: 20,
      }}
      contentContainerStyle={{ paddingBottom: 120 }}
    >
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 30 }}
      >
        <TouchableOpacity onPress={() => router.push("/(tabs)/Index")}>
          <Ionicons name="arrow-back" size={25}></Ionicons>
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: 220,
          backgroundColor: "#D88D8D",
          marginTop: 20,
          marginHorizontal: 8,
        }}
      ></View>
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
    <Text>{arc?.created_at ? new Date(arc.created_at).toLocaleDateString("vi-VN"): ""}</Text>
    <Text style={{ marginLeft: 15, fontWeight: "light",}}>Tác giả: </Text>
    <Text
      numberOfLines={1}
      style={{ marginLeft: 1, fontWeight: "bold", flex: 1 }}
    >
      {arc?.name_author}
    </Text>
  </View>

  <View style={{ flexDirection: "row", alignItems: "center" }}>
    <Ionicons name="time-outline" size={15} />
    <Text style={{ marginLeft: 4 }}>
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
          color: "#333",
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
