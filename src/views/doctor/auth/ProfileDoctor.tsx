import {
    useAccountDetailViewModel,
    useProfileViewModel,
} from "@/src/viewmodels/auth/ProfileViewModel";
import { useDoctorDetailViewModel } from "@/src/viewmodels/DoctorViewModel";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import {
    Image,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function DoctorProfileView() {
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
  const { id } = useLocalSearchParams();
  const { doc_id } = useDoctorDetailViewModel(Number(id));
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
        <TouchableOpacity onPress={() => router.back()}>
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
          Hồ sơ Bác sĩ
        </Text>
      </View>
      <View
        style={{
          alignSelf: "center",
          marginVertical: 20,
        }}
      >
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
          Tên của bác sĩ
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
          Email bác sĩ
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
          SĐT bác sĩ
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
          Giới tính của bác sĩ
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
          value={gender}
          onChangeText={setGender}
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
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: "/doctor/FormEditDoctor",
                params: {
                  id: doc_id?.id,
                },
              })
            }
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
              style={{
                color: "#fff",
                fontSize: 12,
                fontWeight: "semibold",
                textAlign: "center",
              }}
            >
              Cập nhật thông tin bổ sung
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
