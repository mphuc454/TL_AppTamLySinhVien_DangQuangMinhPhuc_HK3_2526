import { useConfigChatbot } from "@/src/viewmodels/admin/ConfigChatbotViewModel";
import { Picker } from "@react-native-picker/picker";
import { Alert, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function AdminChatbotView() {
  const {
    updateConfigChatbot,
    model,
    setModel,
    maxTokens,
    setMaxTokens,
    temperature,
    setTemperature,
    topP,
    setTopP,
  } = useConfigChatbot();

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#F5F7FB" }}
      contentContainerStyle={{ paddingBottom: 80 }}
    >
      <Text
        style={{
          fontSize: 26,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        Quản lý Chatbot
      </Text>

      <View
        style={{
          backgroundColor: "#fff",
          borderRadius: 15,
          padding: 16,
          marginBottom: 20,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            marginBottom: 15,
          }}
        >
          Cấu hình Chatbot
        </Text>

        <Text>Chọn Model</Text>

        <Picker
          style={{
            backgroundColor: "#e1bbbb",
            borderRadius: 12,
            borderWidth: 1,
            height: 55,
            paddingHorizontal: 16,
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
          }}
          selectedValue={model}
          onValueChange={(value) => setModel(value)}
        >
          <Picker.Item
            label="openai/gpt-oss-120b"
            value="openai/gpt-oss-120b"
          />
          <Picker.Item label="openai/gpt-oss-20b" value="openai/gpt-oss-20b" />
          <Picker.Item label="qwen/qwen3.6-27b" value="qwen/qwen3.6-27b" />
          <Picker.Item
            label="openai/gpt-oss-safeguard-20b"
            value="openai/gpt-oss-safeguard-20b"
          />
        </Picker>
        <View style={{ marginTop: 30 }}>
          <Text>Temperature</Text>
          <Picker
            style={{
              borderRadius: 12,
              borderWidth: 1,
              backgroundColor: "#f2dcdc",
              height: 55,
              paddingHorizontal: 16,
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              marginBottom: 30,
            }}
            selectedValue={String(temperature)}
            onValueChange={(value) => setTemperature(Number(value))}
          >
            <Picker.Item label="0.3" value="0.3" />
            <Picker.Item label="0.4" value="0.4" />
            <Picker.Item label="0.5" value="0.5" />
            <Picker.Item label="0.6" value="0.6" />
            <Picker.Item label="0.7" value="0.7" />
          </Picker>
          <Text>Top P</Text>
          <Picker
            style={{
              borderRadius: 12,
              borderWidth: 1,
              backgroundColor: "#f2dcdc",
              height: 55,
              paddingHorizontal: 16,
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              marginBottom: 30,
            }}
            selectedValue={String(topP)}
            onValueChange={(value) => setTopP(Number(value))}
          >
            <Picker.Item label="0.8" value="0.8" />
            <Picker.Item label="0.9" value="0.9" />
            <Picker.Item label="1.0" value="1.0" />
          </Picker>

          <Text>Max Tokens</Text>

          <Picker
            style={{
              borderRadius: 12,
              borderWidth: 1,
              backgroundColor: "#f2dcdc",
              height: 55,
              paddingHorizontal: 16,
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              marginBottom: 30,
            }}
            selectedValue={String(maxTokens)}
            onValueChange={(value) => setMaxTokens(Number(value))}
          >
            <Picker.Item label="256" value="256" />
            <Picker.Item label="512" value="512" />
            <Picker.Item label="1024" value="1024" />
          </Picker>
        </View>

        <TouchableOpacity
          onPress={async () => {
            try {
              await updateConfigChatbot(model, temperature, topP, maxTokens);
              Alert.alert("Thành công", "Đã cập nhật cấu hình chatbot.");
            } catch (error) {
              Alert.alert("Lỗi", "Không thể cập nhật cấu hình.");
              console.log(error);
            }
          }}
          style={{
            backgroundColor: "#2563EB",
            marginTop: 20,
            padding: 15,
            borderRadius: 12,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "bold" }}>
            Lưu cấu hình
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
