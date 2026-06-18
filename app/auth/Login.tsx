import { Feather, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Login() {
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
        <TouchableOpacity onPress={() => router.push("/")}>
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
          Đăng nhập tài khoản
        </Text>
      </View>
      <View 
      style={{
          marginTop: 30,
        }}>
          <Text 
            style={{
            fontSize: 12,
            color: "#888",
            marginBottom: 6,}}>Email</Text>
          <TextInput 
            style={{backgroundColor: "#FFF",
            borderWidth: 1,
            borderColor: "#E5E5E5",
            borderRadius: 10,
            height: 52,
            paddingHorizontal: 12,}} placeholder="Nhập email"></TextInput>
      </View>
        <View 
            style={{
            marginTop: 10,
        }}>
          <Text style={{
            fontSize: 12,
            color: "#888",
            marginBottom: 6,}}>Mật khẩu</Text>
            <View style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "#FFF",
                  borderWidth: 1,
                  borderColor: "#E5E5E5",
                  borderRadius: 10,
                  height: 52,
                  paddingHorizontal: 12,
            }}>
            <TextInput style={{ flex: 1}} placeholder="Nhập mật khẩu"></TextInput>
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
        }}> 

        <View style={{ flex: 1, flexDirection: "row", alignItems: 'center'}}>
          <View style={{
          width: 16,
          height: 16,
          borderWidth: 1,
          borderColor: "#999",
          marginRight: 8,
          }}></View>
          <Text style={{  
            fontSize: 12,
            color: "#555",}}>Nhớ đăng nhập</Text>

        </View>
            <View>
              <TouchableOpacity>
                <Text style={{
                  fontSize: 12,
                  color: "#4169E1",
                }}>Quên mật khẩu</Text>
              </TouchableOpacity>
            </View>
      </View>
      <View style={{
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 30,
      }}>
        <Text style={{
           color: "#555",
           fontSize: 13,
        }}>
          Bạn chưa có tài khoản?
        </Text>
        <TouchableOpacity onPress={() => router.push("/register")}>
          <Text style={{
            color: "#4169E1",
            fontWeight: "bold",
            fontSize: 13
          }}> Đăng ký</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: 30,
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => router.push("/profile")}
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
           Đăng nhập
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
