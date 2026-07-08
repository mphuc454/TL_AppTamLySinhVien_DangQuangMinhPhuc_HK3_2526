import { Ionicons } from "@expo/vector-icons";
import { useContext } from "react";
import { Animated, Text, TouchableOpacity, View } from "react-native";
import { BarChart } from "react-native-gifted-charts";
import { ThemeContext } from "../theme/ThemeContext";

const ScrollView = Animated.ScrollView;

const legend = [
  { label: "Tích cực", color: "#556817" },
  { label: "Buồn bã", color: "#22A3CA" },
  { label: "Bình thản", color: "#A0E3E2" },
  { label: "Lo âu", color: "#F36A0E" },
  { label: "Giận dữ", color: "#BE0003" },
];

const Data3 = [
  { value: 10, label: "T2", frontColor: "#556817" },
  { value: 20, label: "T3", frontColor: "#22A3CA" },
  { value: 40, label: "T4", frontColor: "#F36A0E" },
  { value: 50, label: "T5", frontColor: "#BE0003" },
  { value: 30, label: "T6", frontColor: "#A0E3E2" },
  { value: 30, label: "T7", frontColor: "#A0E3E2" },
  { value: 10, label: "CN", frontColor: "#556817" },
];

export default function IndexView() {
  const { colors } = useContext(ThemeContext);

  const chartData = Data3.map((item) => ({
    ...item,
    labelTextStyle: { color: colors.text },
  }));

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.background }}
      contentContainerStyle={{ paddingBottom: 180 }}
      showsVerticalScrollIndicator={false}
    >
      <View
        style={{
          flex: 1,
          paddingHorizontal: 20,
          paddingTop: 20,
          backgroundColor: colors.background,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold", color: colors.text }}>
          Chào bạn, User! Chào ngày mới tràn đầy năng lượng nào!
        </Text>

        <View
          style={{
            marginTop: 30,
            backgroundColor: colors.cardBackground,
            borderRadius: 20,
            padding: 10,
            minHeight: 100,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={{ flex: 5, alignItems: "center" }}>
            <Text
              style={{
                fontSize: 14,
                color: colors.textSecondary,
                textAlign: "center",
              }}
            >
              “It is better to conquer yourself than to win a thousand battles”
            </Text>
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={35}
              color={colors.borderColor}
            />
          </View>
        </View>

        <View style={{ marginTop: 30, flexDirection: "row", gap: 9 }}>
          <View
            style={{
              flex: 1,
              padding: 15,
              backgroundColor: colors.cardBackground,
              borderRadius: 16,
            }}
          >
            <Text
              style={{ fontWeight: "bold", color: colors.text, fontSize: 14 }}
            >
              Streak ghi nhật ký
            </Text>
            <View style={{ alignItems: "center", gap: 10 }}>
              <Text
                style={{ fontSize: 37, fontWeight: "bold", color: colors.text }}
              >
                7
              </Text>
              <Text style={{ fontSize: 10, color: colors.textSecondary }}>
                Ngày liên tiếp
              </Text>
            </View>
          </View>

          <View
            style={{
              flex: 1,
              padding: 15,
              backgroundColor: colors.cardBackground,
              borderRadius: 16,
            }}
          >
            <Text
              style={{ fontWeight: "bold", color: colors.text, fontSize: 14 }}
            >
              Lịch hẹn sắp tới
            </Text>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Text
                style={{ fontSize: 37, fontWeight: "bold", color: colors.text }}
              >
                1
              </Text>
              <Text style={{ fontSize: 10, color: colors.textSecondary }}>
                14:00 · T4, 04/06
              </Text>
            </View>

            <TouchableOpacity
              style={{
                borderWidth: 2,
                borderRadius: 16,
                paddingHorizontal: 16,
                alignItems: "center",
                backgroundColor: colors.background,
                borderColor: colors.borderColor,
                marginTop: 8,
                alignSelf: "center",
                paddingVertical: 6,
              }}
              activeOpacity={0.85}
              onPress={() => {}}
            >
              <Text style={{ fontSize: 10, color: colors.text }}>Xem lịch</Text>
            </TouchableOpacity>
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
          <Text
            style={{ fontSize: 16, fontWeight: "bold", color: colors.text }}
          >
            Biểu đồ cảm xúc
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
                />
                <Text style={{ color: colors.textSecondary, fontSize: 14 }}>
                  {item.label}
                </Text>
              </View>
            ))}
          </View>

          <BarChart
            data={chartData}
            barWidth={25}
            spacing={20}
            hideYAxisText
            hideRules
            yAxisThickness={0}
            xAxisThickness={0}
            noOfSections={4}
            barMarginBottom={0}
          />
        </View>

        <View
          style={{
            marginTop: 30,
            backgroundColor: "#604FD9",
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 30,
            padding: 10,
            width: "100%",
          }}
        >
          <View style={{ flex: 1, alignItems: "center" }}>
            <Ionicons name="chatbubble" size={52} color="#FFF0F0" />
          </View>

          <View style={{ flex: 3 }}>
            <Text
              style={{ fontSize: 16, fontWeight: "bold", color: "#FFF0F0" }}
            >
              Trò chuyện với AI
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: "#FFF0F0",
                padding: 10,
              }}
            >
              Lắng nghe & hỗ trợ 24/7
            </Text>
          </View>

          <View style={{ flex: 2 }}>
            <TouchableOpacity
              style={{
                backgroundColor: "#FFF0F0",
                borderRadius: 18,
                paddingVertical: 10,
                alignItems: "center",
                marginRight: 6,
              }}
              activeOpacity={0.85}
              onPress={() => console.log("Start AI chat")}
            >
              <Text style={{ color: "#604FD9", fontWeight: "bold" }}>
                Bắt đầu
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ marginTop: 30 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{ fontSize: 16, fontWeight: "bold", color: colors.text }}
            >
              Bài khảo sát bạn đã làm:
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
