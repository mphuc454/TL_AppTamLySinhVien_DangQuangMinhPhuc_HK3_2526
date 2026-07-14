import {
  useCategoryArticleAdminViewModel,
  useDashboardAdminViewModel,
  useDashboardArticleViewModel,
  useDashboardDoctorViewModel,
  useDashboardExerciseViewModel,
  useDashboardMusicViewModel,
  useDashboardUserViewModel,
  useGenderAdminViewModel,
} from "@/src/viewmodels/admin/DashboardViewModel";
import { Ionicons } from "@expo/vector-icons";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { PieChart } from "react-native-gifted-charts";

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
  // const chartData = Data3.map((item) => ({ ...item }));
  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 180 }}>
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
        <View style={{ marginTop: 10 }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#FFF",
              marginHorizontal: 8,
              marginBottom: 15,
              borderRadius: 20,
              padding: 12,
              borderWidth: 1,
              borderColor: "#000",
              flexDirection: "row",
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: {
                width: 2,
                height: 3,
              },
              shadowOpacity: 0.2,
              shadowRadius: 4,
              elevation: 4,
            }}
          >
            <Image
              source={{}}
              style={{
                width: 55,
                height: 55,
                borderRadius: 8,
                marginRight: 10,
              }}
            />

            <View style={{ flex: 1 }}>
              <Text
                numberOfLines={2}
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                }}
              >
                No name
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginTop: 6,
                }}
              >
                <Ionicons name="time-outline" size={14} color="#555" />
                <Text
                  style={{
                    marginLeft: 4,
                    color: "#555",
                    fontSize: 13,
                  }}
                >
                  No name phút đọc
                </Text>

                <Ionicons
                  name="eye-outline"
                  size={14}
                  color="#555"
                  style={{ marginLeft: 15 }}
                />
                <Text
                  style={{
                    marginLeft: 4,
                    color: "#555",
                    fontSize: 13,
                  }}
                >
                  0 lượt xem
                </Text>
              </View>

              <View
                style={{
                  alignSelf: "flex-start",
                  backgroundColor: "#D9D9D9",
                  borderRadius: 20,
                  paddingHorizontal: 14,
                  paddingVertical: 4,
                  marginTop: 8,
                }}
              >
                <Text
                  style={{
                    fontSize: 12,
                    fontWeight: "500",
                  }}
                >
                  No name
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
