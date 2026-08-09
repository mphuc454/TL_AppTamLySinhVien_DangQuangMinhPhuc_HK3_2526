import { useEditDoc } from "@/src/viewmodels/DoctorViewModel";
import { Picker } from "@react-native-picker/picker";
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function InsertDoctorView() {
  const {
    bio,
    experience,
    role,
    setBio,
    setExperience,
    setRole,
    setSpecialization,
    specialization,
    handleInsert,
  } = useEditDoc();
  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 30 }}
      >
        <Text
          style={{
            marginTop: 30,
            flex: 1,
            textAlign: "center",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Nhập chuyên môn của bác sĩ
        </Text>
      </View>

      <View style={styles.group}>
        <Text style={styles.label}>Chọn chuyên ngành</Text>
        <Picker
          style={{
            backgroundColor: "#fff",
            borderRadius: 12,
            borderWidth: 1,
            borderColor: "#E5E7EB",
            height: 55,
            paddingHorizontal: 16,
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
          }}
          selectedValue={specialization}
          onValueChange={(value) => setSpecialization(value)}
        >
          <Picker.Item label="Tâm lý sức khỏe" value="Tâm lý sức khỏe" />
          <Picker.Item label="Tâm lý lâm sàng" value="Tâm lý lâm sàng" />
          <Picker.Item label="Tư vấn tâm lý" value="Tư vấn tâm lý" />
          <Picker.Item
            label="Tâm lý trẻ em và vị thành niên"
            value="Tâm lý trẻ em và vị thành niên"
          />
          <Picker.Item label="Tâm lý học đường" value="Tâm lý học đường" />
          <Picker.Item label="Khác" value="Khác" />
        </Picker>
      </View>

      <View style={styles.group}>
        <Text style={styles.label}>Chọn vai trò</Text>
        <Picker
          style={styles.dropdown}
          selectedValue={role}
          onValueChange={(value) => setRole(value)}
        >
          <Picker.Item label="Khác" value="" />
          <Picker.Item label="Bác sĩ" value="Bác sĩ" />
          <Picker.Item label="Chuyên viên" value="Chuyên viên" />
        </Picker>
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
      <TouchableOpacity style={styles.button} onPress={handleInsert}>
        <Text style={styles.buttonText}>Thêm thông tin</Text>
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
    marginTop: 30,
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
