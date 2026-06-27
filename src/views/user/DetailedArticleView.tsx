import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
const ARTICLE = [
  {
    id: 1,
    title: "5 bước xây dựng thói quen tích cực mỗi ngày",
    time: "7 phút đọc",
    view: 1,
    specialty: "Cảm xúc",
  },
];
export default function DetailedArticleView() {
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
          Cảm xúc
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
        5 bước xây dựng thói quen tích cực mỗi ngày
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 12,
          marginHorizontal: 12,
        }}
      >
        <Text style={{ fontWeight: "light" }}>10/06/2026</Text>
        <Ionicons
          name="time-outline"
          size={15}
          style={{ marginLeft: 15 }}
        ></Ionicons>
        <Text style={{ marginLeft: 4, color: "#555" }}>5 phút</Text>
        <Ionicons name="eye" size={15} style={{ marginLeft: 15 }}></Ionicons>
        <Text style={{ marginLeft: 4, color: "#555" }}>1</Text>
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
        Lo âu trước kỳ thi là cảm giác rất phổ biến với học sinh, sinh viên. Đó
        là phản ứng tự nhiên của cơ thể khi đối mặt với áp lực, nhưng nếu không
        kiểm soát tốt, nó có thể ảnh hưởng nghiêm trọng đến khả năng tập trung
        và kết quả học tập.
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          marginTop: 40,
          marginHorizontal: 12,
        }}
      >
        Bài viết khác{" "}
      </Text>
      <View style={{ marginTop: 20 }}>
        {ARTICLE.map((arc) => (
          <TouchableOpacity
            onPress={() => router.push("/details/DetailedArticle")}
            key={arc.id}
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
            <View
              style={{
                width: 55,
                height: 55,
                backgroundColor: "#E7A3A8",
                marginRight: 10,
              }}
            ></View>
            <View style={{ flex: 1 }}>
              <Text
                numberOfLines={2}
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                }}
              >
                {arc.title}
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
                  {arc.time}
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
                  {arc.view} lượt xem
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
                  {arc.specialty}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}
