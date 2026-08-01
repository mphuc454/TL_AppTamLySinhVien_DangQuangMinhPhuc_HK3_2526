// import { useEmergencyViewModel } from "@/src/viewmodels/EmergencyViewModel";
import {
  useDelEmergencyViewModel,
  useEmergencyViewModel,
} from "@/src/viewmodels/EmergencyViewModel";
import { useAccepttoCall } from "@/src/viewmodels/HealthViewModel";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useContext } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { ThemeContext } from "../theme/ThemeContext";

export default function EmergencyCallView() {
  const { colors } = useContext(ThemeContext);
  const { emergencyList } = useEmergencyViewModel();
  const acceptToCall = useAccepttoCall();

  const del = useDelEmergencyViewModel();
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
          <Ionicons
            style={{ color: colors.text }}
            name="arrow-back"
            size={25}
          ></Ionicons>
        </TouchableOpacity>
        <Text
          style={{
            flex: 1,
            textAlign: "center",
            fontSize: 20,
            fontWeight: "bold",
            color: colors.text,
          }}
        >
          Quản lý cuộc gọi tới Bác sĩ
        </Text>
      </View>

      <View style={{ marginTop: 30 }}>
        <Text style={{ color: colors.text }}>DANH SÁCH CUỘC GỌI ĐƯỢC LƯU:</Text>
        {emergencyList.length <= 0 ? (
          <Text
            style={{
              width: "100%",
              textAlign: "center",
              marginTop: 20,
              fontSize: 16,
              color: "#666",
            }}
          >
            Hiện chưa có danh sách liên hệ khẩn cấp nào được lưu.
          </Text>
        ) : (
          emergencyList.map((i) => (
            <TouchableOpacity
              onPress={() =>
                acceptToCall(
                  i.doctor_id.id,
                  i.doctor_id.account_id.user_id.phone,
                )
              }
              key={i.id}
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
                <Text style={{ fontSize: 20, color: "#fff" }}>{i.id}</Text>
              </View>

              <View style={{ flex: 1, marginLeft: 16, alignItems: "center" }}>
                <Text style={{ fontSize: 14 }}>
                  BS: {i.doctor_id.account_id.username}
                </Text>
                <Text>{i.doctor_id.specialization}</Text>
                <Text>{i.doctor_id.account_id.user_id.phone}</Text>

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

              <TouchableOpacity
                onPress={() => del(i.id)}
                style={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  width: 50,
                  height: 28,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    color: "#7E79F6",
                    fontWeight: "bold",
                  }}
                >
                  Xoá
                </Text>
              </TouchableOpacity>
            </TouchableOpacity>
          ))
        )}
      </View>
    </ScrollView>
  );
}
