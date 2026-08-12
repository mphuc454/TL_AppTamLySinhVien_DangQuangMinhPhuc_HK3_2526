import { useSearchDoc } from "@/src/filter/FilterView";
import { useEditDoctor } from "@/src/viewmodels/admin/DoctorAdminViewModel";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function AdminDoctorView() {
  const [search, setSearch] = useState("");
  const filterSearchDoc = useSearchDoc(search);
  const handle = useEditDoctor();
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
          Quản lý bác sĩ
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#fff",
          margin: 15,
          paddingHorizontal: 15,
          borderRadius: 12,
          elevation: 2,
        }}
      >
        <Ionicons name="search" size={20} color="gray" />

        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="Tìm bài viết..."
          style={{
            flex: 1,
            height: 45,
            marginLeft: 10,
          }}
        />
      </View>

      {filterSearchDoc.length >= 0 ? (
        filterSearchDoc.map((item) => (
          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: "/(no tabs)/DetailedAppointment",
                params: {
                  id: item.id,
                },
              })
            }
            key={item.id}
            style={{
              backgroundColor: "#fff",
              marginHorizontal: 15,
              marginTop: 15,
              borderRadius: 15,
              overflow: "hidden",
              elevation: 3,
              opacity: item.verify ? 1 : 0.4,
            }}
          >
            <Image
              source={{
                uri: item.avatar_url?.trim()
                  ? item.avatar_url
                  : "https://placehold.co/600x350.png",
              }}
              style={{
                width: "100%",
                height: 180,
              }}
            />

            <View style={{ padding: 15 }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                BS: {item.account_id?.username ?? "Chưa có tài khoản"}
              </Text>

              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                }}
              >
                {item.specialization}
              </Text>

              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "500",
                }}
              >
                SĐT: {item.account_id?.user_id?.phone ?? "Không có"}
              </Text>

              <Text
                style={{
                  marginTop: 15,
                  fontSize: 18,
                  fontWeight: "light",
                }}
              >
                {item.verify ? "Đang hoạt động" : "Vô hiệu hoá"}
              </Text>
              <Text
                style={{
                  marginTop: 15,
                  fontSize: 18,
                  fontWeight: "light",
                }}
              >
                Ngày tạo:
                {item.account_id?.created_at
                  ? new Date(item.account_id.created_at).toLocaleDateString(
                      "vi-VN",
                    )
                  : "Không có"}
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  marginTop: 15,
                }}
              >
                <TouchableOpacity
                  onPress={() => handle(item.id, item.verify)}
                  style={{ marginRight: 20 }}
                >
                  <Ionicons name="create-outline" size={24} color="#2563eb" />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        ))
      ) : (
        <Text
          style={{
            width: "100%",
            textAlign: "center",
            marginTop: 20,
            fontSize: 16,
            color: "#666",
          }}
        >
          Hiện chưa có bác sĩ nào.
        </Text>
      )}
    </ScrollView>
  );
}
