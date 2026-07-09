import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";



export function useCheckLogin() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const check = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      setIsLogin(!!session);
    };

    check();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsLogin(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return { isLogin };
}