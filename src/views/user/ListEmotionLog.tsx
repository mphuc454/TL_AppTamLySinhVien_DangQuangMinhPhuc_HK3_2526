import {
    useDeleteEmotionLog,
    useEmotionLog,
} from "@/src/viewmodels/EmotionViewModel";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useContext } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { ThemeContext } from "../theme/ThemeContext";

export default function ListEmotionView() {
  const { colors } = useContext(ThemeContext);
  const { emLog } = useEmotionLog();
  const handleRM = useDeleteEmotionLog();

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: colors.background,
        paddingHorizontal: 20,
      }}
      contentContainerStyle={{ paddingBottom: 100 }}
    >
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 80 }}
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
          Danh sách các nhật ký của bạn
        </Text>
      </View>
      <View>
        {emLog.map((item, index) => {
          const currentDate = new Date(item.created_at).toLocaleDateString(
            "vi-VN",
          );
          const previousDate =
            index > 0
              ? new Date(emLog[index - 1].created_at).toLocaleDateString(
                  "vi-VN",
                )
              : null;

          const showDate = currentDate !== previousDate;

          return (
            <View key={item.id}>
              {showDate && (
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    marginTop: 20,
                    marginBottom: 10,
                  }}
                >
                  {currentDate}
                </Text>
              )}

              <TouchableOpacity
                style={{
                  backgroundColor: "#2D2121",
                  borderRadius: 16,
                  padding: 16,
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: 10,
                }}
              >
                <View
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: 35,
                    backgroundColor: item.emotions?.color,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Ionicons name={item.emotions?.icon as any} size={36} />
                </View>

                <View style={{ flex: 1, marginLeft: 12 }}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: "#FFF",
                    }}
                  >
                    {item.content}
                  </Text>
                </View>

                <TouchableOpacity
                  onPress={() => handleRM(item.id)}
                  style={{ padding: 8 }}
                >
                  <Ionicons name="trash-outline" size={24} color="#FF4D4F" />
                </TouchableOpacity>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}
