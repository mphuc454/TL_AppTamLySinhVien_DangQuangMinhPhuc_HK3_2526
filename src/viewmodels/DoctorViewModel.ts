import { router, useFocusEffect } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { Alert } from "react-native";
import { Doctor } from "../models/Doctor";
import { DoctorSkill } from "../models/DoctorSkill";
import {
  getAllDoctor,
  getDoctorByID,
  getSkillDetailDoctor,
  getSkillDoctor,
  toggleVerify,
  updateDoctor,
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
export function useEditDoc(id: number) {
  const [specialization, setSpecialization] = useState("");
  const [role, setRole] = useState("");
  const [bio, setBio] = useState("");
  const [experience, setExperience] = useState("");

  const loadDocs = useCallback(async () => {
    try {
      const data = await getDoctorByID(id);
      setSpecialization(data.specialization);
      setRole(data.role_doctor);
      setBio(data.bio);
      setExperience(String(data.experience_years));
    } catch (error) {
      console.log(error);
      Alert.alert("Lỗi", "Không thể tải được thông tin");
    }
  }, [id]);
  useEffect(() => {
    loadDocs();
  }, [loadDocs]);
  const handleUpdate = async () => {
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
    console.log("id =", id);
    console.log("experience =", experience);
    console.log("Number(experience) =", Number(experience));
    try {
      await updateDoctor(id, Number(experience), specialization, bio, role);
      Alert.alert("Thông báo", "Cập nhật thông tin thành công");
      router.back();
    } catch (error) {
      console.log("Update Error:", error);
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
