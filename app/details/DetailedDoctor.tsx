import { Text, View } from "react-native";

export default function DetailedDoctorScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
        backgroundColor: "#fff",
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: "600" }}>Chi tiết bác sĩ</Text>
    </View>
  );
}
