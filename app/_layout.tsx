import Header from "@/components/Header";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function RootLayout() {
    // @ts-ignore
    return (
        <Tabs
            screenOptions={{
                headerShown: true,
                header: () => <Header />,
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
                name="index"
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
                name="chatbot"
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
            />
            <Tabs.Screen
                name="overviewhealth"
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
                name="schedule"
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
