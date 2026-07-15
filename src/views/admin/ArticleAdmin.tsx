import { Ionicons } from "@expo/vector-icons";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function AdminArticleView() {
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
          + Thêm bài viết
        </Text>
      </TouchableOpacity>
      <View
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
          source={{ uri: "https://picsum.photos/600/300" }}
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
            React Native Expo là gì?
          </Text>

          <Text
            style={{
              fontSize: 16,
              fontWeight: "600",
            }}
          >
            Admin
          </Text>

          <Text
            style={{
              fontSize: 12,
              fontWeight: "500",
            }}
          >
            Công nghệ
          </Text>

          <Text
            style={{
              color: "#555",
              fontSize: 13,
            }}
          >
            8 lượt xem
          </Text>

          <Text
            style={{
              color: "green",
              marginTop: 5,
            }}
          >
            Đã xuất bản
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
      </View>
    </ScrollView>
  );
}
