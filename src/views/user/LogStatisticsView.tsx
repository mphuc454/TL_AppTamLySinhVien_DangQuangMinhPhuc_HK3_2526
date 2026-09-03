import {
    useLastEmotionLogDate,
    useMostEmotionLog,
    useTotalLogViewModel,
} from "@/src/viewmodels/EmotionViewModel";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeContext } from "../theme/ThemeContext";

export default function LogStatisticsView() {
  const { colors } = useContext(ThemeContext);
  const { lastDate } = useLastEmotionLogDate();
  const { mostEmotion } = useMostEmotionLog();
  const { logTotal } = useTotalLogViewModel();

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
          Tổng quan ghi nhật ký:
        </Text>
      </View>
      <View
        style={{
          marginTop: 30,
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          rowGap: 10,
        }}
      >
        <View
          style={{
            width: "48%",
            backgroundColor: colors.cardBackground,
            borderRadius: 16,
            padding: 15,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              textAlign: "center",
              color: colors.text,
            }}
          >
            Tổng số nhật ký
          </Text>
          <Text
            style={{
              marginTop: 8,
              fontSize: 26,
              fontWeight: "bold",
              color: colors.text,
              textAlign: "center",
            }}
          >
            {logTotal}
          </Text>
          <Text
            style={{
              fontSize: 11,
              color: colors.text,
              opacity: 0.7,
              textAlign: "center",
            }}
          >
            lượt ghi nhận
          </Text>
        </View>

        <View
          style={{
            width: "48%",
            backgroundColor: colors.cardBackground,
            borderRadius: 16,
            padding: 15,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              textAlign: "center",
              color: colors.text,
            }}
          >
            Ngày ghi nhật ký gần nhất
          </Text>
          <Text
            style={{
              marginTop: 8,
              fontSize: 26,
              fontWeight: "bold",
              color: colors.text,
              textAlign: "center",
            }}
          >
            {lastDate}
          </Text>
          <Text
            style={{
              marginTop: 8,
              fontSize: 11,
              color: colors.text,
              opacity: 0.7,
              textAlign: "center",
            }}
          >
            lần cập nhật cuối
          </Text>
        </View>

        <View
          style={{
            width: "48%",
            backgroundColor: colors.cardBackground,
            borderRadius: 16,
            padding: 15,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              textAlign: "center",
              color: colors.text,
            }}
          >
            Tâm trạng nhật ký nhiều nhất
          </Text>
          <Text
            style={{
              marginTop: 8,
              fontSize: 26,
              fontWeight: "bold",
              color: colors.text,
              textAlign: "center",
            }}
          >
            {mostEmotion}
          </Text>
          <Text
            style={{
              marginTop: 8,
              fontSize: 11,
              color: colors.text,
              opacity: 0.7,
              textAlign: "center",
            }}
          >
            được ghi nhận nhiều nhất
          </Text>
        </View>

        <View
          style={{
            width: "48%",
            backgroundColor: colors.cardBackground,
            borderRadius: 16,
            padding: 15,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontWeight: "bold",
              textAlign: "center",
              color: colors.text,
            }}
          >
            Hôm nay
          </Text>
          <Text
            style={{
              marginTop: 8,
              fontSize: 26,
              fontWeight: "bold",
              color: colors.text,
              textAlign: "center",
            }}
          >
            {new Date().toLocaleDateString("vi-VN")}
          </Text>
          <Text
            style={{
              marginTop: 8,
              fontSize: 11,
              color: colors.text,
              opacity: 0.7,
              textAlign: "center",
            }}
          >
            ngày hiện tại
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
