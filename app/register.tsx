import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Register() {
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
        <TouchableOpacity onPress={() => router.push("/(tabs)/index")}>
          <Ionicons name="arrow-back" size={25}></Ionicons>
        </TouchableOpacity>
        <Text
          style={{
            flex: 1,
            textAlign: "center",
            fontSize: 25,
            fontWeight: "bold",
          }}
        >
          Tạo tài khoản mới
        </Text>
      </View>
      <View
        style={{
          marginTop: 10,
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            marginTop: 30,
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
            Tiếp tục với email
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            textAlign: "center",
            marginTop: 30,
            color: "#777",
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
          <Ionicons name="logo-apple" size={24} color="#222" />
          <Text>Tiếp tục với Apple</Text>
        </TouchableOpacity>
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
          <Ionicons name="logo-facebook" size={24} color="#1877F2" />
          <Text>Tiếp tục với Facebook</Text>
        </TouchableOpacity>
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
          <Text>Tiếp tục với Google</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
