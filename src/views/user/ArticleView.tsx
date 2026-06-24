import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

const ARTICLE = [
  {
    id: 1,
    title:"5 bước xây dựng thói quen tích cực mỗi ngày",
    time:"7 phút",
    view: 1,
    specialty: "Cảm xúc",
  },
];
const options = [
  { id: 0, label: "Cảm xúc" },
  { id: 1, label: "Sức khoẻ học đường" },
  { id: 2, label: "Kỹ năng sống" },
  { id: 3, label: "Giấc ngủ" },
];
export default function ArticleView(){
    return(
        <ScrollView style={{ flex: 1, backgroundColor: "#F5EDED" }}
      contentContainerStyle={{ paddingBottom: 180 }}>
           <View style={{ alignItems: "center", marginTop: 30 }}>
        <Text
          style={{
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
      ></TextInput>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 15, paddingHorizontal: 20 }}
      >
        {options.map((item) => (
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
            <Text>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={{ marginTop: 20 }}>
  {ARTICLE.map((arc) => (
    <TouchableOpacity
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
      {/* Thumbnail */}
      <View
        style={{
          width: 55,
          height: 55,
          backgroundColor: "#E7A3A8",
          marginRight: 10,
        }}
      />

      {/* Content */}
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

        {/* Time + View */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 6,
          }}
        >
          <Ionicons
            name="time-outline"
            size={14}
            color="#555"
          />
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
            {arc.view}
          </Text>
        </View>

        {/* Category */}
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