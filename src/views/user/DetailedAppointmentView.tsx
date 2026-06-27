import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { ScrollView, Switch, Text, TouchableOpacity, View } from "react-native";

export default function DetailAppointmentView() {
  const [saveEmergency, setSaveEmergency] = useState(true);

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#F7F7F8",
        marginTop: 30,
        paddingHorizontal: 20,
      }}
      contentContainerStyle={{ paddingBottom: 180 }}
    >
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 30 }}
      >
        <TouchableOpacity onPress={() => router.push("/(tabs)/Index")}>
          <Ionicons name="arrow-back" size={25}></Ionicons>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: 110,
          height: 110,
          borderRadius: 18,
          backgroundColor: "#D98A8A",
          alignSelf: "center",
          marginTop: 15,
        }}
      ></View>
      <Text
        style={{
          textAlign: "center",
          fontSize: 20,
          fontWeight: "800",
          marginTop: 15,
        }}
      >
        TS. NGUYỄN MINH ANH
      </Text>
      <Text
        style={{
          textAlign: "center",
          color: "#777",
          marginTop: 5,
          fontSize: 18,
        }}
      >
        Tâm lý học sàng
      </Text>

      <View
        style={{
          marginTop: 30,
          backgroundColor: "#fff",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ alignItems: "center", paddingHorizontal: 28 }}>
          <Text style={{ fontSize: 36, fontWeight: "bold" }}>8</Text>
          <Text style={{ fontSize: 18, fontWeight: "semibold" }}>Năm KN</Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#D8D8D8",
            borderRadius: 30,
            paddingHorizontal: 28,
            paddingVertical: 12,
            marginRight: 12,
          }}
        >
          <Text style={{ color: "#445AE6", fontWeight: "700", fontSize: 15 }}>
            Nhắn tin
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 30 }}>
        <Text style={{ fontSize: 15 }}>Giới thiệu</Text>
        <Text style={{ fontWeight: "normal", marginTop: 5, lineHeight: 30 }}>
          Tiến sĩ Tâm lý học, chuyên sâu về trị liệu lo âu và trầm cảm ở học
          sinh, sinh viên. Có 8 năm kinh nghiệm tư vấn tâm lý lâm sàng tại các
          bệnh viện và trung tâm tâm lý uy tín...
        </Text>
      </View>
      <View style={{ marginTop: 30 }}>
        <Text style={{ fontSize: 15 }}>Chuyên môn</Text>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            marginHorizontal: 14,
          }}
        >
          {["Lo âu", "Trầm cảm", "Stress", "Rối loạn giấc ngủ"].map((item) => (
            <View
              key={item}
              style={{
                backgroundColor: "#F5F6FF",
                borderColor: "#CED5FF",
                borderWidth: 1,
                borderRadius: 20,
                paddingHorizontal: 18,
                paddingVertical: 10,
                margin: 5,
              }}
            >
              <Text style={{ color: "#27139B", fontWeight: "600" }}>
                {item}
              </Text>
            </View>
          ))}
        </View>
      </View>
      <View style={{ marginTop: 30 }}>
        <Text style={{ fontSize: 15 }}>Liên hệ khẩn cấp</Text>
        <TouchableOpacity
          style={{
            marginTop: 10,
            backgroundColor: "#D8D8D8",
            borderRadius: 18,
            padding: 18,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 16,
              backgroundColor: "#C73636",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons name="call" size={30}></Ionicons>
          </View>
          <View style={{ marginLeft: 15 }}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>
              Số điện thoại liên hệ
            </Text>
            <Text style={{ marginTop: 5, fontSize: 12, color: "#333" }}>
              0901234567
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: 30,
          backgroundColor: "#D8D8D8",
          borderRadius: 18,
          padding: 18,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>
            Lưu số điện thoại
          </Text>
          <Text style={{ fontWeight: "light" }}>
            Lưu vào danh sách cuộc gọi khẩn cấp
          </Text>
        </View>
        <Switch
          value={saveEmergency}
          onValueChange={setSaveEmergency}
          trackColor={{
            false: "#d0b5b5",
            true: "#5B63FF",
          }}
        ></Switch>
      </View>
    </ScrollView>
  );
}
