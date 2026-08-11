import { useState } from "react";

export function useConfigChatbot() {
  const [loading, setLoading] = useState(false);
  const [model, setModel] = useState("llama-3.1-8b-instant");
  const [temperature, setTemperature] = useState(0.5);
  const [topP, setTopP] = useState(0.9);
  const [maxTokens, setMaxTokens] = useState(1024);
  const updateConfig = async (
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
      if (!response.ok) {
        throw res.error;
      }
      return res;
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };
  return {
    loading,
    updateConfig,
    model,
    setModel,
    maxTokens,
    setMaxTokens,
    setTemperature,
    temperature,
    topP,
    setTopP,
  };
}
