import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
const dates = [
  { day: "CN" },
  { day: "T2" },
  { day: "T3" },
  { day: "T4" },
  { day: "T5" },
  { day: "T6" },
  { day: "T7" },
];

const times = [
  "8:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "14:30",
  "15:30",
  "16:30",
  "17:30",
  "18:30",
];
export default function DetailAppointmentView() {
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
          alignSelf: "center",
          marginTop: 20,
          backgroundColor: "#fff",
          borderRadius: 20,
          elevation: 2,
          shadowColor: "#000",
          shadowOpacity: 0.08,
          shadowRadius: 5,
          paddingVertical: 10,
          paddingHorizontal: 20,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 30, fontWeight: "semibold" }}>8</Text>
          <Text
            style={{ fontSize: 10, fontWeight: "light", textAlign: "center" }}
          >
            Năm KN
          </Text>
        </View>
      </View>
      <View style={{ marginTop: 30 }}>
        <TouchableOpacity
          style={{
            height: 50,
            marginHorizontal: 70,
            borderRadius: 28,
            backgroundColor: "#E6E6E6",
            justifyContent: "center",
            alignItems: "center",
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
        <Text>Chọn ngày</Text>
        <ScrollView
          style={{ marginTop: 10 }}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 12,
            gap: 10,
          }}
        >
          {dates.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={{
                width: 65,
                height: 82,
                borderRadius: 16,
                backgroundColor: "#fff",
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 1,
                borderColor: "#eee",
              }}
            >
              <Text
                style={{
                  color: "#999",
                  fontWeight: "600",
                }}
              >
                {item.day}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={{ marginTop: 30 }}>
        <Text>Chọn thời gian</Text>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            marginHorizontal: 12,
          }}
        >
          {times.map((time) => {
            const disabled = time === "10:00" || time === "18:00";

            return (
              <TouchableOpacity
                key={time}
                disabled={disabled}
                style={{
                  width: "22%",
                  height: 46,
                  margin: "1.5%",
                  borderRadius: 12,
                  backgroundColor: "#fff",
                  borderWidth: 1,
                  borderColor: "#eee",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontWeight: "600", color: "#666" }}>{time}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={{ marginTop: 30 }}>
          <TouchableOpacity
            style={{
              height: 55,
              marginHorizontal: 70,
              marginTop: 35,
              borderRadius: 28,
              backgroundColor: "#E6E6E6",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#445AE6", fontWeight: "700", fontSize: 16 }}>
              Đặt lịch hẹn
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
