import {
  useCategoryArticleAdminViewModel,
  useDashboardAdminViewModel,
  useDashboardArticleViewModel,
  useDashboardDoctorViewModel,
  useDashboardExerciseViewModel,
  useDashboardMusicViewModel,
  useDashboardUserViewModel,
  useGenderAdminViewModel,
} from "@/src/viewmodels/DashboardViewModel";
import { ScrollView, Text, View } from "react-native";
import { PieChart } from "react-native-gifted-charts";

export default function AdminDashboardView() {
  const { usrTotal, loading } = useDashboardUserViewModel();
  const { docTotal, loadingDoc } = useDashboardDoctorViewModel();
  const { exTotal, loadingEx } = useDashboardExerciseViewModel();
  const { arcTotal, loadingArc } = useDashboardArticleViewModel();
  const { adTotal, loadingAd } = useDashboardAdminViewModel();
  const { loadingMus, musTotal } = useDashboardMusicViewModel();
  const { pieData } = useGenderAdminViewModel();
  const { chartData } = useCategoryArticleAdminViewModel();
  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
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
              {loading ? "..." : usrTotal}
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
              {loadingDoc ? "..." : docTotal}
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
              Thống kê tổng số bài tập
            </Text>
          </View>
          <View style={{ alignItems: "center", gap: 10 }}>
            <Text style={{ fontSize: 37, fontWeight: "bold", color: "#fff" }}>
              {loadingEx ? "..." : exTotal}
            </Text>
            <Text style={{ fontSize: 15, color: "#fff" }}>Bài tập</Text>
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
              Thống kê tổng số bài viết
            </Text>
          </View>

          <View style={{ alignItems: "center", gap: 10 }}>
            <Text style={{ fontSize: 37, fontWeight: "bold", color: "#fff" }}>
              {loadingArc ? "..." : arcTotal}
            </Text>
            <Text style={{ fontSize: 15, color: "#fff" }}>Bài viết</Text>
          </View>
        </View>
      </View>
      {/* Thống kê phần 3 */}
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
              Thống kê tổng số bài nhạc
            </Text>
          </View>
          <View style={{ alignItems: "center", gap: 10 }}>
            <Text style={{ fontSize: 37, fontWeight: "bold", color: "#fff" }}>
              {loadingMus ? "..." : musTotal}
            </Text>
            <Text style={{ fontSize: 15, color: "#fff" }}>Bài nhạc</Text>
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
              Người dùng quản trị viên
            </Text>
          </View>

          <View style={{ alignItems: "center", gap: 10 }}>
            <Text style={{ fontSize: 37, fontWeight: "bold", color: "#fff" }}>
              {loadingAd ? "..." : adTotal}
            </Text>
            <Text style={{ fontSize: 15, color: "#fff" }}>
              Người quản trị viên
            </Text>
          </View>
        </View>
      </View>

      {/* Thống kê phần 4 */}
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
          Thống kê giới tính
        </Text>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <PieChart
            data={pieData}
            donut
            radius={90}
            innerRadius={55}
            showText
            textColor="white"
            textSize={14}
          />
          <View
            style={{
              marginTop: 20,
              flexDirection: "row",
              justifyContent: "center",
              gap: 30,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 6,
                  backgroundColor: "#4A90E2",
                  marginRight: 8,
                }}
              />
              <Text>Nam: {pieData[0].value} người</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 6,
                  backgroundColor: "#FF69B4",
                  marginRight: 8,
                }}
              />
              <Text>Nữ: {pieData[1].value} người</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Thống kê phần 5 */}

      <View style={{ marginTop: 30, marginHorizontal: 15 }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            marginBottom: 15,
          }}
        >
          Thống kê bài viết theo danh mục
        </Text>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <PieChart
            data={chartData}
            radius={95}
            innerRadius={60}
            showText
            textSize={14}
            textColor="#fff"
            strokeWidth={3}
            focusOnPress
          />
        </View>
        {chartData.map((item, index) => (
          <View
            key={index}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: 7,
                  backgroundColor: item.color,
                  marginRight: 10,
                }}
              />

              <Text
                style={{
                  fontSize: 15,
                }}
              >
                {item.label}
              </Text>
            </View>

            <Text
              style={{
                fontWeight: "bold",
                fontSize: 15,
              }}
            >
              {item.value} bài
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
