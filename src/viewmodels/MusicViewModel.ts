import { useEffect, useState } from "react";
import { Music } from "../models/Music";
import { getAllMusics } from "../repository/MusicRepository";

// lấy danh sách bài tập
export function useMusicViewModel(){
   const [mus, setMus] = useState<Music[]>([]);
   const [loading, setLoading] = useState(false);

    const loadMusics = async () => {
        try{
            setLoading(true)
            const data = await getAllMusics();
            setMus(data);
        }catch(error){
            console.log(error)
        }finally{
            setLoading(false)
        }
    }
    useEffect(() => {
        loadMusics();
    }, []);

    return {mus, loading};
  };