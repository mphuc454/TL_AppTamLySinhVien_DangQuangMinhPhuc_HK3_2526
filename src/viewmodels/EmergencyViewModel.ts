// export function useEmergencyViewModel(doctorId: number) {
//   const [saveEmergency, setSaveEmergency] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [emergencyList, setEmergencyList] = useState<any[]>([]);

import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { Emergency_Contacts } from "../models/Emergency_Contacts";
import { getEmergency } from "../repository/EmergencyRepository";

//   const loadData = useCallback(async () => {
//     try {
//       setLoading(true);
//       const data = await getEmergency.getAllEmergency();
//       setEmergencyList(data ?? null);
//       const existed = data.some((i) => i.doctor[0].id === doctorId);
//       setSaveEmergency(existed);
//     } catch (e) {
//       console.log(e);
//     } finally {
//       setLoading(false);
//     }
//   }, [doctorId]);
//   const add = async () => {
//     try {
//       setLoading(true);
//       await getEmergency.addEmergency(doctorId);
//       await loadData();
//     } catch (e) {
//       console.log(e);
//     } finally {
//       setLoading(false);
//     }
//   };
//   const del = async () => {
//     try {
//       setLoading(true);
//       await getEmergency.deleteEmergency(doctorId);
//       await loadData();
//     } catch (e) {
//       console.log(e);
//     } finally {
//       setLoading(false);
//     }
//   };
//   const Toggle = async (value: boolean) => {
//     if (value) {
//       await add();
//     } else {
//       await del();
//     }
//   };
//   useEffect(() => {
//     loadData();
//   }, [loadData]);
//   return {
//     loading,
//     saveEmergency,
//     emergencyList,
//     Toggle,
//     loadData,
//   };
// }
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

export function useAddEmergencyViewModel() {}
