import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import Header from "../../src/components/Header";
import { useContext } from "react";
import { ThemeContext } from "../../src/views/theme/ThemeContext";

export default function RootLayout() {
  const { colors } = useContext(ThemeContext);
  // @ts-ignore
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        header: () => <Header />,
        tabBarActiveTintColor: "#d97706",
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarStyle: {
          height: 80,
          borderRadius: 30,
          marginHorizontal: 10,
          marginBottom: 10,
          position: "absolute",
          backgroundColor: colors.cardBackground,
          borderTopWidth: 0,
          borderColor: colors.borderColor,
          borderWidth: 1,
          bottom: 70,
          paddingTop: 5,
          paddingBottom: 8,
        },

        tabBarLabelStyle: {
          fontSize: 11,
          textAlign: "center",
          marginBottom: 5,
        },
      }}
    >
      <Tabs.Screen
        name="Index"
        options={{
          title: "Trang chủ",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={24}
              color={colors.text}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Chatbot"
        options={{
          title: "Chatbot",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "chatbubble" : "chatbubble-outline"}
              size={24}
              color={colors.text}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="HealthCare"
        options={{
          title: "Sức khoẻ",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "heart-circle" : "heart-circle-outline"}
              size={24}
              color={colors.text}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Appointment"
        options={{
          title: "Bác sĩ",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "medkit" : "medkit-outline"}
              size={24}
              color={colors.text}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="Article"
        options={{
          title: "Bài viết",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "newspaper" : "newspaper-outline"}
              size={24}
              color={colors.text}
            />
          ),
        }}
      />
    </Tabs>
  );
}
