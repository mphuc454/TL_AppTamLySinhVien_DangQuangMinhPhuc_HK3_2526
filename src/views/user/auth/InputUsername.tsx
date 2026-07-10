import { useInputUsrViewModel } from "@/src/viewmodels/auth/InputUsrViewModel";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const ROLES = [
  { value: "1", label: "User" },
  { value: "2", label: "Admin" },
  { value: "3", label: "Doctor" },
];

export default function InputUsrView() {
  const { name, setName, role, setRole, handleSubmit } = useInputUsrViewModel();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#fff" }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Nhập thông tin</Text>

        <Text style={styles.label}>Tên</Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập tên của bạn"
          placeholderTextColor="#999"
          value={name}
          onChangeText={setName}
        />
        <Text style={styles.label}>Vai trò</Text>
        <View style={styles.roleRow}>
          {ROLES.map((item) => (
            <TouchableOpacity
              key={item.value}
              style={[
                styles.roleButton,
                role === item.value && styles.roleButtonActive,
              ]}
              onPress={() => setRole(item.value)}
            >
              <Text
                style={[
                  styles.roleButtonText,
                  role === item.value && styles.roleButtonTextActive,
                ]}
              >
                {item.value}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.noteBox}>
          {ROLES.map((item) => (
            <Text key={item.value} style={styles.noteText}>
              {item.value} = {item.label}
            </Text>
          ))}
        </View>
        <TouchableOpacity
          style={[
            styles.submitButton,
            (!name || !role) && styles.submitButtonDisabled,
          ]}
          disabled={!name || !role}
          onPress={handleSubmit}
        >
          <Text style={styles.submitButtonText}>Xác nhận</Text>
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
  roleRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 12,
  },
  roleButton: {
    width: 56,
    height: 56,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fafafa",
  },
  roleButtonActive: {
    borderColor: "#2563eb",
    backgroundColor: "#eff6ff",
  },
  roleButtonText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#666",
  },
  roleButtonTextActive: {
    color: "#2563eb",
  },
  noteBox: {
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    padding: 12,
    marginBottom: 32,
  },
  noteText: {
    fontSize: 13,
    color: "#666",
    lineHeight: 20,
  },
  submitButton: {
    backgroundColor: "#2563eb",
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: "center",
  },
  submitButtonDisabled: {
    backgroundColor: "#a5b4fc",
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});
