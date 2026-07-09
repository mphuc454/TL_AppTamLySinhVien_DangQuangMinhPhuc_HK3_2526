import { useDoctorDetailViewModel, useSkillDetailViewModel} from "@/src/viewmodels/DoctorViewModel";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useContext, useState } from "react";
import { ScrollView, Switch, Text, TouchableOpacity, View } from "react-native";
import { ThemeContext } from "../theme/ThemeContext";

export default function DetailAppointmentView() {
  const { colors } = useContext(ThemeContext);
  const {id} = useLocalSearchParams();
  const [saveEmergency, setSaveEmergency] = useState(true);
  const {doc_id} = useDoctorDetailViewModel(Number(id));
  const {skill_id} = useSkillDetailViewModel(Number(id));
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
        <TouchableOpacity onPress={() => router.push("/(tabs)/Index")}>
          <Ionicons style={{ color: colors.text }} name="arrow-back" size={25}></Ionicons>
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
          color: colors.text
        }}
      >
        BS: {doc_id?.account_id.username}
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
  <Text style={{ fontSize: 25, textAlign:"center", color: colors.text}}>Thông tin cơ bản: </Text>
  <View style={{ marginTop: 18, gap: 12 }}>
     <Text style={{ fontSize: 15, color: colors.text }}>
      Họ tên:  {doc_id?.account_id.user_id.full_name}
    </Text>
    <Text style={{ fontSize: 15, color: colors.text }}>
      Email:  {doc_id?.account_id.user_id.email}
    </Text>
    <Text style={{ fontSize: 15, color: colors.text }}>
      Chức vụ:  {doc_id?.role_doctor}
    </Text>
    <Text style={{ fontSize: 15, color: colors.text}}>
       Nơi ở:  {doc_id?.account_id.user_id.address}
    </Text>
    <Text style={{ fontSize: 15, color: colors.text }}>
      Kinh nghiệm: {doc_id?.experience_years} năm
    </Text>
  </View>

  <TouchableOpacity
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
        color: colors.text,
        fontSize: 16,
        fontWeight: "700",
      }}
    >
      Nhắn tin
    </Text>
  </TouchableOpacity>
</View>
      <View style={{ marginTop: 30 }}>
        <Text style={{ fontSize: 20, fontWeight:"bold", color: colors.text }}>Giới thiệu: </Text>
        <Text style={{ fontWeight: "normal", marginTop: 5, lineHeight: 30, color: colors.text }}>
         {doc_id?.bio}
        </Text>
      </View>
      <View style={{ marginTop: 30 }}>
        <Text style={{ fontSize: 15, color: colors.text }}>Chuyên môn</Text>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            marginHorizontal: 14,
          }}
        >
          {skill_id.map((item) => (
            <View
              key={item.skill_id.id}
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
                {item.skill_id.name}
              </Text>
            </View>
          ))}
        </View>
      </View>
      <View style={{ marginTop: 30 }}>
        <Text style={{ fontSize: 15, color: colors.text, marginBottom: 20 }}>Liên hệ khẩn cấp</Text>
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
