import { useChangePassword } from "@/src/viewmodels/auth/ProfileViewModel";
import { Feather, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useContext, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ThemeContext } from "../../theme/ThemeContext";

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
  const { colors } = useContext(ThemeContext);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: colors.background }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.container}>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 30 }}
        >
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons
              style={{ color: colors.text }}
              name="arrow-back"
              size={25}
            ></Ionicons>
          </TouchableOpacity>
          <Text
            style={{
              flex: 1,
              textAlign: "center",
              fontSize: 20,
              fontWeight: "bold",
              color: colors.text,
            }}
          >
            Thay đổi mật khẩu
          </Text>
        </View>
        <View style={{ marginTop: 30 }}>
          <View
            style={{
              marginBottom: 10,
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FFF",
              borderWidth: 1,
              borderColor: "#E5E5E5",
              borderRadius: 10,
              height: 52,
              paddingHorizontal: 12,
            }}
          >
            <TextInput
              value={currentPassword}
              onChangeText={setCurrentPassword}
              secureTextEntry={!showOldPassword}
              style={{ flex: 1 }}
              placeholder="Nhập mật khẩu hiện tại"
              placeholderTextColor="#999"
            />
            <TouchableOpacity
              onPress={() => setShowOldPassword(!showOldPassword)}
            >
              <Feather
                name={showOldPassword ? "eye" : "eye-off"}
                size={20}
              ></Feather>
            </TouchableOpacity>
          </View>

          <View
            style={{
              marginBottom: 10,
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FFF",
              borderWidth: 1,
              borderColor: "#E5E5E5",
              borderRadius: 10,
              height: 52,
              paddingHorizontal: 12,
            }}
          >
            <TextInput
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={!showNewPassword}
              style={{ flex: 1 }}
              placeholder="Nhập mật khẩu mới"
              placeholderTextColor="#999"
            />
            <TouchableOpacity
              onPress={() => setShowNewPassword(!showNewPassword)}
            >
              <Feather
                name={showNewPassword ? "eye" : "eye-off"}
                size={20}
              ></Feather>
            </TouchableOpacity>
          </View>

          <View
            style={{
              marginBottom: 10,
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#FFF",
              borderWidth: 1,
              borderColor: "#E5E5E5",
              borderRadius: 10,
              height: 52,
              paddingHorizontal: 12,
            }}
          >
            <TextInput
              value={newPa}
              onChangeText={setNewPa}
              style={{ flex: 1 }}
              secureTextEntry={!showConfirmNewPassword}
              placeholder="Xác nhận mật khẩu mới"
              placeholderTextColor="#999"
            />
            <TouchableOpacity
              onPress={() => setShowConfirmNewPassword(!showConfirmNewPassword)}
            >
              <Feather
                name={showConfirmNewPassword ? "eye" : "eye-off"}
                size={20}
              ></Feather>
            </TouchableOpacity>
          </View>
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
