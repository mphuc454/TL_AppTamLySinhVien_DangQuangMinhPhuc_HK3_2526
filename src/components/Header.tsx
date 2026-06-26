import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { TouchableOpacity, View } from "react-native";

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
      <TouchableOpacity onPress={() => router.push("/auth/Login")}>
        <Ionicons name="person" size={28}></Ionicons>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push("/auth/SettingsUser")}
        style={{ position: "relative" }}
      >
        <Ionicons name="settings" size={28} color="#5B4B6A" />
      </TouchableOpacity>
    </View>
  );
}
