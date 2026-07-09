import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { useDoctorDetailViewModel } from "@/src/viewmodels/DoctorViewModel";

const messages = [
  {
    id: "1",
    sender: "doctor",
    text: "Chào em! Dạo này em cảm thấy thế nào?",
  },
  {
    id: "2",
    sender: "me",
    text: "Em khá căng thẳng vì sắp thi.",
  },
  {
    id: "3",
    sender: "doctor",
    text: "Đừng quá lo nhé. Hãy thử hít thở sâu và nghỉ ngơi một chút.",
  },
];

export default function ChatScreen() {
  const [text, setText] = useState("");
  const {id} = useLocalSearchParams();
  const {doc_id} = useDoctorDetailViewModel(Number(id));

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="chevron-back" size={24} color="#333" />
        </TouchableOpacity>

        <View style={styles.userInfo}>
          <View style={styles.avatar}>
            <Text style={{ color: "white", fontWeight: "bold" }}>B</Text>
          </View>

          <View>
            <Text style={styles.name}>{doc_id?.account_id.username}</Text>
          </View>
        </View>
      </View>

      {/* Messages */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          padding: 15,
        }}
        renderItem={({ item }) => {
          const isMe = item.sender === "me";

          return (
            <View
              style={[
                styles.messageContainer,
                isMe
                  ? styles.myMessageContainer
                  : styles.otherMessageContainer,
              ]}
            >
              {!isMe && (
                <View style={styles.smallAvatar}>
                  <Text style={{ color: "white", fontSize: 10 }}>B</Text>
                </View>
              )}

              <View
                style={[
                  styles.bubble,
                  isMe ? styles.myBubble : styles.otherBubble,
                ]}
              >
                <Text
                  style={[
                    styles.messageText,
                    isMe && { color: "white" },
                  ]}
                >
                  {item.text}
                </Text>
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
          style={styles.input}
        />

        <TouchableOpacity style={styles.sendButton}>
          <Ionicons
            name="send"
            size={22}
            color="white"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F6FB",
    marginTop: 15,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: "white",
    elevation: 2,
  },

  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },

  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#F49C8F",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  name: {
    fontSize: 16,
    fontWeight: "700",
    color: "#222",
  },

  messageContainer: {
    marginBottom: 18,
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
    backgroundColor: "#F49C8F",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },

  bubble: {
    maxWidth: "78%",
    borderRadius: 18,
    padding: 12,
  },

  myBubble: {
    backgroundColor: "#5661F6",
    alignSelf: "flex-end",
  },

  otherBubble: {
    backgroundColor: "white",
  },

  messageText: {
    fontSize: 15,
    color: "#333",
    lineHeight: 22,
  },

  time: {
    fontSize: 11,
    color: "#999",
    alignSelf: "flex-end",
    marginTop: 6,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderColor: "#eee",
    marginBottom: 60,
  },

  input: {
    flex: 1,
    backgroundColor: "#F3F3F5",
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginHorizontal: 10,
    fontSize: 15,
  },

  sendButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#5661F6",
    justifyContent: "center",
    alignItems: "center",
  },
});