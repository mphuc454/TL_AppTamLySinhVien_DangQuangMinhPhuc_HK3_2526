import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  FlatList,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
const options = [
  { value: 0, label: "Không bao giờ" },
  { value: 1, label: "Một chút" },
  { value: 2, label: "Thỉnh thoảng" },
  { value: 3, label: "Thường xuyên" },
];
const DataNews = [
  {
    id: 1,
    name: "Thiền định",
    des: "Thư giãn tâm trí - 5 phút",
  },
  { id: 2, name: "Bình thản", des: "Giảm lo âu - 3 phút" },
  { id: 3, name: "Hỗn loạn", des: "Tăng năng lượng- 15 phút" },
];
export const moodData = [
  { id: 1, name: "Tích cực", icon: "happy-outline", bg: "#EF5DA8" },
  { id: 2, name: "Bình thản", icon: "moon-outline", bg: "#AEAFF7" },
  { id: 3, name: "Lo âu", icon: "sync-outline", bg: "#A0E3E2" },
  { id: 4, name: "Giận dữ", icon: "thunderstorm-outline", bg: "#F09E54" },
  { id: 5, name: "Buồn bã", icon: "sad-outline", bg: "#C3F2A6" },
];
export const journalData = [
  {
    id: 1,
    moodID: 1,
    date: "Hôm nay. 8:30 AM",
    content:
      "Hôm nay mình cảm thấy rất vui vì đã hoàn thành được nhiều việc quan trọng",
  },
  { id: 2, moodID: 4, date: "Hôm qua. 8:25 PM", content: "Bực hết cả mình" },
];
export default function HealthcareView() {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#F5EDED" }}
      contentContainerStyle={{ paddingBottom: 180 }}
    >
      <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
        {/* Layout1: Ghi nhật ký */}
        <View
          style={{
            marginTop: 30,
            paddingHorizontal: 20,
            paddingTop: 20,
            backgroundColor: "#2D2121",
            borderRadius: 16,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: "#FBDFDF",
            }}
          >
            Ghi nhật ký tâm trạng hôm nay
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            {moodData.map((opt) => (
              <TouchableOpacity
                key={opt.id}
                style={{
                  alignItems: "center",
                  flex: 1,
                }}
              >
                <View
                  style={{
                    width: 59.2,
                    height: 62.06,
                    backgroundColor: opt.bg,
                    borderRadius: 16,
                    marginTop: 10,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Ionicons name={opt.icon as any} size={30} color="#FFFFFF" />
                </View>
                <Text
                  style={{
                    fontSize: 9,
                    marginTop: 8,
                    color: "#828282",
                    textAlign: "center",
                  }}
                >
                  {opt.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <TextInput
            style={{
              height: 40,
              borderColor: "#a02b2b",
              marginBottom: 25,
              marginTop: 15,
              borderWidth: 0.5,
              padding: 10,
            }}
            placeholder="Ghi nhật kí tại đây..."
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
          ></TextInput>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              height: 38,
              width: 163,
              borderRadius: 16,
              paddingHorizontal: 16,
              alignItems: "center",
              backgroundColor: "#D9D9D9",
              borderColor: "#D9D9D9",
              marginBottom: 20,
              justifyContent: "center",
              alignSelf: "center",
            }}
          >
            <Text
              style={{ fontSize: 14, fontWeight: "semibold", color: "#445AE6" }}
            >
              Lưu tâm trạng
            </Text>
          </TouchableOpacity>
        </View>
        {/* Layout2: Lịch sử ghi nhật ký */}
        <View style={{ marginTop: 30 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Nhật ký gần đây:
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 11,
                  color: "#3514C6",
                  fontWeight: "regular",
                }}
              >
                Xem tất cả
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            {journalData.map((item) => {
              const mood = moodData.find((m) => m.id === item.moodID);
              return (
                <TouchableOpacity
                  key={item.id}
                  style={{
                    backgroundColor: "#2D2121",
                    borderRadius: 16,
                    padding: 16,
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 16,
                  }}
                >
                  <View
                    style={{
                      width: 70,
                      height: 70,
                      borderRadius: 35,
                      backgroundColor: mood?.bg,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Ionicons name={mood?.icon as any} size={36} />
                  </View>
                  <View style={{ flex: 1, marginLeft: 10 }}>
                    <Text
                      style={{
                        fontSize: 8,
                        color: "#d9cfcf",
                        fontWeight: "light",
                      }}
                    >
                      {item.date}
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        color: "#FFFF",
                        fontWeight: "regular",
                      }}
                    >
                      {item.content}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        {/* Layout3: Khảo sát câu hỏi */}
        <View
          style={{
            backgroundColor: "#CCB0EB",
            borderRadius: 16,
            padding: 20,
            marginTop: 30,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  color: "#27139B",
                }}
              >
                Khảo sát hôm nay
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: "normal",
                  color: "#27139B",
                }}
              >
                Đánh giá trạng thái tinh thần - 2 phút
              </Text>
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: "#D9D9D9",
                borderRadius: 16,
                paddingHorizontal: 12,
                paddingVertical: 5,
              }}
            >
              <Text
                style={{
                  fontSize: 10,
                  color: "#445AE6",
                  fontWeight: "semibold",
                }}
              >
                Tiếp tục khảo sát
              </Text>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "medium",
              color: "#1a1a2e",
              marginTop: 16,
            }}
          >
            Câu 1. Trong 2 tuần qua, bạn cảm thấy chán nản hoặc tuyệt vọng ở mức
            độ nào?
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            {options.map((opt) => (
              <TouchableOpacity
                key={opt.value}
                style={{
                  alignItems: "center",
                  flex: 1,
                }}
              >
                <View
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 26,
                    backgroundColor: "#e8d8f8",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 6,
                  }}
                ></View>
                <Text
                  style={{
                    fontSize: 9,
                    fontWeight: "semibold",
                    color: "#000000",
                    textAlign: "center",
                  }}
                >
                  {opt.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        {/* Layout4: Gợi ý bài viết */}
        <View style={{ marginTop: 30 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Bài tập gợi ý cho bạn:
            </Text>
            <TouchableOpacity
              onPress={() => router.push("/(no tabs)/Exercises")}
            >
              <Text
                style={{
                  fontSize: 11,
                  color: "#3514C6",
                  fontWeight: "regular",
                }}
              >
                Xem tất cả
              </Text>
            </TouchableOpacity>
          </View>
          <FlatList
            style={{ marginTop: 20 }}
            data={DataNews}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 20, gap: 12 }}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  width: 220,
                  backgroundColor: "#2D2121",
                  borderRadius: 18,
                  padding: 16,
                }}
              >
                <View
                  style={{
                    backgroundColor: "#FBDFDF",
                    alignSelf: "flex-start",
                    paddingHorizontal: 8,
                    paddingVertical: 3,
                    borderRadius: 6,
                    marginBottom: 10,
                  }}
                >
                  <Text
                    style={{ fontSize: 9, fontWeight: "700", color: "#7a2e2e" }}
                  >
                    BÀI VIẾT
                  </Text>
                </View>

                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "700",
                    color: "#FFFFFF",
                    lineHeight: 19,
                    marginBottom: 6,
                  }}
                  numberOfLines={2}
                >
                  {item.name}
                </Text>

                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: "400",
                    color: "#bfa9a9",
                    lineHeight: 15,
                  }}
                  numberOfLines={2}
                >
                  {item.des}
                </Text>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 12,
                    gap: 4,
                  }}
                >
                  <Ionicons name="time-outline" size={11} color="#8a7878" />
                  <Text style={{ fontSize: 10, color: "#8a7878" }}>
                    5 phút đọc
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
}
