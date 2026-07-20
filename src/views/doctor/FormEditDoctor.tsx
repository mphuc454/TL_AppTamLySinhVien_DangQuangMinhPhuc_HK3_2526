import { useEditDoc } from "@/src/viewmodels/DoctorViewModel";
import { useLocalSearchParams } from "expo-router";
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function FormEditView() {
  const { id } = useLocalSearchParams();

  const {
    bio,
    experience,
    role,
    setBio,
    setExperience,
    setRole,
    setSpecialization,
    specialization,
    handleUpdate,
  } = useEditDoc(Number(id));
  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
      <Text
        style={{
          marginTop: 30,
          flex: 1,
          textAlign: "center",
          fontSize: 20,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        Bổ sung thông tin bác sĩ
      </Text>

      <View style={styles.group}>
        <Text style={styles.label}>Nhập chuyên ngành</Text>
        <TextInput
          placeholder="Nhập chuyên ngành của bác sĩ"
          value={specialization}
          onChangeText={setSpecialization}
          style={styles.input}
        />
      </View>

      <View style={styles.group}>
        <Text style={styles.label}>Nhập vai trò</Text>
        <TextInput
          placeholder="Nhập vai trò bác sĩ"
          value={role}
          onChangeText={setRole}
          style={styles.input}
        />
      </View>

      <View style={styles.group}>
        <Text style={styles.label}>Giới thiệu bản thân</Text>

        <TextInput
          multiline
          placeholder="Nhập nội dung..."
          value={bio}
          onChangeText={setBio}
          style={styles.textArea}
          textAlignVertical="top"
        />
      </View>

      <View style={styles.group}>
        <Text style={styles.label}>Số năm kinh nghiệm</Text>
        <TextInput
          placeholder="Nhập năm kinh nghiệm"
          value={experience}
          onChangeText={setExperience}
          style={styles.input}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleUpdate}>
        <Text style={styles.buttonText}>Cập nhật thông tin</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6FA",
  },

  content: {
    padding: 18,
    paddingBottom: 40,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 20,
  },

  imagePicker: {
    height: 200,
    borderRadius: 16,
    overflow: "hidden",
    marginBottom: 25,
    backgroundColor: "#E5E7EB",
  },

  image: {
    width: "100%",
    height: "100%",
  },

  imageOverlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.35)",
  },

  imageText: {
    color: "#fff",
    marginTop: 10,
    fontSize: 16,
    fontWeight: "600",
  },

  group: {
    marginBottom: 18,
  },

  label: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 8,
    color: "#1F2937",
  },

  input: {
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    height: 55,
    paddingHorizontal: 16,
    fontSize: 16,
  },

  dropdown: {
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    height: 55,
    paddingHorizontal: 16,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },

  textArea: {
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    minHeight: 180,
    padding: 16,
    fontSize: 16,
  },

  switchContainer: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 16,
    marginBottom: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  subText: {
    color: "#6B7280",
    marginTop: 4,
    width: 250,
  },

  button: {
    marginTop: 30,
    height: 56,
    backgroundColor: "#2563EB",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 18,
  },
});
