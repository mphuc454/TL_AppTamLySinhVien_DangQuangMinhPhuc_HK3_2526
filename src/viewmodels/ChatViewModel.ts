import { useCallback, useEffect, useState } from "react";
import { Messages } from "../models/Messages";
import { getAccount } from "../repository/auth/AuthRepository";
import {
  getMessages,
  getOrCreateConversation,
  sendMessage,
} from "../repository/ChatRepository";

export function useChat(userAccountId: number, doctorAccountId: number) {
  const [conversationId, setConversationId] = useState<number | null>(null);
  const [messages, setMessages] = useState<Messages[]>([]);
  const [text, setText] = useState("");

  useEffect(() => {
    if (!userAccountId || !doctorAccountId) return;
    (async () => {
      const convo = await getOrCreateConversation(
        userAccountId,
        doctorAccountId,
      );
      setConversationId(convo.id);
    })();
  }, [userAccountId, doctorAccountId]);

  const load = useCallback(async () => {
    if (!conversationId) return;
    const data = await getMessages(conversationId);
    setMessages(data);
  }, [conversationId]);

  const send = async () => {
    if (!text.trim() || !conversationId) return;

    await sendMessage(conversationId, userAccountId, text);
    setText("");
    await load();
  };

  useEffect(() => {
    load();
  }, [load]);

  return { messages, text, setText, send };
}

export function useGetAccount() {
  const [accountId, setAccountId] = useState<number>(0);
  useEffect(() => {
    async function loadAccount() {
      const acc = await getAccount();
      setAccountId(acc.id);
    }
    loadAccount();
  }, []);
  return accountId;
}
