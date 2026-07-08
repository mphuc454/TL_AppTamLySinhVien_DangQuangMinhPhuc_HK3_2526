import { useEffect, useState } from "react";
import { Doctor } from "../models/Doctor";
import { getAllDoctor, getDoctorByID, getSkillDetailDoctor, getSkillDoctor } from "../repository/DoctorRepository";
import { DoctorSkill } from "../models/DoctorSkill";

// lấy danh sách các bác sĩ
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
// lấy danh sách chuyên môn bác sĩ
export function useDoctorSkillViewModel () {
    const [docskill, setDocSkill] = useState<DoctorSkill[]>([]);
      const [loading, setLoading] = useState(false);

       const loadSkillDoctors = async () => {
              try{
                  setLoading(true)
                  const data = await getSkillDoctor();
                  setDocSkill(data);
              }catch(error){
                  console.log(error)
              }finally{
                  setLoading(false)
              }
          }
          useEffect(() => {
                  loadSkillDoctors();
              }, []);
          
              return {docskill, loading};
}
// lấy chi tiết thông tin bác sĩ theo id
export function useDoctorDetailViewModel(id: number){
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

            return {doc_id, loading};
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