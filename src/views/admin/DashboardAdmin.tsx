import { ScrollView, Text, View } from "react-native";
import { BarChart } from "react-native-gifted-charts";

const legend = [{ label: "Lượng người dùng", color: "#22C55E" }];

const Data3 = [
  { value: 120, label: "2022", frontColor: "#22C55E" },
  { value: 185, label: "2023", frontColor: "#22C55E" },
  { value: 260, label: "2024", frontColor: "#22C55E" },
  { value: 340, label: "2025", frontColor: "#22C55E" },
  { value: 420, label: "2026", frontColor: "#22C55E" },
];
export default function AdminDashboardView() {
  const chartData = Data3.map((item) => ({
    ...item,
  }));
  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 200 }}>
      <View
        style={{
          paddingHorizontal: 20,
          paddingTop: 20,
          paddingBottom: 24,
          borderBottomLeftRadius: 24,
          borderBottomRightRadius: 24,
          marginTop: 30,
          elevation: 5,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.15,
          shadowRadius: 4,
        }}
      >
        <Text
          style={{
            fontSize: 28,
            fontWeight: "bold",
          }}
        >
          Dashboard
        </Text>

        <Text
          style={{
            fontSize: 15,
            marginTop: 6,
          }}
        >
          Thống kê tổng quan hệ thống chăm sóc sức khỏe tâm thần
        </Text>
      </View>

      {/* Thống kê phần 1 */}

      <View
        style={{
          marginTop: 30,
          flexDirection: "row",
          gap: 9,
          marginLeft: 15,
          marginRight: 15,
        }}
      >
        <View
          style={{
            flex: 1,
            padding: 15,
            backgroundColor: "#1f1616",
            borderRadius: 16,
          }}
        >
          <View style={{ alignItems: "center", gap: 10 }}>
            <Text
              style={{
                fontWeight: "bold",
                color: "#fff",
                fontSize: 16,
                textAlign: "center",
              }}
            >
              Thống kê tổng số người dùng
            </Text>
          </View>
          <View style={{ alignItems: "center", gap: 10 }}>
            <Text style={{ fontSize: 37, fontWeight: "bold", color: "#fff" }}>
              7
            </Text>
            <Text style={{ fontSize: 15, color: "#fff" }}>Người dùng</Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            padding: 15,
            backgroundColor: "#1f1616",
            borderRadius: 16,
          }}
        >
          <View style={{ alignItems: "center", gap: 10 }}>
            <Text
              style={{
                fontWeight: "bold",
                color: "#fff",
                fontSize: 16,
                textAlign: "center",
              }}
            >
              Thống kê tổng số Bác sĩ
            </Text>
          </View>

          <View style={{ alignItems: "center", gap: 10 }}>
            <Text style={{ fontSize: 37, fontWeight: "bold", color: "#fff" }}>
              1
            </Text>
            <Text style={{ fontSize: 15, color: "#fff" }}>Bác sĩ</Text>
          </View>
        </View>
      </View>

      {/* Thống kê phần 2 */}

      <View
        style={{
          marginTop: 30,
          flexDirection: "row",
          gap: 9,
          marginLeft: 15,
          marginRight: 15,
        }}
      >
        <View
          style={{
            flex: 1,
            padding: 15,
            backgroundColor: "#1f1616",
            borderRadius: 16,
          }}
        >
          <View style={{ alignItems: "center", gap: 10 }}>
            <Text
              style={{
                fontWeight: "bold",
                color: "#fff",
                fontSize: 16,
                textAlign: "center",
              }}
            >
              Tổng số cuộc trò chuyện với chatbot
            </Text>
          </View>
          <View style={{ alignItems: "center", gap: 10 }}>
            <Text style={{ fontSize: 37, fontWeight: "bold", color: "#fff" }}>
              1
            </Text>
            <Text style={{ fontSize: 15, color: "#fff" }}>trò chuyện</Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            padding: 15,
            backgroundColor: "#1f1616",
            borderRadius: 16,
          }}
        >
          <View style={{ alignItems: "center", gap: 10 }}>
            <Text
              style={{
                fontWeight: "bold",
                color: "#fff",
                fontSize: 16,
                textAlign: "center",
              }}
            >
              Thống kê Tổng số bài viết
            </Text>
          </View>

          <View style={{ alignItems: "center", gap: 10 }}>
            <Text style={{ fontSize: 37, fontWeight: "bold", color: "#fff" }}>
              1
            </Text>
            <Text style={{ fontSize: 15, color: "#fff" }}>Bài viết</Text>
          </View>
        </View>
      </View>

      {/* Thống kê phần 3 */}

      <View
        style={{
          marginTop: 30,
          marginHorizontal: 15,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            marginBottom: 15,
          }}
        >
          Thống kê cảm xúc người dùng
        </Text>

        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {/* Tích cực */}
          <View
            style={{
              width: "48%",
              backgroundColor: "#fff",
              borderRadius: 15,
              padding: 16,
              marginBottom: 12,
              borderLeftWidth: 6,
              borderLeftColor: "#22C55E",
              elevation: 3,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "600" }}>Tích cực</Text>
            <Text
              style={{
                fontSize: 28,
                fontWeight: "bold",
                color: "#22C55E",
                marginTop: 10,
              }}
            >
              320
            </Text>
            <Text style={{ color: "#666", marginTop: 4 }}>lượt ghi nhận</Text>
          </View>

          {/* Bình thản */}
          <View
            style={{
              width: "48%",
              backgroundColor: "#fff",
              borderRadius: 15,
              padding: 16,
              marginBottom: 12,
              borderLeftWidth: 6,
              borderLeftColor: "#3B82F6",
              elevation: 3,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "600" }}>Bình thản</Text>
            <Text
              style={{
                fontSize: 28,
                fontWeight: "bold",
                color: "#3B82F6",
                marginTop: 10,
              }}
            >
              210
            </Text>
            <Text style={{ color: "#666", marginTop: 4 }}>lượt ghi nhận</Text>
          </View>

          {/* Lo âu */}
          <View
            style={{
              width: "48%",
              backgroundColor: "#fff",
              borderRadius: 15,
              padding: 16,
              marginBottom: 12,
              borderLeftWidth: 6,
              borderLeftColor: "#F59E0B",
              elevation: 3,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "600" }}>Lo âu</Text>
            <Text
              style={{
                fontSize: 28,
                fontWeight: "bold",
                color: "#F59E0B",
                marginTop: 10,
              }}
            >
              95
            </Text>
            <Text style={{ color: "#666", marginTop: 4 }}>lượt ghi nhận</Text>
          </View>

          {/* Buồn bã */}
          <View
            style={{
              width: "48%",
              backgroundColor: "#fff",
              borderRadius: 15,
              padding: 16,
              marginBottom: 12,
              borderLeftWidth: 6,
              borderLeftColor: "#6366F1",
              elevation: 3,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "600" }}>Buồn bã</Text>
            <Text
              style={{
                fontSize: 28,
                fontWeight: "bold",
                color: "#6366F1",
                marginTop: 10,
              }}
            >
              68
            </Text>
            <Text style={{ color: "#666", marginTop: 4 }}>lượt ghi nhận</Text>
          </View>

          {/* Giận dữ */}
          <View
            style={{
              width: "48%",
              backgroundColor: "#fff",
              borderRadius: 15,
              padding: 16,
              marginBottom: 12,
              borderLeftWidth: 6,
              borderLeftColor: "#EF4444",
              elevation: 3,
            }}
          >
            <Text style={{ fontSize: 15, fontWeight: "600" }}>Giận dữ</Text>
            <Text
              style={{
                fontSize: 28,
                fontWeight: "bold",
                color: "#EF4444",
                marginTop: 10,
              }}
            >
              34
            </Text>
            <Text style={{ color: "#666", marginTop: 4 }}>lượt ghi nhận</Text>
          </View>
        </View>
      </View>

      {/* Thống kê phần 4 */}

      <View style={{ marginTop: 30, marginHorizontal: 15 }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            marginBottom: 15,
          }}
        >
          Thống kê biểu đồ người dùng mới
        </Text>

        {/* Legend */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 15,
          }}
        >
          {legend.map((item, index) => (
            <View
              key={index}
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginRight: 20,
              }}
            >
              <View
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: 4,
                  backgroundColor: item.color,
                  marginRight: 8,
                }}
              />
              <Text
                style={{
                  fontSize: 14,
                  color: "#444",
                  fontWeight: "500",
                }}
              >
                {item.label}
              </Text>
            </View>
          ))}
        </View>

        <View style={{ flexDirection: "row" }}>
          {/* Trục Y */}
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                transform: [{ rotate: "-90deg" }],
                fontSize: 14,
                fontWeight: "600",
                color: "#555",
                textAlign: "center",
              }}
            >
              Số lượng
            </Text>
          </View>

          <View style={{ flex: 1 }}>
            <BarChart
              data={chartData}
              barWidth={25}
              spacing={20}
              roundedTop
              noOfSections={5}
              maxValue={40}
              yAxisThickness={1}
              xAxisThickness={1}
            />

            {/* Trục X */}
            <Text
              style={{
                textAlign: "center",
                marginTop: 12,
                fontSize: 14,
                fontWeight: "600",
                color: "#555",
              }}
            >
              Năm
            </Text>
          </View>
        </View>
      </View>

      {/* Thống kê phần 5 */}

      <View
        style={{
          marginTop: 30,
          marginHorizontal: 15,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            marginBottom: 15,
          }}
        >
          Thống kê 3 bài viết nhiều lượt xem nhất
        </Text>
      </View>
    </ScrollView>
  );
}
