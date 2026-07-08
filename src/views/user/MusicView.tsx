import { useMusicViewModel } from "@/src/viewmodels/MusicViewModel";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function MusicView() {
    const{mus} = useMusicViewModel()
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
          Nghe nhạc thư giãn
        </Text>
      </View>
      <TextInput
        placeholder="Tìm kiếm nhạc..."
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
      </ScrollView>
      <View style={{ marginTop: 30, marginHorizontal: 20 }}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 16,
            marginBottom: 15,
          }}
        >
          DANH SÁCH NHẠC
        </Text>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {mus.length > 0 ? (
            mus.map((item) => (
              <TouchableOpacity
  key={item.id}
  onPress={() =>
    router.push({
      pathname: "/(no tabs)/DetailedMusic",
      params: {
        id: item.id,
      },
    })
  }
  style={{
    width: "48%",
    borderRadius: 18,
    overflow: "hidden", // cần để bo góc ảnh
    marginBottom: 16,
  }}
>
  <ImageBackground
    source={{ uri: item.image_url }}
    resizeMode="cover"
    style={{
      height: 180,
      justifyContent: "flex-end",
    }}
  >
    {/* Lớp phủ tối để chữ dễ đọc */}
    <View
      style={{
        backgroundColor: "rgba(0,0,0,0.45)",
        padding: 16,
      }}
    >
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
        }}
      >
        <Ionicons name="time-outline" size={14} color="#FFF" />
        <Text
          style={{
            marginLeft: 4,
            color: "#FFF",
          }}
        >
          {item.duration} phút
        </Text>
      </View>
    </View>
  </ImageBackground>
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
              Hiện chưa có bài nhạc nào.
            </Text>
          )}
        </View>
      </View>
    </ScrollView>
  );
}
