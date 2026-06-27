import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
const STEPS = [
  {
    id: "1",
    title: "Hít vào bằng mũi",
    description: "Ngồi thẳng lưng, hít vào chậm và sâu qua mũi, đếm đến 4",
    duration: "4 giây",
  },
  {
    id: "2",
    title: "Giữ hơi thở",
    description: "Nhẹ nhàng giữ hơi thở trong lồng ngực, không gắng sức",
    duration: "7 giây",
  },
  {
    id: "3",
    title: "Thở ra bằng miệng",
    description: 'Thở ra chậm và đều qua miệng, tạo âm thanh "whoosh" nhẹ',
    duration: "8 giây",
  },
  {
    id: "4",
    title: "Lặp lại",
    description: "Thực hiện lại chu trình trên 4 lần liên tiếp",
    duration: "5 giây",
  },
];
export default function DetailedExercisesView() {
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
        }}
      >
        <Text
          style={{
            fontWeight: "semibold",
          }}
        >
          BÀI TẬP
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
        Bài tập thở 4-7-8
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 12,
          marginHorizontal: 12,
        }}
      >
        <Text>Số vòng: </Text>
        <Text style={{ color: "#555" }}>4</Text>
        <Text style={{ marginLeft: 5, fontWeight: "light" }}>lượt</Text>
        <Ionicons
          name="time-outline"
          size={15}
          style={{ marginLeft: 15 }}
        ></Ionicons>
        <Text style={{ marginLeft: 4, color: "#555" }}>5 phút</Text>
        <Text style={{ marginLeft: 20 }}>Mức độ: </Text>
        <Text style={{ marginLeft: 3, color: "#555" }}>Dễ</Text>
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
        Kỹ thuật thở giúp kích hoạt hệ thần kinh đối giao cảm, làm dịu cơ thể và
        giảm cảm giác lo âu nhanh chóng, chỉ trong vài phút.
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
          marginTop: 30,
        }}
      >
        Các bước thực hiện:
      </Text>
      <FlatList
        style={{ marginTop: 20 }}
        data={STEPS}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              marginBottom: 24,
            }}
          >
            <View
              style={{
                width: 34,
                height: 34,
                borderRadius: 17,
                backgroundColor: "#c5871c",
                justifyContent: "center",
                alignItems: "center",
                marginRight: 14,
                marginTop: 2,
              }}
            >
              <Text
                style={{ fontSize: 15, fontWeight: "700", color: "#efece7" }}
              >
                {item.id}
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                {item.title}
              </Text>
              <Text style={{ fontSize: 15, color: "#888", lineHeight: 22 }}>
                {item.description}
              </Text>
              <View
                style={{
                  marginTop: 10,
                  alignSelf: "flex-start",
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "#f6ca5b",
                  borderRadius: 20,
                  paddingHorizontal: 12,
                  paddingVertical: 5,
                }}
              >
                <Text
                  style={{
                    marginLeft: 4,
                    fontWeight: "light",
                    fontSize: 13,
                  }}
                >
                  {item.duration}
                </Text>
              </View>
            </View>
          </View>
        )}
      ></FlatList>
    </ScrollView>
  );
}
