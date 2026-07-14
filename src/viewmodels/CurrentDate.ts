import { useEffect, useState } from "react";

export function useCurentCalender() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  const hour = time.getHours();
  const minutes = String(time.getMinutes()).padStart(2, "0");
  const currentTime = `${hour}:${minutes}`;
  const currentDate = ` ${String(time.getDate()).padStart(2, "0")}/${String(time.getMonth() + 1).padStart(2, "0")}/${time.getFullYear()}`;
  return {
    currentTime,
    currentDate,
  };
}
