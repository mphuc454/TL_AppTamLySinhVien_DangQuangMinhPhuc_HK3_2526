import { router, useFocusEffect } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { Alert } from "react-native";
import { Doctor } from "../models/Doctor";
import { DoctorSkill } from "../models/DoctorSkill";
import {
  deleteDoctor,
  getAllDoctor,
  getDoctorByID,
  getSkillDetailDoctor,
  getSkillDoctor,
  toggleVerify,
} from "../repository/DoctorRepository";

// lấy danh sách các bác sĩ
export function useDoctorViewModel() {
  const [doc, setDoc] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(false);

  const loadDoctors = async () => {
    try {
      setLoading(true);
      const data = await getAllDoctor();
      setDoc(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useFocusEffect(
    useCallback(() => {
      loadDoctors();
    }, []),
  );

  return { doc, loading };
}
// lấy danh sách chuyên môn bác sĩ
export function useDoctorSkillViewModel() {
  const [docskill, setDocSkill] = useState<DoctorSkill[]>([]);
  const [loading, setLoading] = useState(false);

  const loadSkillDoctors = async () => {
    try {
      setLoading(true);
      const data = await getSkillDoctor();
      setDocSkill(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    loadSkillDoctors();
  }, []);

  return { docskill, loading };
}
// lấy chi tiết thông tin bác sĩ theo id
export function useDoctorDetailViewModel(id: number) {
  const [doc_id, setDoc] = useState<Doctor | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadDoctorDetail = async () => {
      try {
        setLoading(true);
        const data = await getDoctorByID(id);
        setDoc(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    loadDoctorDetail();
  }, [id]);

  return { doc_id, loading };
}

// lấy chi tiết kỹ năng bác sĩ theo id
export function useSkillDetailViewModel(doctorId: number) {
  const [skill_id, setSkill] = useState<DoctorSkill[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const data = await getSkillDetailDoctor(doctorId);
        setSkill(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [doctorId]);

  return { skill_id, loading };
}

// Vô hiệu hoá  bác sĩ
export function useDisableDoctor() {
  const disable = async (id: number, verifyCurrent: boolean) => {
    try {
      await toggleVerify(id, !verifyCurrent);
      Alert.alert(
        "Thông báo",
        verifyCurrent ? "Vô hiệu hoá thành công" : "Mở lại thành công",
      );
    } catch (error) {
      Alert.alert("Thông báo", "Lỗi không thể xử lý được!");
      console.log(error);
    }
  };
  return disable;
}

// Hiện thị cài đặt quản lý bác sĩ
export function useEditDoctor() {
  const disable = useDisableDoctor();
  // const del = useDeleteDoctor();
  const handleDoctor = async (id: number, verify: boolean) => {
    Alert.alert("Thông báo", "Chọn thao tác thay đổi", [
      {
        text: verify ? "Vô hiệu hoá tài khoản" : "Mở tài khoản",
        onPress: () => disable(id, verify),
      },
      // { text: "Xoá tài khoản", onPress: () => del(id) },
      { text: "Huỷ", style: "cancel" },
    ]);
  };
  return handleDoctor;
}

// xoá bác sĩ
export function useDeleteDoctor() {
  const handleDeleteDoc = (id: number) => {
    Alert.alert("Thông báo", "Bạn có muốn chắc xoá không ?", [
      { text: "Huỷ", style: "cancel" },
      {
        text: "Xoá bác sĩ",
        style: "destructive",
        onPress: async () => {
          try {
            await deleteDoctor(id);
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
  return handleDeleteDoc;
}
