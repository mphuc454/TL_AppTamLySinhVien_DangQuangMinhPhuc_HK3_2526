import { toggleVerify } from "@/src/repository/admin/DoctorAdminRepository";
import { logout } from "@/src/repository/auth/AuthRepository";
import { getCurrentDoctor } from "@/src/repository/DoctorRepository";
import { router, useFocusEffect } from "expo-router";
import { useCallback } from "react";
import { Alert } from "react-native";

// Vô hiệu hoá  bác sĩ
export function useDisableDoctor() {
  const disableDoctor = async (id: number, verifyCurrent: boolean) => {
    try {
      await toggleVerify(id, !verifyCurrent);
      Alert.alert(
        "Thông báo",
        verifyCurrent ? "Vô hiệu hoá thành công" : "Mở lại thành công",
      );
      router.back();
    } catch (error) {
      Alert.alert("Thông báo", "Lỗi không thể xử lý được!");
      console.log(error);
    }
  };
  return disableDoctor;
}

// Hiện thị cài đặt quản lý bác sĩ
export function useEditDoctor() {
  const disableDoctor = useDisableDoctor();
  const handleDoctor = async (id: number, verify: boolean) => {
    Alert.alert("Thông báo", "Chọn thao tác thay đổi", [
      {
        text: verify ? "Vô hiệu hoá tài khoản" : "Mở tài khoản",
        onPress: () => disableDoctor(id, verify),
      },
      { text: "Huỷ", style: "cancel" },
    ]);
  };
  return handleDoctor;
}

// kiểm tra trạng thái xác thực của bác sĩ
export function useWatchDoctorStatus() {
  useFocusEffect(
    useCallback(() => {
      let cancelled = false;

      const checkVerifyDoctor = async () => {
        try {
          const doctor = await getCurrentDoctor();
          if (cancelled) return;

          if (doctor && doctor.verify === false) {
            await logout();

            Alert.alert(
              "Thông báo",
              "Tài khoản bác sĩ của bạn hiện chưa kích hoạt, vui lòng liên hệ quản trị viên để biết thêm chi tiết.",
              [{ text: "OK", onPress: () => router.replace("/auth/Login") }],
              { cancelable: false },
            );
          }
        } catch (error) {
          console.log(error);
        }
      };

      checkVerifyDoctor();

      return () => {
        cancelled = true;
      };
    }, []),
  );
}
