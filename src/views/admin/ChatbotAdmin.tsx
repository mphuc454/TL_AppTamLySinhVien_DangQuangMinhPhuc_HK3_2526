import { useConfigChatbot } from "@/src/viewmodels/ApiFlaskViewModel";
import { Picker } from "@react-native-picker/picker";
import {
  Alert,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function AdminChatbotView() {
  const {
    updateConfig,
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
      contentContainerStyle={{ paddingBottom: 100 }}
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
            label="llama-3.1-8b-instant"
            value="llama-3.1-8b-instant"
          />
          <Picker.Item
            label="llama-3.3-70b-versatile"
            value="llama-3.3-70b-versatile"
          />
          <Picker.Item
            label="meta-llama/llama-prompt-guard-2-22m"
            value="meta-llama/llama-prompt-guard-2-22m"
          />
          <Picker.Item
            label="meta-llama/llama-prompt-guard-2-86m"
            value="meta-llama/llama-prompt-guard-2-86m"
          />
          <Picker.Item
            label="openai/gpt-oss-120b"
            value="openai/gpt-oss-120b"
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
            selectedValue={temperature}
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
            selectedValue={topP}
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
            selectedValue={maxTokens}
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
              await updateConfig(model, temperature, topP, maxTokens);
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

      <View
        style={{
          backgroundColor: "#fff",
          borderRadius: 15,
          padding: 16,
          marginBottom: 30,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            marginBottom: 15,
          }}
        >
          Hỏi Chatbot
        </Text>

        <TextInput
          placeholder="Ask chatbot..."
          multiline
          style={{
            borderWidth: 1,
            borderColor: "#ddd",
            borderRadius: 12,
            minHeight: 90,
            padding: 12,
            marginBottom: 15,
          }}
        />

        <TouchableOpacity
          style={{
            backgroundColor: "#2563EB",
            padding: 15,
            borderRadius: 12,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
            }}
          >
            Gửi
          </Text>
        </TouchableOpacity>

        <View
          style={{
            borderWidth: 1,
            borderColor: "#ddd",
            borderRadius: 16,
            minHeight: 90,
            padding: 12,
            marginTop: 15,
          }}
        >
          <Text style={{ fontWeight: "bold" }}>Phản hồi Chatbot: </Text>

          <Text style={{ marginTop: 10, color: "#666" }}></Text>
        </View>
      </View>
    </ScrollView>
  );
}
