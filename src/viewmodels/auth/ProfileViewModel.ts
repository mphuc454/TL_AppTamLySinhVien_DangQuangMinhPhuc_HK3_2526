import { changePassword, logout } from "@/src/repository/auth/AuthRepository";
import {
  getAccountById,
  modifyAccountbyID,
} from "@/src/repository/auth/ProfileRepository";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Account } from "../../models/Account";

//1. đăng xuất tài khoản
export function useProfileViewModel() {
  const handleLogout = async () => {
    const success = await logout();

    if (success) {
      router.replace("/auth/Login");
    }
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
      router.replace("/(tabs)/Index");
      setNewPa("");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return { newPa, setNewPa, handleChangePass, loading };
}
