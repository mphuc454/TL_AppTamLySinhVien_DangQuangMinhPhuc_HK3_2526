import { getAccount } from "@/src/repository/auth/AuthRepository";
import { Slot, useRouter, useSegments } from "expo-router";
import { useEffect, useState } from "react";
import { supabase } from "../src/lib/supabase";
import ThemeProvider from "../src/views/theme/ThemeContext";

export default function RootLayout() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    const checkRole = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        try {
          const account = await getAccount();
          const inAdminGroup = segments[0] === "admin";
          const inDoctorGroup = segments[0] === "doctor";
          const inUserGroup =
            segments[0] === "(tabs)" ||
            segments[0] === "(no tabs)" ||
            segments[0] === "auth";
          console.log(inAdminGroup);
          if (account?.role === 2 && !inAdminGroup) {
            router.replace("/admin/Dashboard");
          } else if (account?.role === 3 && !inDoctorGroup) {
            router.replace("/doctor/MainDoctor");
          } else if (
            account?.role !== 2 &&
            account?.role !== 3 &&
            !inUserGroup
          ) {
            router.replace("/(tabs)/Index");
          }
        } catch (e) {
          console.log(e);
        }
      }
      setLoading(false);
    };
    checkRole();
  }, [segments, router]);

  if (loading) return null;

  return (
    <ThemeProvider>
      <Slot />
    </ThemeProvider>
  );
}
