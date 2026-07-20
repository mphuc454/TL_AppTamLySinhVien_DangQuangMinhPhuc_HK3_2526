// export function useEmergencyViewModel(doctorId: number) {
//   const [saveEmergency, setSaveEmergency] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [emergencyList, setEmergencyList] = useState<any[]>([]);

import { router, useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { Alert } from "react-native";
import { Emergency_Contacts } from "../models/Emergency_Contacts";
import {
  addEmergency,
  getEmergency,
  removeEmergency,
} from "../repository/EmergencyRepository";

export function useEmergencyViewModel() {
  const [emergencyList, setEmergencyList] = useState<Emergency_Contacts[]>([]);
  const [loading, setLoading] = useState(false);

  const loadEmotionLog = async () => {
    try {
      setLoading(true);
      const data = await getEmergency();
      setEmergencyList(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadEmotionLog();
    }, []),
  );

  return { emergencyList, loading };
}

//thêm gọi khẩn cấp
export function useAddEmergencyViewModel() {
  const [loading, setLoading] = useState(false);

  const saveEmergency = async (doctorId: number) => {
    try {
      setLoading(true);
      const existed = await getEmergency();
      const checked = existed.some((i) => i.doctor_id.id === doctorId);
      if (checked) {
        Alert.alert("Thông báo", "Bạn đã lưu số điện thoại này rồi.");
        return;
      }
      await addEmergency(doctorId);
      Alert.alert(
        "Thông báo",
        "Bạn đã lưu số điện thoại của bác sĩ này thành công",
      );
    } catch (error) {
      Alert.alert("Lỗi", "Không thể thêm bác sĩ.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, saveEmergency };
}

//xoá gọi khẩn cấp
export function useDelEmergencyViewModel() {
  const delEmergency = async (id: number) => {
    Alert.alert("Thông báo", "Bạn có muốn xoá", [
      { text: "Huỷ", style: "cancel" },
      {
        text: "Xoá",
        style: "destructive",
        onPress: async () => {
          try {
            await removeEmergency(id);
            Alert.alert("Thông báo", "Xóa thành công");
            router.back();
          } catch (error) {
            console.log(error);
            Alert.alert("Thông báo", "Lỗi không thể xoá được");
          }
        },
      },
    ]);
  };
  return delEmergency;
}
