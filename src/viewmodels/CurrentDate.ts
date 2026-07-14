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
  const minutes = time.getMinutes();
  const currentTime = `${hour}:${minutes}`;
  const currentDate = ` ${String(time.getDate())}/${String(time.getMonth() + 1)}/${time.getFullYear()}`;
  return {
    currentTime,
    currentDate,
  };
}
