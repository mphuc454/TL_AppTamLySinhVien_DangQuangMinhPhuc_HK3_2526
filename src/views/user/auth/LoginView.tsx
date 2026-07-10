import { useLoginViewModel } from "@/src/viewmodels/auth/LoginViewModel";
import { Feather, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useContext } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeContext } from "../../theme/ThemeContext";
export default function LoginView() {
  const { colors } = useContext(ThemeContext);
  const { email, setEmail, password, setPassword, loading, handleLogin } =
    useLoginViewModel();
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
          Đăng nhập tài khoản
        </Text>
      </View>
      <View
        style={{
          marginTop: 30,
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
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          style={{
            backgroundColor: "#FFF",
            borderWidth: 1,
            borderColor: "#E5E5E5",
            borderRadius: 10,
            height: 52,
            paddingHorizontal: 12,
          }}
          placeholder="Nhập email"
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
          Mật khẩu
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
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoCapitalize="none"
            style={{ flex: 1 }}
            placeholder="Nhập mật khẩu"
          ></TextInput>
          <TouchableOpacity>
            <Feather name={"eye"} size={20}></Feather>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: 30,
          alignItems: "center",
        }}
      >
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
          <View>
            <TouchableOpacity
              onPress={() => router.push("/(no tabs)/InputUsr")}
            >
              <Text
                style={{
                  fontSize: 12,
                  color: "#4169E1",
                }}
              >
                Quên mật khẩu
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
          Bạn chưa có tài khoản?
        </Text>
        <TouchableOpacity onPress={() => router.push("/auth/Register")}>
          <Text
            style={{
              color: "#4169E1",
              fontWeight: "bold",
              fontSize: 13,
            }}
          >
            {" "}
            Đăng ký
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: 30,
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={handleLogin}
          disabled={loading}
          style={{
            marginTop: 10,
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
            {loading ? "Đang đăng nhập..." : "Đăng nhập"}
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            textAlign: "center",
            marginTop: 30,
            color: colors.text,
            fontSize: 18,
          }}
        >
          or
        </Text>
        <TouchableOpacity
          style={{
            marginTop: 30,
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
          <Text style={{ color: colors.text }}>Tiếp tục với Google</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
