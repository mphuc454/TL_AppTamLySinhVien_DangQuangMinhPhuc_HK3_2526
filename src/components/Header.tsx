import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Header() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingTop: 60,
      }}
    >
      <TouchableOpacity onPress={() => router.push("/login")}>
        <Image
          source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
          style={{ width: 48, height: 48, borderRadius: 24 }}
        />
      </TouchableOpacity>

      <TouchableOpacity style={{ position: "relative" }}>
        <Ionicons name="settings" size={28} color="#5B4B6A" />
      </TouchableOpacity>
    </View>
  );
}
