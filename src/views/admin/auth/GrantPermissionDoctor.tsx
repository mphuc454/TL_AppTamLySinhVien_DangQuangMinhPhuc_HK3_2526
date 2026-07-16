import { useDoctorDetailViewModel } from "@/src/viewmodels/DoctorViewModel";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { Switch, Text, TouchableOpacity, View } from "react-native";

export default function GrantPermissionDoctorView() {
  const { id } = useLocalSearchParams();
  const { doc_id } = useDoctorDetailViewModel(Number(id));
  //     const [canInsert, setCanInsert] = useState(true);
  //   const [canUpdate, setCanUpdate] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#F4F6F9",
        padding: 20,
      }}
    >
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={25}></Ionicons>
      </TouchableOpacity>
      <View
        style={{
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Ionicons name="shield-checkmark" size={70} color="#2563eb" />

        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
            marginTop: 10,
          }}
        >
          {doc_id?.account_id.user_id.full_name}
        </Text>

        <Text
          style={{
            color: "#666",
            marginTop: 5,
          }}
        >
          {doc_id?.specialization}
        </Text>
      </View>

      <View
        style={{
          backgroundColor: "#fff",
          marginTop: 30,
          borderRadius: 15,
          padding: 18,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            marginBottom: 20,
          }}
        >
          Quyền thao tác
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Text>Thêm dữ liệu (INSERT)</Text>

          <Switch
          // value={canInsert}
          // onValueChange={setCanInsert}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text>Chỉnh sửa dữ liệu (UPDATE)</Text>

          <Switch
          // value={canUpdate}
          // onValueChange={setCanUpdate}
          />
        </View>
      </View>

      <TouchableOpacity
        style={{
          marginTop: 30,
          backgroundColor: "#2563eb",
          padding: 16,
          borderRadius: 12,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 17,
            fontWeight: "bold",
          }}
        >
          Cập nhật quyền
        </Text>
      </TouchableOpacity>
    </View>
  );
}
