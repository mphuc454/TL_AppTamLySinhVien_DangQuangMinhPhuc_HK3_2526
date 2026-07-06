// import { useRegisterViewModel } from "@/src/viewmodels/AuthViewModels";
import { Feather, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function RegisterView() {
  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const {
  //   username,
  //   setUsername,
  //   email,
  //   setEmail,
  //   phone,
  //   setPhone,
  //   password,
  //   setPassword,
  //   confirmPassword,
  //   setConfirmPassword,
  //   // loading,
  //   errorMessage,
  //   handleRegister,
  //   handleOAuth,
  // } = useRegisterViewModel();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#F7F7F8",
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 30 }}
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
          Tạo tài khoản
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "#FFF",
          borderWidth: 1,
          borderColor: "#E5E5E5",
          borderRadius: 10,
          height: 52,
          paddingHorizontal: 12,
          marginTop: 30,
        }}
      >
        <TextInput
          // value={username}
          // onChangeText={setUsername}
          style={{ flex: 1 }}
          placeholder="Nhập tên của bạn"
        ></TextInput>
      </View>
      <View
        style={{
          backgroundColor: "#FFF",
          borderWidth: 1,
          borderColor: "#E5E5E5",
          borderRadius: 10,
          height: 52,
          paddingHorizontal: 12,
          marginTop: 15,
        }}
      >
        <TextInput
          // value={email}
          // onChangeText={setEmail}
          style={{ flex: 1 }}
          placeholder="Nhập email của bạn"
        ></TextInput>
      </View>
      <View
        style={{
          backgroundColor: "#FFF",
          borderWidth: 1,
          borderColor: "#E5E5E5",
          borderRadius: 10,
          height: 52,
          paddingHorizontal: 12,
          marginTop: 15,
        }}
      >
        <TextInput
          // value={phone}
          // onChangeText={setPhone}
          style={{ flex: 1 }}
          placeholder="Nhập số điện thoại của bạn"
        ></TextInput>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#FFF",
          borderWidth: 1,
          borderColor: "#E5E5E5",
          borderRadius: 10,
          height: 52,
          paddingHorizontal: 12,
          marginTop: 15,
        }}
      >
        <TextInput
          // value={password}
          // onChangeText={setPassword}
          style={{ flex: 1 }}
          placeholder="Nhập mật khẩu của bạn"
        ></TextInput>
        <TouchableOpacity>
          <Feather name={"eye"} size={20}></Feather>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: 15,
        }}
      >
        <Text style={{ fontSize: 12, marginBottom: 10 }}>
          Xác nhận mật khẩu
        </Text>
        <TextInput
          // value={confirmPassword}
          // onChangeText={setConfirmPassword}
          style={{
            backgroundColor: "#FFF",
            borderWidth: 1,
            borderColor: "#E5E5E5",
            borderRadius: 10,
            height: 52,
            paddingHorizontal: 12,
          }}
        ></TextInput>
      </View>
      {/* {errorMessage ? (
        <Text style={{ color: "red" }}>{errorMessage}</Text>
      ) : null} */}
      <TouchableOpacity
        // onPress={handleRegister}
        style={{
          marginTop: 15,
          backgroundColor: "#6D00D9",
          height: 60,
          width: "100%",
          borderRadius: 16,
          justifyContent: "center",
          alignItems: "center",
          elevation: 3,
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 18,
            fontWeight: "700",
          }}
        >
          Đăng ký
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          textAlign: "center",
          marginTop: 10,
          color: "#777",
          fontSize: 18,
        }}
      >
        or
      </Text>
      <TouchableOpacity
        style={{
          marginTop: 10,
          height: 60,
          width: "100%",
          borderRadius: 16,
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 1,
          flexDirection: "row",
          gap: 10,
        }}
      >
        <Ionicons name="logo-facebook" size={24} color="#1877F2" />
        <Text>Tiếp tục với Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginTop: 10,
          height: 60,
          width: "100%",
          borderRadius: 16,
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 1,
          flexDirection: "row",
          gap: 10,
        }}
      >
        <Ionicons name="logo-google" size={24} color="#EA4335" />
        <Text>Tiếp tục với Google</Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 30,
        }}
      >
        <Text
          style={{
            color: "#555",
            fontSize: 13,
          }}
        >
          Bạn đã có tài khoản?
        </Text>
        <TouchableOpacity onPress={() => router.push("/auth/Login")}>
          <Text
            style={{
              color: "#4169E1",
              fontWeight: "bold",
              fontSize: 13,
            }}
          >
            {" "}
            Đăng nhập
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
