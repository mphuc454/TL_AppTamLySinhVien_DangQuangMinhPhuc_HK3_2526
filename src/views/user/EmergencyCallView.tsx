import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { ThemeContext } from "../theme/ThemeContext";
import { useContext } from "react";

export default function EmergencyCallView() {
      const { colors } = useContext(ThemeContext);
  
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: colors.background,
        paddingHorizontal: 20,
      }}
      contentContainerStyle={{ paddingBottom: 100 }}
    >
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 80 }}
      >
        <TouchableOpacity onPress={() => router.push("/(tabs)/Index")}>
          <Ionicons style={{ color: colors.text }} name="arrow-back" size={25}></Ionicons>
        </TouchableOpacity>
        <Text
          style={{
            flex: 1,
            textAlign: "center",
            fontSize: 20,
            fontWeight: "bold",
            color: colors.text
          }}
        >
          Các cuộc gọi khẩn cấp
        </Text>
      </View>
      <View style={{ marginTop: 30 }}>
        <Text style={{ color: colors.text }}>ĐƯỜNG DÂY NÓNG QUỐC GIA:</Text>
        <TouchableOpacity
          style={{
            marginTop: 10,
            backgroundColor: "#C0392B",
            borderRadius: 22,
            padding: 12,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={{ color: "#fff", fontWeight: "semibold" }}>
              Tổng đài tư vấn tâm lý 1800-1567
            </Text>
            <Text style={{ marginTop: 10 }}>Miễn phí · Hoạt động 24/7</Text>
          </View>
          <View style={{ width: 70, alignItems: "center" }}>
            <Ionicons name="call" size={30}></Ionicons>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 30 }}>
        <Text style={{ color: colors.text }}>DANH SÁCH CUỘC GỌI ĐƯỢC LƯU: </Text>
        <TouchableOpacity
          style={{
            marginTop: 10,
            backgroundColor: "#D9D9D9",
            borderRadius: 22,
            padding: 12,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 78,
              height: 78,
              borderRadius: 39,
              backgroundColor: "#7E79F6",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20, color: "#fff" }}>1</Text>
          </View>
          <View style={{ flex: 1, marginLeft: 16, alignItems: "center" }}>
            <Text style={{ fontSize: 14 }}>TS. NGUYỄN MINH ANH</Text>
            <Text style={{ fontWeight: "light" }}>Tâm lý học sàng</Text>
            <Text>SĐT: 0901234567</Text>
            <View
              style={{
                marginTop: 12,
                backgroundColor: "#C8B5F8",
                borderRadius: 20,
                paddingHorizontal: 28,
                paddingVertical: 3,
              }}
            >
              <Text>Đã lưu</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
