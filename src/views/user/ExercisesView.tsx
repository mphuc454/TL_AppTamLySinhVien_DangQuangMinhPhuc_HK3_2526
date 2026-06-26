import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
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
    tagColor: "#D9F5E8",
    iconColor: "#F59E0B",
  },
  {
    id: "2",
    title: "Thở 4-7-8",
    time: "3 phút",
    icon: "lungs",
    color: "#FFF3D8",
    tag: "Lo âu",
    tagColor: "#FFE8A3",
    iconColor: "#3B82F6",
  },
  {
    id: "3",
    title: "Viết cảm xúc",
    time: "10 phút",
    icon: "book",
    color: "#FFE7EC",
    tag: "Mọi trạng thái",
    tagColor: "#DCE7FF",
    iconColor: "#6B46C1",
  },
  {
    id: "4",
    title: "Đi bộ chánh niệm",
    time: "15 phút",
    icon: "walk",
    color: "#E8FFF7",
    tag: "Buồn",
    tagColor: "#FFE0E6",
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
              key={item.id}
              style={{
                width: "48%",
                backgroundColor: "#fff",
                borderRadius: 20,
                padding: 15,
                marginBottom: 18,
              }}
            >
              <View
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 18,
                  backgroundColor: item.color,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MaterialCommunityIcons
                  name={item.icon as any}
                  size={32}
                  color={item.iconColor}
                />
              </View>

              {/* Tiêu đề */}
              <Text
                style={{
                  marginTop: 15,
                  fontSize: 18,
                  fontWeight: "700",
                }}
              >
                {item.title}
              </Text>

              {/* Thời gian */}
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
                    marginLeft: 4,
                    color: "#888",
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
                  backgroundColor: item.tagColor,
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  borderRadius: 8,
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "600",
                  }}
                >
                  {item.tag}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
