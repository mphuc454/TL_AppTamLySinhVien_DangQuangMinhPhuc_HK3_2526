import { useDoctorDetailViewModel } from "@/src/viewmodels/DoctorViewModel";
import { useAddEmergencyViewModel } from "@/src/viewmodels/EmergencyViewModel";
import { useHandleRequestVM } from "@/src/viewmodels/HealthViewModel";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useContext } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { ThemeContext } from "../theme/ThemeContext";

export default function DetailAppointmentView() {
  const { colors } = useContext(ThemeContext);
  const { id } = useLocalSearchParams();
  const { doc_id } = useDoctorDetailViewModel(Number(id));
  const { loading, saveEmergency } = useAddEmergencyViewModel();
  const add = useHandleRequestVM();
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: colors.background,
        marginTop: 30,
        paddingHorizontal: 20,
      }}
      contentContainerStyle={{ paddingBottom: 180 }}
    >
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 30 }}
      >
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons
            style={{ color: colors.text }}
            name="arrow-back"
            size={25}
          ></Ionicons>
        </TouchableOpacity>
      </View>
      <Image
        source={{
          uri: doc_id?.avatar_url?.trim()
            ? doc_id.avatar_url
            : "https://placehold.co/600x350.png",
        }}
        style={{
          width: 110,
          height: 110,
          borderRadius: 18,
          alignSelf: "center",
          marginTop: 15,
        }}
      ></Image>
      <Text
        style={{
          textAlign: "center",
          fontSize: 20,
          fontWeight: "800",
          marginTop: 15,
          color: colors.text,
        }}
      >
        BS: {doc_id?.account_id?.username ?? "Chưa có tài khoản"}
      </Text>
      <Text
        style={{
          textAlign: "center",
          color: colors.text,
          marginTop: 5,
          fontSize: 18,
        }}
      >
        {doc_id?.specialization}
      </Text>

      <View
        style={{
          marginTop: 24,
          backgroundColor: colors.background,
          borderRadius: 16,
          padding: 20,
          marginHorizontal: 16,
          shadowColor: "#e42222",
          shadowOpacity: 0.08,
          shadowRadius: 8,
          elevation: 3,
        }}
      >
        <Text style={{ fontSize: 25, textAlign: "center", color: colors.text }}>
          Thông tin cơ bản:
        </Text>
        <View style={{ marginTop: 18, gap: 12 }}>
          <Text style={{ fontSize: 15, color: colors.text }}>
            Họ tên: {doc_id?.account_id?.profile?.full_name ?? "Không có"}
          </Text>
          <Text style={{ fontSize: 15, color: colors.text }}>
            Email: {doc_id?.account_id?.profile?.email ?? "Không có"}
          </Text>
          <Text style={{ fontSize: 15, color: colors.text }}>
            Chức vụ: {doc_id?.role_doctor}
          </Text>
          <Text style={{ fontSize: 15, color: colors.text }}>
            Nơi ở: {doc_id?.account_id?.address ?? "Không có"}
          </Text>
          <Text style={{ fontSize: 15, color: colors.text }}>
            Kinh nghiệm: {doc_id?.experience_years} năm
          </Text>
        </View>

        <TouchableOpacity
          onPress={() =>
            router.push({
              pathname: "/(no tabs)/MessageUser",
              params: {
                id: doc_id?.id,
              },
            })
          }
          style={{
            marginTop: 24,
            backgroundColor: "#445AE6",
            borderRadius: 12,
            paddingVertical: 14,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 16,
              fontWeight: "700",
            }}
          >
            Nhắn tin
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            if (doc_id?.id) {
              add(doc_id.id);
            }
          }}
          style={{
            marginTop: 24,
            backgroundColor: "#e27f07",
            borderRadius: 12,
            paddingVertical: 14,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 16,
              fontWeight: "700",
            }}
          >
            Yêu cầu theo dõi sức khoẻ
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 30 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: colors.text }}>
          Giới thiệu:
        </Text>
        <Text
          style={{
            fontWeight: "normal",
            marginTop: 5,
            lineHeight: 30,
            color: colors.text,
          }}
        >
          {doc_id?.bio}
        </Text>
      </View>

      <View style={{ marginTop: 30 }}>
        <Text
          style={{
            fontSize: 20,
            color: colors.text,
            marginBottom: 20,
            fontWeight: "bold",
          }}
        >
          Liên hệ
        </Text>
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
          flexDirection: "column",
          alignItems: "stretch",
        }}
      >
        <View style={{ marginBottom: 14 }}>
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>
            Lưu số điện thoại
          </Text>
          <Text style={{ fontWeight: "300", color: "#555" }}>
            Lưu vào danh sách cuộc gọi khẩn cấp
          </Text>
        </View>

        <TouchableOpacity
          disabled={loading}
          onPress={() => {
            if (!doc_id?.id) {
              return;
            }
            saveEmergency(doc_id.id);
          }}
          style={{
            backgroundColor: "#000",
            paddingVertical: 12,
            borderRadius: 12,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "600", fontSize: 14 }}>
            {loading ? "Đang lưu..." : "Lưu vào"}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
