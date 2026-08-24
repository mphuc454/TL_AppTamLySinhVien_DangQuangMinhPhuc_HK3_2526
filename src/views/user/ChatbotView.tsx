import { useChatbotAI } from "@/src/viewmodels/ChatbotViewModel";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useRef } from "react";
import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ChatBotView() {
  const { text, handleMessage, messages, setText } = useChatbotAI();
  const flatListRef = useRef<FlatList>(null);
  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="chevron-back" size={24} color="#333" />
        </TouchableOpacity>

        <View style={styles.userInfo}>
          <Image
            style={styles.avatar}
            source={{
              uri: "https://rmzjhiftwntkrcygnrww.supabase.co/storage/v1/object/public/Chatbot%20AI/alexandra_koch-robot-7720755_1920.png",
            }}
          />

          <View>
            <Text style={styles.name}>Chatbot</Text>
            <View style={styles.statusRow} />
          </View>
        </View>
      </View>

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
      >
        {/* Messages */}
        <FlatList
          ref={flatListRef}
          data={messages}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          onContentSizeChange={() => {
            flatListRef.current?.scrollToEnd({ animated: true });
          }}
          renderItem={({ item }) => {
            const isMe = item.sender === "me";

            return (
              <View
                style={[
                  styles.messageRow,
                  isMe
                    ? styles.myMessageContainer
                    : styles.otherMessageContainer,
                ]}
              >
                {!isMe && (
                  <Image
                    style={styles.avatar}
                    source={{
                      uri: "https://rmzjhiftwntkrcygnrww.supabase.co/storage/v1/object/public/Chatbot%20AI/alexandra_koch-robot-7720755_1920.png",
                    }}
                  />
                )}

                <View style={{ maxWidth: "78%" }}>
                  <View
                    style={[
                      styles.bubble,
                      isMe ? styles.myBubble : styles.otherBubble,
                    ]}
                  >
                    <Text
                      style={[styles.messageText, isMe && styles.myMessageText]}
                    >
                      {item.text}
                    </Text>
                  </View>
                </View>
              </View>
            );
          }}
        />

        <View style={styles.inputContainer}>
          <TextInput
            value={text}
            onChangeText={setText}
            placeholder="Nhắn tin..."
            placeholderTextColor="#9A9AA4"
            style={styles.input}
            multiline
          />

          <TouchableOpacity
            onPress={handleMessage}
            style={[
              styles.sendButton,
              !text.trim() && styles.sendButtonDisabled,
            ]}
            disabled={!text.trim()}
          >
            <Ionicons name="send" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const PRIMARY = "#212ffa";
const ACCENT = "#F49C8F";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F6FB",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: "white",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 8,
    elevation: 3,
  },

  backBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F3F3F5",
  },

  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },

  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: ACCENT,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  avatarText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },

  name: {
    fontSize: 16,
    fontWeight: "700",
    color: "#222",
  },

  statusRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
  },

  onlineDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: "#4CD964",
    marginRight: 5,
  },

  statusText: {
    fontSize: 12,
    color: "#8E8E93",
  },

  listContent: {
    padding: 16,
    paddingBottom: 10,
  },

  messageRow: {
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "flex-end",
  },

  myMessageContainer: {
    justifyContent: "flex-end",
  },

  otherMessageContainer: {
    justifyContent: "flex-start",
  },

  smallAvatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: ACCENT,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },

  smallAvatarText: {
    color: "white",
    fontSize: 11,
    fontWeight: "700",
  },

  bubble: {
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },

  myBubble: {
    backgroundColor: PRIMARY,
    alignSelf: "flex-end",
    borderBottomRightRadius: 4,
    shadowColor: PRIMARY,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 2,
  },

  otherBubble: {
    backgroundColor: "white",
    borderBottomLeftRadius: 4,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 1,
  },

  messageText: {
    fontSize: 15,
    color: "#333",
    lineHeight: 21,
  },

  myMessageText: {
    color: "white",
  },

  time: {
    fontSize: 11,
    color: "#B0B0B8",
    marginTop: 4,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: "#fff",
    marginBottom: 35,
  },

  input: {
    flex: 1,
    maxHeight: 100,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "#F2F2F5",
  },

  sendButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: PRIMARY,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },

  sendButtonDisabled: {
    backgroundColor: PRIMARY,
  },
});
