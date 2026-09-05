import { useSendMail } from "@/src/viewmodels/ContactViewModel";
import { useDoctorDetailViewModel } from "@/src/viewmodels/DoctorViewModel";
import { useAddEmergencyViewModel } from "@/src/viewmodels/EmergencyViewModel";
import {
  useAccepttoCall,
  useHandleRequestVM,
} from "@/src/viewmodels/doctor/HealthViewModel";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useContext } from "react";
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ThemeContext } from "../theme/ThemeContext";

export default function DetailAppointmentView() {
  const { colors } = useContext(ThemeContext);
  const { id } = useLocalSearchParams();
  const { doc_id } = useDoctorDetailViewModel(id ? Number(id) : undefined);
  const { loading, saveEmergency } = useAddEmergencyViewModel();
  const { handleAddRequest } = useHandleRequestVM();
  const acceptToCall = useAccepttoCall();
  const { sendContact } = useSendMail();
  const monday = new Date(new Date());
  monday.setDate(
    new Date().getDate() -
      (new Date().getDay() === 0 ? 6 : new Date().getDay() - 1),
  );
  const dates = Array.from({ length: 7 }, (_, idx) => {
    const date = new Date(monday);
    date.setDate(monday.getDate() + idx);
    return {
      date: date.getDate(),
      month: date.getMonth() + 1,
      year: date.getFullYear(),
    };
  });
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
            Kinh nghiệm: {doc_id?.experience_years} năm
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            if (doc_id?.id) {
              handleAddRequest(doc_id.id);
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
        <TouchableOpacity
          onPress={() => {
            const email = doc_id?.account_id?.profile?.email;

            if (!email) {
              Alert.alert("Thông báo", "Bác sĩ chưa có email.");
              return;
            }

            sendContact(doc_id?.id ?? 0, email);
          }}
          style={{
            marginTop: 24,
            backgroundColor: "#202ead",
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
            Gửi liên hệ Email
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
        <View style={{ marginTop: 30 }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "700",
              color: colors.text,
              marginBottom: 14,
            }}
          >
            Chọn ngày
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingHorizontal: 2,
              gap: 10,
            }}
          >
            {dates.map((item, index) => {
              const isToday =
                item.date === new Date().getDate() &&
                item.month === new Date().getMonth() + 1 &&
                item.year === new Date().getFullYear();

              return (
                <TouchableOpacity
                  key={index}
                  activeOpacity={0.8}
                  style={{
                    width: 65,
                    height: 82,
                    borderRadius: 16,

                    backgroundColor: isToday
                      ? "#445AE6"
                      : colors.cardBackground,

                    alignItems: "center",
                    justifyContent: "center",

                    borderWidth: 1,
                    borderColor: isToday ? "#445AE6" : "#E5E7EB",

                    shadowColor: "#000",
                    shadowOpacity: 0.06,
                    shadowRadius: 6,
                    elevation: 2,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 11,
                      marginTop: 2,
                      color: isToday ? "#DDE3FF" : "#999",
                    }}
                  >
                    {item.month}/{item.year}
                  </Text>
                  <Text
                    style={{
                      fontSize: 23,
                      fontWeight: "800",
                      marginTop: 5,
                      color: isToday ? "#fff" : colors.text,
                    }}
                  >
                    {item.date}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
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
          onPress={() =>
            acceptToCall(doc_id?.id ?? 0, doc_id?.account_id.profile?.phone)
          }
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
              {doc_id?.account_id.profile?.phone}
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
