import { useGetRequestVM } from "@/src/viewmodels/HealthViewModel";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function ListUserView() {
  const { heal } = useGetRequestVM();

  return (
    <ScrollView>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 30 }}
      >
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={25}></Ionicons>
        </TouchableOpacity>
        <Text
          style={{
            flex: 1,
            textAlign: "center",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Yêu cầu theo dõi sức khoẻ người dùng
        </Text>
      </View>
      <View style={{ marginTop: 30 }}>
        {heal.map((item) => (
          <View
            key={item.id}
            style={{
              backgroundColor: "#fff",
              padding: 16,
              borderRadius: 15,
              marginBottom: 15,
              elevation: 2,
            }}
          >
            <TouchableOpacity
            // onPress={() =>
            //   router.push({
            //     pathname: "/doctor/MainDoctor",
            //     params: {
            //       accountId: item.accountId,
            //     },
            //   })
            // }
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                {item.account_id.username}
              </Text>

              <Text
                style={{
                  color: "#666",
                  marginTop: 5,
                }}
              >
                {item.account_id.user_id.email}
              </Text>
            </TouchableOpacity>

            {/* Nút chức năng */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 15,
              }}
            >
              <TouchableOpacity
                // onPress={() => handleAccept(item.accountId)}
                style={{
                  flex: 1,
                  backgroundColor: "#22C55E",
                  paddingVertical: 12,
                  borderRadius: 10,
                  marginRight: 8,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                >
                  Chấp nhận
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                // onPress={() => handleReject(item.accountId)}
                style={{
                  flex: 1,
                  backgroundColor: "#EF4444",
                  paddingVertical: 12,
                  borderRadius: 10,
                  marginLeft: 8,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                >
                  Từ chối
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
