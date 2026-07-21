import { router, useFocusEffect } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { Alert } from "react-native";
import { Doctor } from "../models/Doctor";
import {
  getAllDoctor,
  getCurrentDoctor,
  getDoctorByID,
  toggleVerify,
  updateDoctor,
} from "../repository/DoctorRepository";
import { getAccount } from "../repository/auth/AuthRepository";

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

// lấy thông tin tk bác sĩ
export function useDoctorCurentViewModel() {
  const [doc, setDoc] = useState<Doctor | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadDoctor = async () => {
      try {
        setLoading(true);
        const data = await getCurrentDoctor();
        setDoc(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    loadDoctor();
  }, []);

  return { doc, loading };
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
      router.back();
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
  const handleDoctor = async (id: number, verify: boolean) => {
    Alert.alert("Thông báo", "Chọn thao tác thay đổi", [
      {
        text: verify ? "Vô hiệu hoá tài khoản" : "Mở tài khoản",
        onPress: () => disable(id, verify),
      },
      { text: "Huỷ", style: "cancel" },
    ]);
  };
  return handleDoctor;
}

// sửa thông tin bác sĩ
export function useEditDoc() {
  const [accountId, setAccountId] = useState<number | null>(null);
  const [specialization, setSpecialization] = useState("");
  const [role, setRole] = useState("");
  const [bio, setBio] = useState("");
  const [experience, setExperience] = useState("");

  const loadDocs = useCallback(async () => {
    try {
      const [doctor, account] = await Promise.all([
        getCurrentDoctor(),
        getAccount(),
      ]);
      if (!account) {
        throw new Error("Không tìm thấy tài khoản");
      }

      setAccountId(account.id);

      if (doctor) {
        setSpecialization(doctor.specialization ?? "");
        setRole(doctor.role_doctor ?? "");
        setBio(doctor.bio ?? "");
        setExperience(String(doctor.experience_years ?? ""));
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Lỗi", "Không thể tải được thông tin");
    }
  }, []);

  useEffect(() => {
    loadDocs();
  }, [loadDocs]);

  const handleUpdate = async () => {
    if (!accountId) {
      Alert.alert("Lỗi", "Không tìm thấy thông tin bác sĩ");
      return;
    }

    if (!specialization) {
      Alert.alert("Thông báo", "Vui lòng nhập chuyên ngành");
      return;
    }

    if (!role) {
      Alert.alert("Thông báo", "Vui lòng nhập vai trò");
      return;
    }

    if (!bio) {
      Alert.alert("Thông báo", "Vui lòng nhập thông tin giới thiệu");
      return;
    }

    if (!experience) {
      Alert.alert("Thông báo", "Vui lòng nhập số năm kinh nghiệm");
      return;
    }

    try {
      await updateDoctor(
        accountId,
        Number(experience),
        specialization,
        bio,
        role,
      );

      Alert.alert("Thông báo", "Cập nhật thông tin thành công");
      router.back();
    } catch (error) {
      console.log(error);
      Alert.alert("Lỗi", "Cập nhật thông tin thất bại");
    }
  };

  return {
    specialization,
    setSpecialization,
    role,
    setRole,
    bio,
    setBio,
    experience,
    setExperience,
    handleUpdate,
  };
}
