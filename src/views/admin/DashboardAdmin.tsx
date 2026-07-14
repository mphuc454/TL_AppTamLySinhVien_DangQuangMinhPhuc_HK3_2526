import {
  useCategoryArticleAdminViewModel,
  useDashboardAdminViewModel,
  useDashboardArticleViewModel,
  useDashboardDoctorViewModel,
  useDashboardExerciseViewModel,
  useDashboardMusicViewModel,
  useDashboardUserViewModel,
  useGenderAdminViewModel,
  useUserByYearAdminViewModel,
} from "@/src/viewmodels/admin/DashboardViewModel";
import { ScrollView, Text, View } from "react-native";
import { BarChart, PieChart } from "react-native-gifted-charts";

// const Data3 = [{ value: 420, label: "Cảm xúc", frontColor: "#22C55E" }];
export default function AdminDashboardView() {
  const { usrTotal, loading } = useDashboardUserViewModel();
  const { docTotal, loadingDoc } = useDashboardDoctorViewModel();
  const { exTotal, loadingEx } = useDashboardExerciseViewModel();
  const { arcTotal, loadingArc } = useDashboardArticleViewModel();
  const { adTotal, loadingAd } = useDashboardAdminViewModel();
  const { loadingMus, musTotal } = useDashboardMusicViewModel();
  const { pieData } = useGenderAdminViewModel();
  const { chartData } = useCategoryArticleAdminViewModel();
  const { dataUser } = useUserByYearAdminViewModel();
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

      {/* Thống kê phần 6 */}

      <View
        style={{
          marginTop: 30,
          marginHorizontal: 8,
          paddingBottom: 20,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            marginBottom: 15,
          }}
        >
          Thống kê lượt người dùng đăng ký trong năm
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 15,
          }}
        >
          <View
            style={{
              width: 14,
              height: 14,
              borderRadius: 3,
              backgroundColor: "#09f210",
              marginRight: 8,
            }}
          />

          <Text
            style={{
              fontSize: 14,
              fontWeight: "500",
            }}
          >
            Lượng người dùng
          </Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          {/* Trục Y */}
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            {" "}
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
            {" "}
            <BarChart
              data={dataUser}
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
    </ScrollView>
  );
}
