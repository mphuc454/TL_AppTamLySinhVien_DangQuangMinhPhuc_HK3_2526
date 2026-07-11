import { useChangePassword } from "@/src/viewmodels/auth/ProfileViewModel";
import {
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function InputUsrView() {
  const { newPa, setNewPa, handleChangePass, loading } = useChangePassword();
  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#fff" }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Thay đổi mật khẩu</Text>
        <Text style={styles.label}>Nhập mật khẩu mới</Text>
        <TextInput
          value={newPa}
          onChangeText={setNewPa}
          style={styles.input}
          placeholder="Nhập mật khẩu mới"
          placeholderTextColor="#999"
        />
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
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1a1a1a",
    marginBottom: 32,
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
