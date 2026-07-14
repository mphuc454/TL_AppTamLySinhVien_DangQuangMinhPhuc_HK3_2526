import { Text, View } from "react-native";

export default function HealthManagementView() {
  return (
    <View style={{ flex: 1 }}>
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
    </View>
  );
}
