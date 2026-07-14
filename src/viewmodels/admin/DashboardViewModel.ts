import {
  totalArticle,
  totalArticleByCategory,
} from "@/src/repository/ArticleRepository";
import {
  totalAccount,
  totalAdmin,
  totalDoctor,
  totalGender,
  totalUserByYear,
} from "@/src/repository/auth/ProfileRepository";
import { totalExercise } from "@/src/repository/ExerciseRepository";
import { totalMusic } from "@/src/repository/MusicRepository";
import { useEffect, useState } from "react";

export function useDashboardUserViewModel() {
  const [usrTotal, setUsrTotal] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const loadTotal = async () => {
    try {
      setLoading(true);
      const total = await totalAccount();
      setUsrTotal(total);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    loadTotal();
  }, []);

  return { usrTotal, loading };
}

export function useDashboardDoctorViewModel() {
  const [docTotal, setDocTotal] = useState<number>(0);
  const [loadingDoc, setLoading] = useState(false);
  const loadTotal = async () => {
    try {
      setLoading(true);
      const total = await totalDoctor();
      setDocTotal(total);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    loadTotal();
  }, []);

  return { docTotal, loadingDoc };
}

export function useDashboardArticleViewModel() {
  const [arcTotal, setArcTotal] = useState<number>(0);
  const [loadingArc, setLoading] = useState(false);
  const loadTotal = async () => {
    try {
      setLoading(true);
      const total = await totalArticle();
      setArcTotal(total);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    loadTotal();
  }, []);

  return { arcTotal, loadingArc };
}

export function useDashboardExerciseViewModel() {
  const [exTotal, setExTotal] = useState<number>(0);
  const [loadingEx, setLoading] = useState(false);
  const loadTotal = async () => {
    try {
      setLoading(true);
      const total = await totalExercise();
      setExTotal(total);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    loadTotal();
  }, []);

  return { exTotal, loadingEx };
}

export function useDashboardMusicViewModel() {
  const [musTotal, setMusTotal] = useState<number>(0);
  const [loadingMus, setLoading] = useState(false);
  const loadTotal = async () => {
    try {
      setLoading(true);
      const total = await totalMusic();
      setMusTotal(total);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    loadTotal();
  }, []);

  return { musTotal, loadingMus };
}

export function useDashboardAdminViewModel() {
  const [adTotal, setAdTotal] = useState<number>(0);
  const [loadingAd, setLoading] = useState(false);
  const loadTotal = async () => {
    try {
      setLoading(true);
      const total = await totalAdmin();
      setAdTotal(total);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    loadTotal();
  }, []);

  return { adTotal, loadingAd };
}

export function useGenderAdminViewModel() {
  const [genTotal, setGenTotal] = useState({ male: 0, female: 0 });
  const loadTotal = async () => {
    try {
      const total = await totalGender();
      setGenTotal(total);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadTotal();
  }, []);

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

export function useCategoryArticleAdminViewModel() {
  const [chartData, setPieData] = useState<any[]>([]);
  const loadTotal = async () => {
    try {
      const total = await totalArticleByCategory();
      setPieData(total);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadTotal();
  }, []);
  return { chartData };
}

export function useUserByYearAdminViewModel() {
  const [dataUser, setChartData] = useState<any[]>([]);
  const loadTotal = async () => {
    try {
      const total = await totalUserByYear();
      setChartData(
        total.map((i) => ({
          value: i.total,
          label: i.getYear,
          frontColor: "#09f210",
        })),
      );
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadTotal();
  }, []);
  return { dataUser };
}
