import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { TouchableOpacity, View } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "../views/theme/ThemeContext";

export default function Header() {
  const { colors } = useContext(ThemeContext);

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingTop: 60,
        backgroundColor: colors.background,
      }}
    >
      <TouchableOpacity onPress={() => router.push("/auth/Login")}>
        <Ionicons name="person" size={28} color={colors.text}></Ionicons>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push("/auth/SettingsUser")}
        style={{ position: "relative" }}
      >
        <Ionicons name="settings" size={28} color={colors.text} />
      </TouchableOpacity>
    </View>
  );
}
