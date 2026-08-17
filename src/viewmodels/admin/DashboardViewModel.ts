import {
  getTotalAccount,
  getTotalAdmin,
  getTotalArticle,
  getTotalArticleByCategory,
  getTotalDoctor,
  getTotalExercise,
  getTotalGender,
  getTotalMusic,
} from "@/src/repository/admin/DashboardRepository";
import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";

// thống kê tổng quan user
export function useDashboardUserViewModel() {
  const [usrTotal, setUsrTotal] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const loadTotalUser = async () => {
    try {
      setLoading(true);
      const total = await getTotalAccount();
      setUsrTotal(total);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useFocusEffect(
    useCallback(() => {
      loadTotalUser();
    }, []),
  );

  return { usrTotal, loading };
}

// thống kê tổng quan bác sĩ
export function useDashboardDoctorViewModel() {
  const [docTotal, setDocTotal] = useState<number>(0);
  const [loadingDoc, setLoading] = useState(false);
  const loadTotalDoctor = async () => {
    try {
      setLoading(true);
      const total = await getTotalDoctor();
      setDocTotal(total);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useFocusEffect(
    useCallback(() => {
      loadTotalDoctor();
    }, []),
  );

  return { docTotal, loadingDoc };
}

// thống kê tổng quan bài viết
export function useDashboardArticleViewModel() {
  const [arcTotal, setArcTotal] = useState<number>(0);
  const [loadingArc, setLoading] = useState(false);
  const loadTotalArticle = async () => {
    try {
      setLoading(true);
      const total = await getTotalArticle();
      setArcTotal(total);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useFocusEffect(
    useCallback(() => {
      loadTotalArticle();
    }, []),
  );

  return { arcTotal, loadingArc };
}

// thống kê tổng quan bài tập
export function useDashboardExerciseViewModel() {
  const [exTotal, setExTotal] = useState<number>(0);
  const [loadingEx, setLoading] = useState(false);
  const loadTotalExercise = async () => {
    try {
      setLoading(true);
      const total = await getTotalExercise();
      setExTotal(total);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useFocusEffect(
    useCallback(() => {
      loadTotalExercise();
    }, []),
  );

  return { exTotal, loadingEx };
}

// thống kê tổng quan âm nhạc
export function useDashboardMusicViewModel() {
  const [musTotal, setMusTotal] = useState<number>(0);
  const [loadingMus, setLoading] = useState(false);
  const loadTotalMusic = async () => {
    try {
      setLoading(true);
      const total = await getTotalMusic();
      setMusTotal(total);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useFocusEffect(
    useCallback(() => {
      loadTotalMusic();
    }, []),
  );

  return { musTotal, loadingMus };
}

// thống kê tổng quan admin
export function useDashboardAdminViewModel() {
  const [adTotal, setAdTotal] = useState<number>(0);
  const [loadingAd, setLoading] = useState(false);
  const loadTotalAdmin = async () => {
    try {
      setLoading(true);
      const total = await getTotalAdmin();
      setAdTotal(total);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useFocusEffect(
    useCallback(() => {
      loadTotalAdmin();
    }, []),
  );

  return { adTotal, loadingAd };
}

// thống kê giới tính
export function useGenderAdminViewModel() {
  const [genTotal, setGenTotal] = useState({ male: 0, female: 0 });
  const loadTotalGender = async () => {
    try {
      const total = await getTotalGender();
      setGenTotal(total);
    } catch (error) {
      console.log(error);
    }
  };
  useFocusEffect(
    useCallback(() => {
      loadTotalGender();
    }, []),
  );

  const pieData = [
    {
      value: genTotal.male,
      color: "#4F46E5",
      text: "Nam",
    },
    {
      value: genTotal.female,
      color: "#EC4899",
      text: "Nữ",
    },
  ];

  return { pieData };
}

// thống kê thể loại bài viết
export function useCategoryArticleAdminViewModel() {
  const [chartData, setPieData] = useState<any[]>([]);
  const loadTotalCategoryArticle = async () => {
    try {
      const total = await getTotalArticleByCategory();
      setPieData(total);
    } catch (error) {
      console.log(error);
    }
  };
  useFocusEffect(
    useCallback(() => {
      loadTotalCategoryArticle();
    }, []),
  );
  return { chartData };
}
