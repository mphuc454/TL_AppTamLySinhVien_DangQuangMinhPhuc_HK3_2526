import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
const DATA = [
  {
    id: "1",
    title: "Thiền định buổi sáng",
    time: "5 phút",
    icon: "meditation",
    color: "#EEF2FF",
    tag: "Vui vẻ",
    iconColor: "#F59E0B",
  },
  {
    id: "2",
    title: "Thở 4-7-8",
    time: "3 phút",
    icon: "lungs",
    color: "#FFF3D8",
    tag: "Lo âu",
    iconColor: "#3B82F6",
  },
  {
    id: "3",
    title: "Viết cảm xúc",
    time: "10 phút",
    icon: "book",
    color: "#FFE7EC",
    tag: "Mọi trạng thái",
    iconColor: "#6B46C1",
  },
  {
    id: "4",
    title: "Đi bộ chánh niệm",
    time: "15 phút",
    icon: "walk",
    color: "#E8FFF7",
    tag: "Buồn",
    iconColor: "#F59E0B",
  },
];
export default function ExercisesView() {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#F5EDED" }}
      contentContainerStyle={{ paddingBottom: 180 }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 130,
          marginLeft: 20,
        }}
      >
        <TouchableOpacity onPress={() => router.push("/(tabs)/Index")}>
          <Ionicons name="arrow-back" size={25}></Ionicons>
        </TouchableOpacity>
        <Text
          style={{
            flex: 1,
            textAlign: "center",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Bài tập cải thiện
        </Text>
      </View>
      <TextInput
        placeholder="Tìm kiếm bài tập..."
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
      ></TextInput>
      <View style={{ marginTop: 20, marginHorizontal: 20 }}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 16,
            marginBottom: 15,
          }}
        >
          DANH SÁCH BÀI TẬP
        </Text>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {DATA.map((item) => (
            <TouchableOpacity
              onPress={() => router.push("/(no tabs)/DetailedExercises")}
              key={item.id}
              style={{
                width: "48%",
                backgroundColor: "#2D2121",
                borderRadius: 18,
                padding: 16,
                marginBottom: 16,
              }}
            >
              <View
                style={{
                  backgroundColor: "#FBDFDF",
                  alignSelf: "flex-start",
                  paddingHorizontal: 8,
                  paddingVertical: 3,
                  borderRadius: 6,
                  marginBottom: 10,
                }}
              >
                <Text
                  style={{ fontSize: 9, fontWeight: "700", color: "#7a2e2e" }}
                >
                  {item.tag}
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "700",
                  color: "#FFFFFF",
                  marginBottom: 6,
                }}
              >
                {item.title}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 8,
                }}
              >
                <Ionicons name="time-outline" size={14} color="#888" />
                <Text
                  style={{
                    fontWeight: "light",
                    marginLeft: 4,
                    color: "#FAF3F3",
                  }}
                >
                  {item.time}
                </Text>
              </View>

              {/* Tag */}
              <View
                style={{
                  alignSelf: "flex-start",
                  marginTop: 12,
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  borderRadius: 8,
                }}
              ></View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
