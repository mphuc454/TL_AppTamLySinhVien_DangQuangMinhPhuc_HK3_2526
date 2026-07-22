import {
  changePassword,
  getAccount,
  logout,
} from "@/src/repository/auth/AuthRepository";
import {
  getAccountById,
  modifyAccountbyID,
  uploadDoctorImage,
} from "@/src/repository/auth/ProfileRepository";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { Account } from "../../models/Account";

//1. đăng xuất tài khoản
export function useProfileViewModel() {
  const handleLogout = async () => {
    Alert.alert("Thông báo", "Bạn có muốn đăng xuất tài khoản không ?", [
      { text: "Huỷ", style: "cancel" },
      {
        text: "Có",
        style: "destructive",
        onPress: async () => {
          try {
            const success = await logout();
            if (success) {
              router.replace("/auth/Login");
              Alert.alert("Thông báo", "Đã đăng xuất thành công");
            }
          } catch (error) {
            console.log(error);
            Alert.alert("Thông báo", "Lỗi không thể đăng xuất");
          }
        },
      },
    ]);
  };
  return {
    handleLogout,
  };
}

//2. lấy chi tiết user account by id và cập nhật thông tin
export function useAccountDetailViewModel() {
  const [acc, setAcc] = useState<Account | null>(null);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState<any>(null);
  const [phone, setPhone] = useState<any>(null);
  const [gender, setGender] = useState<any>(null);
  const [usrname, setUsername] = useState<any>(null);
  const [addr, setAddr] = useState<any>(null);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      try {
        const data = await getAccountById();
        setAcc(data);
        setUsername(data.username ?? "Không có thông tin");
        setAddr(data.address ?? "Không có thông tin");
        setGender(data.gender ?? "Không có thông tin");
        setEmail(data.user_id?.email ?? "Không có thông tin");
        setPhone(data.user_id?.phone ?? "Không có thông tin");
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const handleAccount = async () => {
    try {
      setLoading(true);
      const data = await modifyAccountbyID(usrname, phone, addr, email, gender);
      setAcc(data);
      alert("Cập nhật thành công");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    acc,
    usrname,
    setUsername,
    phone,
    setPhone,
    addr,
    setAddr,
    email,
    setEmail,
    gender,
    setGender,
    handleAccount,
    loading,
  };
}

//3. thay đổi mật khẩu tài khoản
export function useChangePassword() {
  const [newPa, setNewPa] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChangePass = async () => {
    if (!newPa) {
      alert("Vui lòng nhập đầy đủ mật khẩu.");
      return;
    }
    if (newPa.length < 6) {
      alert("Mật khẩu phải có ít nhất 6 ký tự");
      return;
    }
    try {
      setLoading(true);
      await changePassword(newPa);
      alert("Đã thay đổi mật khẩu thành công");
      const acc = await getAccount();
      switch (acc.role) {
        case 1:
          router.replace("/(tabs)/Index");
          break;
        case 2:
          router.replace("/admin/Dashboard");
          break;
        case 3:
          router.replace("/doctor/MainDoctor");
          break;
      }
      setNewPa("");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return { newPa, setNewPa, handleChangePass, loading };
}

export function useTakeImage(accountId: number) {
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permission.granted) {
      alert("Bạn cần cấp quyền truy cập thư viện ảnh.");
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });
    if (!result.canceled) {
      const uri = result.assets[0].uri;
      setImage(uri);
      await uploadDoctorImage(uri, accountId);
    }
  };
  return { image, pickImage };
}
