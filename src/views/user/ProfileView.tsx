import {
  useAccountDetailViewModel,
  useProfileViewModel,
} from "@/src/viewmodels/ProfileViewModel";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useContext } from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ThemeContext } from "../theme/ThemeContext";

export default function ProfileView() {
  const { colors } = useContext(ThemeContext);
  const { handleLogout } = useProfileViewModel();
  const { acc } = useAccountDetailViewModel();
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
        style={{ flexDirection: "row", alignItems: "center", marginTop: 30 }}
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
          Chỉnh sửa thông tin
        </Text>
      </View>
      <View
        style={{
          alignSelf: "center",
          marginVertical: 20,
        }}
      >
        <Image
          source={{ uri: "https://i.pravatar.cc/150?img=5" }}
          style={{
            width: 110,
            height: 110,
            borderRadius: 55,
            borderWidth: 2,
            borderColor: "#5b5bb5",
          }}
        ></Image>
        <TouchableOpacity
          style={{
            position: "absolute",
            bottom: 5,
            right: 0,
            width: 24,
            height: 24,
            borderRadius: 12,
            backgroundColor: "#5b5bb5",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons name="camera" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: 10,
        }}
      >
        <Text
          style={{
            fontSize: 12,
            color: "#888",
            marginBottom: 6,
          }}
        >
          Tên
        </Text>
        <TextInput
          style={{
            backgroundColor: "#FFF",
            borderWidth: 1,
            borderColor: "#E5E5E5",
            borderRadius: 10,
            height: 52,
            paddingHorizontal: 12,
          }}
          value={acc?.username ?? "Không có thông tin"}
        ></TextInput>
      </View>
      <View
        style={{
          marginTop: 10,
        }}
      >
        <Text
          style={{
            fontSize: 12,
            color: "#888",
            marginBottom: 6,
          }}
        >
          Email
        </Text>
        <TextInput
          style={{
            backgroundColor: "#FFF",
            borderWidth: 1,
            borderColor: "#E5E5E5",
            borderRadius: 10,
            height: 52,
            paddingHorizontal: 12,
          }}
          value={acc?.user_id.email ?? "Không có thông tin"}
        ></TextInput>
      </View>
      <View
        style={{
          marginTop: 10,
        }}
      >
        <Text
          style={{
            fontSize: 12,
            color: "#888",
            marginBottom: 6,
          }}
        >
          SĐT
        </Text>
        <TextInput
          style={{
            backgroundColor: "#FFF",
            borderWidth: 1,
            borderColor: "#E5E5E5",
            borderRadius: 10,
            height: 52,
            paddingHorizontal: 12,
          }}
          value={acc?.user_id.phone ?? "Không có thông tin"}
        ></TextInput>
      </View>

      <View
        style={{
          marginTop: 10,
        }}
      >
        <Text
          style={{
            fontSize: 12,
            color: "#888",
            marginBottom: 6,
          }}
        >
          Nơi sống
        </Text>
        <TextInput
          style={{
            backgroundColor: "#FFF",
            borderWidth: 1,
            borderColor: "#E5E5E5",
            borderRadius: 10,
            height: 52,
            paddingHorizontal: 12,
          }}
          value={acc?.address ?? "Không có thông tin"}
        ></TextInput>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 30,
          alignItems: "center",
        }}
      >
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#29296d",
              height: 55,
              borderRadius: 8,
              justifyContent: "center",
              alignItems: "center",
              width: "80%",
              alignSelf: "center",
            }}
          >
            <Text
              style={{ color: "#fff", fontSize: 12, fontWeight: "semibold" }}
            >
              Cập nhật thông tin
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#29296d",
              height: 55,
              borderRadius: 8,
              justifyContent: "center",
              alignItems: "center",
              width: "80%",
              alignSelf: "center",
            }}
          >
            <Text
              style={{ color: "#fff", fontSize: 12, fontWeight: "semibold" }}
            >
              Lưu thay đổi
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => router.push("/(no tabs)/EmergencyCall")}
        style={{
          backgroundColor: "#F2F8BE",
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
          <Ionicons name="call" size={24}></Ionicons>
        </View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            flex: 1,
            textAlign: "center",
          }}
        >
          Danh sách cuộc gọi khẩn cấp
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "#FBDFDF",
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
          <Ionicons name="lock-closed" size={24}></Ionicons>
        </View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            flex: 1,
            textAlign: "center",
          }}
        >
          Đổi mật khẩu
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleLogout}
        style={{
          backgroundColor: "#C0392B",
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
          <Ionicons name="log-out" size={24}></Ionicons>
        </View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            flex: 1,
            textAlign: "center",
            color: "#FFF0F0",
          }}
        >
          Đăng xuất
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
