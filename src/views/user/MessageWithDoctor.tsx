import { useChat, useGetAccount } from "@/src/viewmodels/ChatViewModel";
import { useDoctorDetailViewModel } from "@/src/viewmodels/DoctorViewModel";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import {
  ActivityIndicator,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ChatScreen() {
  const { id, otherAccountId, otherName } = useLocalSearchParams();
  const usracc = useGetAccount();

  const doctorTableId = !otherAccountId && id ? Number(id) : undefined;

  const { doc_id } = useDoctorDetailViewModel(doctorTableId);

  const docacc = otherAccountId
    ? Number(otherAccountId)
    : doc_id?.account_id?.id;

  const displayName = otherAccountId
    ? String(otherName ?? "Người dùng")
    : (doc_id?.account_id?.username ?? "Bác sĩ");

  const ready = !!usracc && !!docacc && Number.isFinite(docacc);

  const { messages, text, setText, send } = useChat(
    usracc,
    ready ? docacc! : 0,
  );

  const initial = displayName.charAt(0).toUpperCase();

  if (!ready) {
    return (
      <SafeAreaView
        style={[styles.container, styles.centerContent]}
        edges={["top", "left", "right"]}
      >
        <ActivityIndicator size="large" color="#5661F6" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="chevron-back" size={24} color="#333" />
        </TouchableOpacity>

        <View style={styles.userInfo}>
          <View>
            <Text style={styles.name}>{displayName}</Text>
          </View>
        </View>
      </View>

      {/* Messages */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          const isMe = item.sender_account_id === usracc;

          return (
            <View
              style={[
                styles.messageRow,
                isMe ? styles.myMessageContainer : styles.otherMessageContainer,
              ]}
            >
              {!isMe && (
                <View style={styles.smallAvatar}>
                  <Text style={styles.smallAvatarText}>{initial}</Text>
                </View>
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
                    {item.message}
                  </Text>
                </View>
                <Text
                  style={[
                    styles.time,
                    isMe
                      ? { textAlign: "right" }
                      : { textAlign: "left", marginLeft: 4 },
                  ]}
                >
                  {item.created_at}
                </Text>
              </View>
            </View>
          );
        }}
      />

      {/* Input */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={Platform.OS === "ios" ? 20 : 0}
      >
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
            onPress={send}
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
const PRIMARY = "#5661F6";
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
  centerContent: {
    justifyContent: "center",
    alignItems: "center",
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

  listContent: {
    padding: 16,
    paddingBottom: 8,
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
    paddingHorizontal: 14,
    paddingVertical: 10,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderColor: "#EFEFF2",
    marginBottom: 80,
  },

  input: {
    flex: 1,
    backgroundColor: "#F3F3F5",
    borderRadius: 22,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginRight: 10,
    fontSize: 15,
    maxHeight: 100,
  },

  sendButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: PRIMARY,
    justifyContent: "center",
    alignItems: "center",
  },

  sendButtonDisabled: {
    backgroundColor: "#C7C9F5",
  },
});
