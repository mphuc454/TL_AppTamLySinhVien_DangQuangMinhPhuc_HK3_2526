import {
  useHealthDetail,
  useRejectRequest,
  useTotalEmotion,
} from "@/src/viewmodels/HealthViewModel";
import { useLocalSearchParams } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function HealthManagementView() {
  const { accountId } = useLocalSearchParams();
  const { heal_id } = useHealthDetail(Number(accountId));
  const userId = heal_id?.account_id.user_id;
  const { emoTotal } = useTotalEmotion(
    typeof userId === "string" ? userId : undefined,
  );
  const rej = useRejectRequest();

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#F5F6FA" }}
      contentContainerStyle={{ padding: 16 }}
    >
      <Text
        style={{
          fontSize: 22,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        Theo dõi sức khỏe
      </Text>

      <View
        style={{
          backgroundColor: "#fff",
          borderRadius: 16,
          padding: 18,
          marginBottom: 20,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Text>Tên người dùng:</Text>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            {heal_id?.account_id.username ?? "Chưa có thông tin"}
          </Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Text>Email:</Text>
          <Text style={{ marginTop: 8 }}>
            {heal_id?.account_id.profile?.email ?? "Chưa có thông tin"}
          </Text>
        </View>
      </View>

      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          marginBottom: 15,
        }}
      >
        Thống kê cảm xúc theo nhật ký của người dùng
      </Text>

      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {[
          {
            title: "Tích cực",
            color: "#22C55E",
            total: emoTotal.tichcuc,
          },
          {
            title: "Bình thản",
            color: "#3B82F6",
            total: emoTotal.binhthan,
          },
          {
            title: "Lo âu",
            color: "#F59E0B",
            total: emoTotal.loau,
          },
          {
            title: "Buồn bã",
            color: "#6366F1",
            total: emoTotal.buonba,
          },
          {
            title: "Giận dữ",
            color: "#EF4444",
            total: emoTotal.giandu,
          },
        ].map((item) => (
          <View
            key={item.title}
            style={{
              width: "48%",
              backgroundColor: "#fff",
              borderRadius: 15,
              padding: 16,
              marginBottom: 12,
              borderLeftWidth: 5,
              borderLeftColor: item.color,
            }}
          >
            <Text style={{ fontWeight: "600" }}>{item.title}</Text>

            <Text
              style={{
                fontSize: 28,
                color: item.color,
                fontWeight: "bold",
                marginTop: 10,
              }}
            >
              {item.total}
            </Text>

            <Text style={{ color: "#666" }}>lượt ghi nhận</Text>
          </View>
        ))}
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#10B981",
          padding: 15,
          borderRadius: 12,
          marginTop: 12,
        }}
      >
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Nhắn tin
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          if (heal_id?.id !== undefined) {
            rej(heal_id.id);
          }
        }}
        style={{
          backgroundColor: "#EF4444",
          padding: 15,
          borderRadius: 12,
          marginTop: 12,
          marginBottom: 30,
        }}
      >
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Kết thúc theo dõi
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
