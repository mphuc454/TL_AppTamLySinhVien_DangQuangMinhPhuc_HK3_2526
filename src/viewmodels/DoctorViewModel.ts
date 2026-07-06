import { useEffect, useState } from "react";
import { Doctor } from "../models/Doctor";
import { getAllDoctor } from "../repository/DoctorRepository";

// lấy danh sách bác sĩ
export function useDoctorViewModel () {
    const [doc, setDoc] = useState<Doctor[]>([]);
      const [loading, setLoading] = useState(false);

       const loadDoctors = async () => {
              try{
                  setLoading(true)
                  const data = await getAllDoctor();
                  setDoc(data);
              }catch(error){
                  console.log(error)
              }finally{
                  setLoading(false)
              }
          }
          useEffect(() => {
                  loadDoctors();
              }, []);
          
              return {doc, loading};
}