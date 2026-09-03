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
      label: "T2",
      frontColor: "#556817",
      labelTextStyle: { color: "#FFFFFF" },
    },
    {
      value: 20,
      label: "T3",
      frontColor: "#22A3CA",
      labelTextStyle: { color: "#FFFFFF" },
    },
    {
      value: 40,
      label: "T4",
      frontColor: "#F36A0E",
      labelTextStyle: { color: "#FFFFFF" },
    },
    {
      value: 50,
      label: "T5",
      frontColor: "#BE0003",
      labelTextStyle: { color: "#FFFFFF" },
    },
    {
      value: 30,
      label: "T6",
      frontColor: "#A0E3E2",
      labelTextStyle: { color: "#FFFFFF" },
    },
    {
      value: 30,
      label: "T7",
      frontColor: "#A0E3E2",
      labelTextStyle: { color: "#FFFFFF" },
    },
    {
      value: 10,
      label: "CN",
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
      <View
        style={{
          marginTop: 30,
          padding: 16,
          backgroundColor: colors.cardBackground,
          borderRadius: 16,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "bold", color: colors.text }}>
          Biểu đồ thống kê tâm trạng
        </Text>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            marginTop: 8,
            marginBottom: 12,
          }}
        >
          {legend.map((item, index) => (
            <View
              key={index}
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginRight: 16,
                marginBottom: 8,
              }}
            >
              <View
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 6,
                  backgroundColor: item.color,
                  marginRight: 8,
                }}
              ></View>
              <Text style={{ color: colors.text, fontSize: 14 }}>
                {item.label}
              </Text>
            </View>
          ))}
        </View>
        <BarChart
          data={Data3}
          barWidth={25}
          spacing={20}
          hideYAxisText
          hideRules
          yAxisThickness={0}
          xAxisThickness={0}
          noOfSections={4}
          barMarginBottom={0}
        ></BarChart>
      </View>
    </ScrollView>
  );
}
