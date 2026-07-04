import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useContext } from "react";
import { StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Theme, ThemeContext } from "../theme/ThemeContext";

export default function ThemeSettingsView() {
  const { currentTheme, toggleTheme, colors } = useContext(ThemeContext);

  return (
    <SafeAreaView
      style={[
        {
          flex: 1,
          backgroundColor: colors.background,
          paddingHorizontal: 20,
        },
      ]}
    >
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 30 }}
      >
        <TouchableOpacity onPress={() => router.push("/auth/SettingsUser")}>
          <Ionicons name="arrow-back" size={25} color={colors.text}></Ionicons>
        </TouchableOpacity>
        <Text
          style={[
            {
              flex: 1,
              textAlign: "center",
              fontSize: 20,
              fontWeight: "bold",
              color: colors.text,
            },
          ]}
        >
          Cài đặt Hình nền
        </Text>
      </View>
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: colors.cardBackground, borderColor: colors.borderColor },
          ]}
          activeOpacity={0.8}
          onPress={() => {}}
        >
          <Text style={[styles.buttonText, { color: colors.text }]}>
            Chế độ tối
          </Text>

          <Switch
            value={currentTheme === "dark"}
            onValueChange={() =>
              toggleTheme(currentTheme === "light" ? "dark" : "light" as Theme)
            }
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#222",
  },

  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingVertical: 16,
    paddingHorizontal: 16,

    borderRadius: 12,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  buttonText: {
    fontSize: 16,
  },
});
