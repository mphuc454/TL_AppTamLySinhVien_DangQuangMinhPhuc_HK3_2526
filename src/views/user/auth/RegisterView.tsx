import { useRegisterViewModel } from "@/src/viewmodels/auth/RegisterViewModel";
import { Feather, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useContext, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeContext } from "../../theme/ThemeContext";
export default function RegisterView() {
  const { colors } = useContext(ThemeContext);
  const {
    username,
    setUsername,
    email,
    setEmail,
    phone,
    setPhone,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    handleRegister,
  } = useRegisterViewModel();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.background,
        paddingHorizontal: 20,
      }}
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
          Đăng ký tài khoản
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
          value={username}
          onChangeText={setUsername}
          style={{ flex: 1 }}
          placeholder="Nhập họ và tên của bạn"
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
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
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
          value={phone}
          onChangeText={setPhone}
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
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          autoCapitalize="none"
          style={{ flex: 1 }}
          placeholder="Nhập mật khẩu của bạn"
        ></TextInput>
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Feather name={showPassword ? "eye" : "eye-off"} size={20}></Feather>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: 15,
        }}
      >
        <Text style={{ fontSize: 12, marginBottom: 10, color: colors.text }}>
          Xác nhận mật khẩu
        </Text>
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
          }}
        >
          <TextInput
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={!showConfirmPassword}
            autoCapitalize="none"
            style={{
              flex: 1,
            }}
          ></TextInput>
          <TouchableOpacity
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            <Feather
              name={showConfirmPassword ? "eye" : "eye-off"}
              size={20}
            ></Feather>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        onPress={handleRegister}
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
