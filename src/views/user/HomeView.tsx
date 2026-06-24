import { Ionicons } from "@expo/vector-icons";
import { Animated, Button, Text, TouchableOpacity, View } from "react-native";
import { BarChart } from "react-native-gifted-charts";
import ScrollView = Animated.ScrollView;

const Data2 = [
  { id: 1, name: "Xem bài viết", icon: "book", bg: "#F9EED8" },
  { id: 2, name: "Đặt lịch hẹn", icon: "calendar", bg: "#F9EED8" },
  { id: 3, name: "Xem bài tập", icon: "heart", bg: "#F9EED8" },
  { id: 4, name: "Bài khảo sát", icon: "checkbox", bg: "#F9EED8" },
];
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
export default function IndexView() {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#F5EDED" }}
      contentContainerStyle={{ paddingBottom: 240 }}
      showsVerticalScrollIndicator={false}
    >
      <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 20 }}>
        {/* Layout1: Lời chào mở đầu */}
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          Chào bạn, User! Chào ngày mới tràn đầy năng lượng nào!
        </Text>
        {/* Layout2: câu nói */}
        <View
          style={{
            marginTop: 30,
            backgroundColor: "#F4F4F4",
            borderRadius: 20,
            padding: 10,
            height: 100,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={{ flex: 5, alignItems: "center" }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "regular",
                color: "#707070",
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
              color="#D9D8D8"
            />
          </View>
        </View>
        {/* Layout3: Biểu đồ tổng quan */}
        <View style={{ marginTop: 30, flexDirection: "row", gap: 9 }}>
          <View
            style={{
              flex: 1,
              padding: 15,
              backgroundColor: "#2D2121",
              borderRadius: 16,
            }}
          >
            <Text
              style={{ fontWeight: "bold", color: "#FBDFDF", fontSize: 14 }}
            >
              Streak ghi nhật ký
            </Text>
            <View style={{ alignItems: "center", gap: 10 }}>
              <Text
                style={{ fontSize: 37, fontWeight: "bold", color: "#FFFFFF" }}
              >
                7
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: "semibold",
                  color: "#FFFFFF",
                }}
              >
                Ngày liên tiếp
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              padding: 15,
              backgroundColor: "#2D2121",
              borderRadius: 16,
            }}
          >
            <Text
              style={{ fontWeight: "bold", color: "#FBDFDF", fontSize: 14 }}
            >
              Lịch hẹn sắp tới
            </Text>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Text
                style={{ fontSize: 37, fontWeight: "bold", color: "#FFFFFF" }}
              >
                1
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: "semibold",
                  color: "#FFFFFF",
                }}
              >
                14:00 · T4, 04/06
              </Text>
            </View>
            <TouchableOpacity
              style={{
                borderWidth: 2,
                borderRadius: 16,
                paddingHorizontal: 16,
                alignItems: "center",
                backgroundColor: "#D9D9D9",
                borderColor: "#D9D9D9",
                marginTop: 8,
                alignSelf: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: "semibold",
                  color: "#445AE6",
                }}
              >
                Xem lịch
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Layout4: Thống kê cảm xúc */}
        <View
          style={{
            marginTop: 30,
            padding: 16,
            backgroundColor: "#2D2121",
            borderRadius: 16,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#FFF0F0" }}>
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
                ></View>
                <Text style={{ color: "#FFF0F0", fontSize: 14 }}>
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
        {/* Layout5: Chatbot AI */}
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
          {/* cột 1: icon */}
          <View style={{ flex: 1, alignItems: "center" }}>
            <Ionicons name="chatbubble" size={52} color="#FFF0F0" />
          </View>
          {/* cột 2: text */}
          <View style={{ flex: 3 }}>
            <Text
              style={{ fontSize: 16, fontWeight: "bold", color: "#FFF0F0" }}
            >
              Trò chuyện với AI
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: "medium",
                color: "#FFF0F0",
                padding: 10,
              }}
            >
              Lắng nghe & hỗ trợ 24/7
            </Text>
          </View>
          {/* cột 3: nút */}
          <View style={{ flex: 2 }}>
            <Button
              title="Bắt đầu"
              onPress={() => console.log("Button with adjusted color pressed")}
            ></Button>
          </View>
        </View>
        {/* Layout6: Các dịch vụ */}
        <View
          style={{
            marginTop: 30,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {Data2.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={{ width: "48%", alignItems: "center", marginBottom: 20 }}
            >
              <View
                style={{
                  width: "100%",
                  height: 62,
                  backgroundColor: item.bg,
                  borderRadius: 16,
                  flexDirection: "row",
                  alignItems: "center",
                  paddingHorizontal: 10,
                  borderWidth: 1,
                  borderColor: "#D8AD93",
                }}
              >
                <Ionicons name={item.icon as any} size={25} color="#D8AD93" />
                <Text
                  style={{
                    fontSize: 10,
                    fontWeight: "bold",
                    marginLeft: 10,
                    color: "#573926",
                    flex: 1,
                  }}
                >
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={{ marginTop: 30 }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "700",
            marginHorizontal: 20,
            marginBottom: 10,
          }}
        >
          Lịch hẹn sắp tới
        </Text>

        <View
          style={{
            backgroundColor: "#322223",
            marginHorizontal: 20,
            borderRadius: 20,
            padding: 16,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Thông tin bác sĩ */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              flex: 1,
            }}
          >
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons name="person" size={28} color="#FFF" />
            </View>

            <View style={{ marginLeft: 12 }}>
              <Text
                style={{
                  color: "#FFF",
                  fontSize: 16,
                  fontWeight: "700",
                }}
              >
                TS. Nguyễn Minh Anh
              </Text>

              <Text
                style={{
                  color: "#D9D9D9",
                  fontSize: 13,
                  marginTop: 4,
                }}
              >
                Tâm lý học lâm sàng
              </Text>
            </View>
          </View>

          {/* Thời gian */}
          <View
            style={{
              alignItems: "flex-end",
            }}
          >
            <Text
              style={{
                color: "#FFF",
                fontSize: 15,
                fontWeight: "600",
              }}
            >
              14:00
            </Text>

            <Text
              style={{
                color: "#D9D9D9",
                fontSize: 13,
                marginTop: 4,
              }}
            >
              04/06/2026
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}