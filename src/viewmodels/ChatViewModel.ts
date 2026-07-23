import { useCallback, useEffect, useState } from "react";
import { Messages } from "../models/Messages";
import { getAccount } from "../repository/auth/AuthRepository";
import { getMessage, sendMessage } from "../service/ChatService";

export function useChat(conversationId: number, senderID: number) {
  const [messages, setMessages] = useState<Messages[]>([]);
  const [text, setText] = useState("");
  const load = useCallback(async () => {
    const data = await getMessage(conversationId);
    setMessages(data);
  }, [conversationId]);
  const send = async () => {
    if (!text.trim()) return;
    await sendMessage(conversationId, senderID, text);
    setText("");
    load();
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
