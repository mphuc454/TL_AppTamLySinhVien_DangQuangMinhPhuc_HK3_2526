import {
  useLastEmotionLogDate,
  useMostEmotionLog,
  useTotalLogViewModel,
} from "@/src/viewmodels/EmotionViewModel";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useContext } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { BarChart } from "react-native-gifted-charts";
import { ThemeContext } from "../theme/ThemeContext";

export default function LogStatisticsView() {
  const { colors } = useContext(ThemeContext);
  const { lastDate } = useLastEmotionLogDate();
  const { mostEmotion } = useMostEmotionLog();
  const { logTotal } = useTotalLogViewModel();
  const legend = [
    { label: "Tích cực", color: "#556817" },
    { label: "Buồn bã", color: "#22A3CA" },
    { label: "Bình thản", color: "#A0E3E2" },
    { label: "Lo âu", color: "#F36A0E" },
    { label: "Giận dữ", color: "#BE0003" },
  ];
  const Data3 = [
    {
      value: 10,
      frontColor: "#556817",
      labelTextStyle: { color: "#FFFFFF" },
    },
    {
      value: 20,
      frontColor: "#22A3CA",
      labelTextStyle: { color: "#FFFFFF" },
    },
    {
      value: 40,
      frontColor: "#F36A0E",
      labelTextStyle: { color: "#FFFFFF" },
    },
    {
      value: 50,
      frontColor: "#BE0003",
      labelTextStyle: { color: "#FFFFFF" },
    },
    {
      value: 30,
      frontColor: "#A0E3E2",
      labelTextStyle: { color: "#FFFFFF" },
    },
    {
      value: 30,
      frontColor: "#A0E3E2",
      labelTextStyle: { color: "#FFFFFF" },
    },
    {
      value: 10,
      frontColor: "#556817",
      labelTextStyle: { color: "#FFFFFF" },
    },
  ];
  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 180 }}
      showsVerticalScrollIndicator={false}
      style={[
        {
          flex: 1,
          backgroundColor: colors.background,
          paddingHorizontal: 20,
        },
      ]}
    >
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 60 }}
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
              color: "#0bd80e",
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
              fontSize: 16,
              fontWeight: "bold",
              color: "#0bd80e",
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
              fontSize: 16,
              fontWeight: "bold",
              color: "#0bd80e",
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
              fontSize: 16,
              fontWeight: "bold",
              color: "#0bd80e",
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
      <View
        style={{
          marginTop: 24,
          padding: 18,
          backgroundColor: colors.cardBackground,
          borderRadius: 20,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.08,
          shadowRadius: 10,
          elevation: 3,
        }}
      >
        {/* Header */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 16,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                width: 42,
                height: 42,
                borderRadius: 13,
                backgroundColor: "#EEF2FF",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 12,
              }}
            >
              <Ionicons name="stats-chart" size={21} color="#6366F1" />
            </View>

            <View>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "700",
                  color: colors.text,
                }}
              >
                Thống kê tâm trạng
              </Text>

              <Text
                style={{
                  fontSize: 12,
                  color: colors.textSecondary,
                  marginTop: 3,
                }}
              >
                Theo dõi cảm xúc của bạn
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 8,
            marginBottom: 18,
          }}
        >
          {legend.map((item, index) => (
            <View
              key={index}
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 10,
                paddingVertical: 7,
                borderRadius: 20,
                backgroundColor: item.color,
              }}
            >
              <View
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 4,
                  backgroundColor: item.color,
                  marginRight: 6,
                }}
              />

              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "600",
                  color: colors.text,
                }}
              >
                {item.label}
              </Text>
            </View>
          ))}
        </View>

        <View
          style={{
            paddingTop: 8,
            paddingBottom: 4,
            borderRadius: 16,
            overflow: "hidden",
          }}
        >
          <BarChart
            data={Data3}
            barWidth={22}
            spacing={24}
            hideYAxisText
            hideRules
            yAxisThickness={0}
            xAxisThickness={0}
            noOfSections={4}
            barMarginBottom={0}
            roundedTop
            isAnimated
            animationDuration={700}
          />
        </View>
      </View>
    </ScrollView>
  );
}
