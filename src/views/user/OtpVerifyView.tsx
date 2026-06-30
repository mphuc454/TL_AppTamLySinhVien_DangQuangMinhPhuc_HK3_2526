import { Ionicons } from "@expo/vector-icons";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
export default function OtpView() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.topbar}>
        <TouchableOpacity style={styles.backBtn}>
          <Ionicons name="chevron-back" size={22} color="#1a1a1a" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <View style={styles.iconCircle}>
          <Ionicons name="mail-open-outline" size={32} color="#445AE6" />
        </View>

        <Text style={styles.title}>Kiểm tra email của bạn</Text>
        <Text style={styles.subtitle}>
          Nhập mã 6 số đã được gửi đến{"\n"}
          <Text style={styles.bold}>***@gmail.com</Text>
        </Text>

        <View style={styles.otpRow}>
          <TextInput
            style={[styles.otpBox, styles.otpBoxFilled]}
            value=""
            textAlign="center"
          />
          <TextInput
            style={[styles.otpBox, styles.otpBoxFilled]}
            value=""
            textAlign="center"
          />
          <TextInput
            style={[styles.otpBox, styles.otpBoxFilled]}
            value=""
            textAlign="center"
          />
          <TextInput
            style={[styles.otpBox, styles.otpBoxActive]}
            value=""
            textAlign="center"
          />
          <TextInput style={styles.otpBox} value="" textAlign="center" />
          <TextInput style={styles.otpBox} value="" textAlign="center" />
        </View>

        <View style={styles.resendRow}>
          <Text style={styles.resendText}>Chưa nhận được mã? </Text>
          <Text style={styles.timer}>Gửi lại sau 0:48</Text>
        </View>

        <TouchableOpacity>
          <Text style={styles.changeEmail}>Đổi email khác</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={[styles.confirmBtn, styles.confirmBtnDisabled]}
        >
          <Text style={styles.confirmBtnText}>Xác nhận</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  topbar: { paddingTop: 48, paddingHorizontal: 20 },
  backBtn: { width: 32, height: 32, justifyContent: "center" },
  content: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 30,
    alignItems: "center",
  },
  iconCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "#eef0ff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
  title: {
    fontSize: 21,
    fontWeight: "700",
    color: "#1a1a1a",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 13,
    color: "#888",
    textAlign: "center",
    lineHeight: 20,
  },
  bold: { color: "#1a1a1a", fontWeight: "600" },
  otpRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 32,
    marginBottom: 8,
  },
  otpBox: {
    width: 46,
    height: 54,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: "#e5e5e5",
    backgroundColor: "#fafafa",
    fontSize: 22,
    fontWeight: "700",
    color: "#1a1a1a",
  },
  otpBoxFilled: { borderColor: "#445AE6", backgroundColor: "#fff" },
  otpBoxActive: {
    borderColor: "#445AE6",
    backgroundColor: "#fff",
    shadowColor: "#445AE6",
    shadowOpacity: 0.15,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 0 },
  },
  resendRow: { flexDirection: "row", marginTop: 16 },
  resendText: { fontSize: 13, color: "#999" },
  timer: { fontSize: 13, color: "#bbb", fontWeight: "600" },
  changeEmail: {
    fontSize: 12,
    color: "#445AE6",
    fontWeight: "600",
    marginTop: 18,
  },
  bottomBar: { paddingHorizontal: 28, paddingBottom: 36, marginBottom: 100 },
  confirmBtn: {
    backgroundColor: "#445AE6",
    borderRadius: 16,
    padding: 15,
    alignItems: "center",
  },
  confirmBtnDisabled: { backgroundColor: "#d8deff" },
  confirmBtnText: { fontSize: 15, fontWeight: "700", color: "#fff" },
});
