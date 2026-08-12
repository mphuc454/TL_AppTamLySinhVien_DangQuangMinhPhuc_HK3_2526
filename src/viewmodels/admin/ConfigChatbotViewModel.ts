import { useEffect, useState } from "react";

export function useConfigChatbot() {
  const [loading, setLoading] = useState(false);
  const [model, setModel] = useState("");
  const [temperature, setTemperature] = useState(Number);
  const [topP, setTopP] = useState(Number);
  const [maxTokens, setMaxTokens] = useState(Number);

  const getConfigChatbot = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://192.168.1.117:5000/config_chat_get", {
        method: "GET",
      });
      const response = await res.json();
      if (!res.ok) throw new Error(response.error);

      setModel(response.model || "llama-3.1-8b-instant");
      setTemperature(
        response.temperature !== null && response.temperature !== undefined
          ? Number(response.temperature)
          : 0.5,
      );
      setTopP(
        response.top_p !== null && response.top_p !== undefined
          ? Number(response.top_p)
          : 0.9,
      );
      setMaxTokens(response.max_tokens || 1024);
      return response;
    } catch (error) {
      console.log("Error loading config:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateConfigChatbot = async (
    model: string,
    temperature: number,
    top_p: number,
    max_tokens: number,
  ) => {
    try {
      setLoading(true);
      const response = await fetch("http://192.168.1.117:5000/config_chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model,
          temperature,
          top_p,
          max_tokens,
        }),
      });
      const res = await response.json();
      if (!response.ok) throw res.error;

      const config = res.config ?? res;
      setModel(config.model || "llama-3.1-8b-instant");
      setTemperature(
        config.temperature !== null && config.temperature !== undefined
          ? Number(config.temperature)
          : 0.5,
      );
      setTopP(
        config.top_p !== null && config.top_p !== undefined
          ? Number(config.top_p)
          : 0.9,
      );
      setMaxTokens(config.max_tokens || 1024);
      return res;
    } catch (error) {
      console.log("Error updating config:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getConfigChatbot();
  }, []);

  return {
    loading,
    updateConfigChatbot,
    model,
    setModel,
    maxTokens,
    setMaxTokens,
    setTemperature,
    temperature,
    topP,
    setTopP,
    getConfigChatbot,
  };
}
