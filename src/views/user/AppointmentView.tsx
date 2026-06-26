import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
const DOCTORS = [
  {
    id: 1,
    name: "TS. Nguyễn Minh Anh",
    specialty: "Tâm lý lâm sàng",
  },
  {
    id: 2,
    name: "TS. Nguyễn Minh Anh",
    specialty: "Tư vấn học đường",
  },
  {
    id: 3,
    name: "TS. Nguyễn Minh Anh",
    specialty: "Trị liệu cảm xúc",
  },
];
const options = [
  { id: 0, label: "Tất cả" },
  { id: 1, label: "Tâm lý lâm sàng" },
  { id: 2, label: "Tư vấn học đường" },
  { id: 3, label: "Trị liệu cảm xúc" },
];

export default function AppointmentView() {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#F7F7F8",
      }}
      contentContainerStyle={{ paddingBottom: 180 }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 30,
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
          Đặt lịch tư vấn bác sĩ
        </Text>
      </View>
      <TextInput
        placeholder="Tìm kiếm bác sĩ..."
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
        {options.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={{
              backgroundColor: "#D9D9D9",
              paddingHorizontal: 12,
              paddingVertical: 8,
              borderRadius: 16,
              marginRight: 10,
            }}
          >
            <Text>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={{ marginTop: 20 }}>
        {DOCTORS.map((doctor) => (
          <View
            key={doctor.id}
            style={{
              backgroundColor: "#fff",
              marginHorizontal: 20,
              marginTop: 15,
              borderRadius: 20,
              padding: 15,
              elevation: 4,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="person" size={40} />
              <View style={{ flex: 1, marginLeft: 10 }}>
                <Text style={{ fontSize: 16, fontWeight: "600" }}>
                  {doctor.name}
                </Text>
                <Text style={{ fontWeight: "light", marginTop: 4 }}>
                  8 năm Kinh Nghiệm
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 12,
              }}
            >
              <View
                style={{
                  backgroundColor: "#EFEFEF",
                  paddingHorizontal: 10,
                  paddingVertical: 6,
                  borderRadius: 10,
                }}
              >
                <Text style={{ fontSize: 12 }}>{doctor.specialty}</Text>
              </View>
              <TouchableOpacity
                onPress={() => router.push("/(no tabs)/DetailedAppointment")}
                style={{
                  backgroundColor: "#F3B8B8",
                  paddingHorizontal: 18,
                  paddingVertical: 10,
                  borderRadius: 20,
                }}
              >
                <Text style={{ fontWeight: "semibold" }}>Đặt lịch</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
