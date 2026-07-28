import { useChangePassword } from "@/src/viewmodels/auth/ProfileViewModel";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function ChangePassView() {
  const {
    newPa,
    setNewPa,
    handleChangePass,
    loading,
    confirmPassword,
    setConfirmPassword,
    currentPassword,
    setCurrentPassword,
  } = useChangePassword();
  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#fff" }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.container}>
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
            Thay đổi mật khẩu
          </Text>
        </View>
        <View style={{ marginTop: 30 }}>
          <Text style={styles.label}>Nhập mật khẩu hiện tại</Text>
          <TextInput
            value={currentPassword}
            onChangeText={setCurrentPassword}
            style={styles.input}
            placeholder="Nhập mật khẩu hiện tại"
            placeholderTextColor="#999"
          />
          <Text style={styles.label}>Nhập mật khẩu mới</Text>
          <TextInput
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            style={styles.input}
            placeholder="Nhập mật khẩu mới"
            placeholderTextColor="#999"
          />
          <Text style={styles.label}>Xác nhận mật khẩu mới</Text>
          <TextInput
            value={newPa}
            onChangeText={setNewPa}
            style={styles.input}
            placeholder="Xác nhận mật khẩu mới"
            placeholderTextColor="#999"
          />
        </View>

        <TouchableOpacity
          onPress={handleChangePass}
          disabled={loading}
          style={styles.submitButton}
        >
          <Text style={styles.submitButtonText}>
            {loading ? "Đang xử lý..." : "Xác nhận"}
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
  },

  label: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    color: "#1a1a1a",
    marginBottom: 24,
  },

  submitButton: {
    backgroundColor: "#2563eb",
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: "center",
  },

  submitButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});
