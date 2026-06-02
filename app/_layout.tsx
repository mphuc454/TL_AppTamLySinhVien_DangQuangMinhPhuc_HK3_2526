import { Stack, Tabs } from "expo-router";
import "./global.css";
// import { View, Text } from "react-native";
import {Ionicons} from "@expo/vector-icons";
export default function RootLayout() {
  // @ts-ignore
  return (
      <Tabs
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "#d97706",
            tabBarInactiveTintColor: "#000000",

            tabBarStyle: {
              height: 80,
              borderRadius: 30,
              marginHorizontal: 10,
              marginBottom: 10,
              position: "absolute",
              backgroundColor: "#F5EDED",
              borderTopWidth: 0,
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
            name="main/index"
            options={{
              title: "Trang chủ",
              tabBarIcon: ({ color, focused }) => (
                  <Ionicons
                      name={focused ? "home" : "home-outline"}
                      size={24}
                      color={color}
                  />
              ),
            }}
        />

        <Tabs.Screen
            name="main/chatbot"
            options={{
              title: "Chatbot",
              tabBarIcon: ({ color, focused }) => (
                  <Ionicons
                      name={focused ? "chatbubble" : "chatbubble-outline"}
                      size={24}
                      color={color}
                  />
              ),
            }}
        /> <Tabs.Screen
          name="main/overviewhealth"
          options={{
            title: "Sức khoẻ",
            tabBarIcon: ({ color, focused }) => (
                <Ionicons
                    name={focused ? "heart-circle" : "heart-circle-outline"}
                    size={24}
                    color={color}
                />
            ),
          }}
      />
        <Tabs.Screen
            name="main/schedule"
            options={{
              title: "Lịch khám",
              tabBarIcon: ({ color, focused }) => (
                  <Ionicons
                      name={
                        focused ? "calendar" : "calendar-outline"}
                      size={24}
                      color={color}
                  />
              ),
            }}
        />
      </Tabs>

  );
}
