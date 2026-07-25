import {
  useAccountDetailViewModel,
  useProfileViewModel,
} from "@/src/viewmodels/auth/ProfileViewModel";
import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { router } from "expo-router";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function AdminProfileView() {
  const { handleLogout } = useProfileViewModel();
  const {
    usrname,
    setUsername,
    email,
    setEmail,
    phone,
    setPhone,
    handleAccount,
    gender,
    setGender,
  } = useAccountDetailViewModel();
  return (
    <ScrollView
      style={{
        flex: 1,
        paddingHorizontal: 20,
      }}
      contentContainerStyle={{ paddingBottom: 100 }}
    >
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 30 }}
      >
        <TouchableOpacity onPress={() => router.push("/admin/Dashboard")}>
          <Ionicons
            style={{ marginTop: 30 }}
            name="arrow-back"
            size={25}
          ></Ionicons>
        </TouchableOpacity>
        <Text
          style={{
            marginTop: 30,
            flex: 1,
            textAlign: "center",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Hồ sơ Admin
        </Text>
      </View>
      <View
        style={{
          alignSelf: "center",
          marginVertical: 20,
        }}
      ></View>
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
          Tên quản trị viên
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
          value={usrname}
          onChangeText={setUsername}
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
          Email quản trị viên
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
          value={email}
          onChangeText={setEmail}
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
          SĐT quản trị viên
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
          value={phone}
          onChangeText={setPhone}
        ></TextInput>
      </View>

      <View
        style={{
          marginTop: 10,
        }}
      ></View>
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
          Giới tính quản trị viên
        </Text>
        <Picker
          style={{
            backgroundColor: "#fff",
            borderRadius: 12,
            borderWidth: 1,
            borderColor: "#E5E7EB",
            height: 55,
            paddingHorizontal: 16,
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
          }}
          selectedValue={gender}
          onValueChange={(value) => setGender(value)}
        >
          <Picker.Item label="Chọn giới tính" value="" />
          <Picker.Item label="Nam" value="Nam" />
          <Picker.Item label="Nữ" value="Nữ" />
        </Picker>
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
            onPress={handleAccount}
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
              Cập nhật thay đổi
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => router.push("/auth/ChangePass")}
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
