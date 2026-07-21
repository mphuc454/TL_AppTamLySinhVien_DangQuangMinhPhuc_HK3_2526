import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function HealthManagementView() {
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

      {/* Thông tin người dùng */}
      <View
        style={{
          backgroundColor: "#fff",
          borderRadius: 16,
          padding: 18,
          marginBottom: 20,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Nguyễn Văn A</Text>

        <Text style={{ marginTop: 8 }}>Email: nguyenvana@gmail.com</Text>
      </View>

      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          marginBottom: 15,
        }}
      >
        Thống kê cảm xúc theo nhật ký
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
            total: 32,
          },
          {
            title: "Bình thản",
            color: "#3B82F6",
            total: 20,
          },
          {
            title: "Lo âu",
            color: "#F59E0B",
            total: 8,
          },
          {
            title: "Buồn bã",
            color: "#6366F1",
            total: 6,
          },
          {
            title: "Giận dữ",
            color: "#EF4444",
            total: 2,
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

      {/* Chức năng */}
      <TouchableOpacity
        style={{
          backgroundColor: "#4F46E5",
          padding: 15,
          borderRadius: 12,
          marginTop: 10,
        }}
      >
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Xem nhật ký cảm xúc
        </Text>
      </TouchableOpacity>

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
