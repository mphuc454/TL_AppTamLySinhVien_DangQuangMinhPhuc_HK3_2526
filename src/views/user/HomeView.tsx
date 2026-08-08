import { useEmotionAnalytics } from "@/src/viewmodels/ApiFlaskViewModel";
import { useAccountDetailViewModel } from "@/src/viewmodels/auth/ProfileViewModel";
import {
  useLastEmotionLogDate,
  useMostEmotionLog,
  useTotalLogViewModel,
} from "@/src/viewmodels/EmotionViewModel";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useContext } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { ThemeContext } from "../theme/ThemeContext";

const Data2 = [
  {
    id: 1,
    name: "Xem bài viết",
    icon: "book",
    bg: "#F9EED8",
    route: "/(tabs)/Article",
  },
  {
    id: 2,
    name: "Xem bác sĩ",
    icon: "calendar",
    bg: "#F9EED8",
    route: "/(tabs)/Appointment",
  },
  {
    id: 3,
    name: "Xem bài tập",
    icon: "heart",
    bg: "#F9EED8",
    route: "/(no tabs)/Exercises",
  },
  {
    id: 4,
    name: "Nghe nhạc thư giãn",
    icon: "musical-notes",
    bg: "#F9EED8",
    route: "/(no tabs)/Music",
  },
] as const;

export default function IndexView() {
  const { colors } = useContext(ThemeContext);
  const { logTotal } = useTotalLogViewModel();
  const { usrname } = useAccountDetailViewModel();
  const { emotionStatus, emotion_color, loading, getAnalytics } =
    useEmotionAnalytics();
  const { lastDate } = useLastEmotionLogDate();
  const { mostEmotion } = useMostEmotionLog();
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
          Chào bạn {usrname}, gửi lời chào đến bạn với tràn đầy năng lượng nào!
        </Text>
        <Text
          style={{
            marginTop: 25,
            marginBottom: 5,
            fontSize: 20,
            fontWeight: "bold",
            color: "#0bd80e",
          }}
        >
          Tổng quan ghi nhật ký:
        </Text>
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
                fontSize: 36,
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
                fontSize: 36,
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
                fontSize: 36,
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
                fontSize: 36,
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
        <Text
          style={{
            marginTop: 25,
            marginBottom: 5,
            fontSize: 20,
            fontWeight: "bold",
            color: "#0bd80e",
          }}
        >
          Trò chuyện với chatbot AI:
        </Text>
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
              onPress={() => router.push("/(no tabs)/Chatbot")}
            >
              <Text style={{ color: "#604FD9", fontWeight: "bold" }}>
                Bắt đầu
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text
          style={{
            marginTop: 25,
            marginBottom: 5,
            fontSize: 20,
            fontWeight: "bold",
            color: "#0bd80e",
          }}
        >
          Phân tích tâm trạng của bạn:
        </Text>
        <View
          style={{
            marginTop: 18,
            backgroundColor: colors.cardBackground,
            borderRadius: 24,
            padding: 18,
            borderWidth: 1,
            borderColor: "#E9E4F6",
            shadowColor: "#000",
            shadowOpacity: 0.06,
            shadowRadius: 10,
            shadowOffset: { width: 0, height: 4 },
            elevation: 3,
          }}
        >
          <View
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
                flex: 1,
              }}
            >
              <View
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 21,
                  backgroundColor: "#EFEAFB",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: 12,
                }}
              >
                <Ionicons name="pulse-outline" size={22} color="#604FD9" />
              </View>

              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "700",
                    color: colors.text,
                  }}
                >
                  Phân tích tâm trạng
                </Text>
              </View>
            </View>
          </View>
          <View>
            <Text
              style={{
                marginTop: 16,
                padding: 12,
                backgroundColor: "#FFF8E1",
                borderLeftWidth: 4,
                borderLeftColor: "#F59E0B",
                color: "#92400E",
                fontSize: 14,
                lineHeight: 22,
                borderRadius: 8,
                textAlign: "justify",
              }}
            >
              Xin lưu ý: đây chỉ có tính chất tham khảo. Nếu bạn gặp vấn đề xin
              vui lòng liên hệ đến bác sĩ để tư vấn tâm lý.
            </Text>
          </View>
          <View
            style={{
              backgroundColor: emotion_color,
              padding: 14,
              borderRadius: 14,
              alignItems: "center",
              marginBottom: 18,
              marginTop: 18,
            }}
          >
            <Text style={{ fontSize: 14 }}>Tình hình hiện tại</Text>

            <Text
              style={{
                fontSize: 24,
                fontWeight: "700",
              }}
            >
              {emotionStatus}
            </Text>

            <Text
              style={{
                marginTop: 6,
              }}
            >
              Dựa trên nhật ký cảm xúc của bạn
            </Text>
          </View>
          <TouchableOpacity
            onPress={getAnalytics}
            disabled={loading}
            style={{
              marginTop: 18,
              height: 48,
              borderRadius: 14,
              backgroundColor: "#604FD9",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Ionicons
              name="sparkles-outline"
              size={18}
              color="#FFF"
              style={{ marginRight: 8 }}
            />
            <Text style={{ color: "#FFF", fontWeight: "700", fontSize: 14 }}>
              {loading ? "Đang phân tích..." : "Xem phân tích"}
            </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            marginTop: 25,
            marginBottom: 5,
            fontSize: 20,
            fontWeight: "bold",
            color: "#0bd80e",
          }}
        >
          Khám phá & thư giãn:
        </Text>
        <View style={{ marginTop: 8 }}>
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
                onPress={() => router.push(item.route)}
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
      </View>
    </ScrollView>
  );
}
