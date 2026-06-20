import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Setting() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#F7F7F8",
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 30 }}
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
          Cài đặt ứng dụng
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => router.push("/auth/Language")}
        style={{
          backgroundColor: "#FCDDDD",
          borderRadius: 25,
          flexDirection: "row",
          alignItems: "center",
          padding: 20,
          marginTop: 30,
        }}
      >
        <View
          style={{
            width: 45,
            height: 45,
            borderRadius: 10,
            backgroundColor: "#D5D5D5",
            justifyContent: "center",
            alignItems: "center",
            marginRight: 20,
          }}
        >
          <Ionicons name="earth" size={30}></Ionicons>
        </View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            flex: 1,
            textAlign: "center",
          }}
        >
          Ngôn ngữ
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.push("/auth/Theme")}
        style={{
          backgroundColor: "#FCDDDD",
          borderRadius: 25,
          flexDirection: "row",
          alignItems: "center",
          padding: 20,
          marginTop: 30,
        }}
      >
        <View
          style={{
            width: 45,
            height: 45,
            borderRadius: 10,
            backgroundColor: "#D5D5D5",
            justifyContent: "center",
            alignItems: "center",
            marginRight: 20,
          }}
        >
          <Ionicons name="sunny" size={30}></Ionicons>
        </View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            flex: 1,
            textAlign: "center",
          }}
        >
          Thay đổi màu nền
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
