import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const THEME = [
  { code: "lig", label: "Màu sáng" },
  { code: "dar", label: "Màu tối" },
];
export default function ThemeSettings() {
  const [selected, setSelected] = useState("lig");
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
        <TouchableOpacity onPress={() => router.push("/auth/SettingsUser")}>
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
          Cài đặt Hình nền
        </Text>
      </View>
      <View
        style={{
          gap: 28,
          marginTop: 30,
        }}
      >
        {THEME.map((them) => {
          const isSelect = selected === them.code;
          return (
            <TouchableOpacity
              key={them.code}
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
              activeOpacity={0.7}
              onPress={() => setSelected(them.code)}
            >
              <View
                style={[
                  {
                    width: 28,
                    height: 28,
                    borderRadius: 14,
                    borderWidth: 1.5,
                    borderColor: "#222",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: 14,
                  },
                  isSelect && {
                    backgroundColor: "#2F6BFF",
                    borderColor: "#2F6BFF",
                  },
                ]}
              ></View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                }}
              >
                {them.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}
