import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useContext } from "react";
import { TouchableOpacity, View } from "react-native";
import { useCheckLogin } from "../viewmodels/CheckLoginViewModel";
import { ThemeContext } from "../views/theme/ThemeContext";

export default function Header() {
  const { colors } = useContext(ThemeContext);
  const { isLogin } = useCheckLogin();

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
      <TouchableOpacity
        onPress={() => router.push(isLogin ? "/auth/Profile" : "/auth/Login")}
      >
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
