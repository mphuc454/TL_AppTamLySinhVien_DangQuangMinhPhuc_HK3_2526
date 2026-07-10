import { useEffect, useState } from "react";
import { Music } from "../models/Music";
import {
  geDetailedMusicsbyID,
  getAllMusics,
} from "../repository/MusicRepository";

//1. lấy danh sách bài nhạc
export function useMusicViewModel() {
  const [mus, setMus] = useState<Music[]>([]);
  const [loading, setLoading] = useState(false);
  const loadMusics = async () => {
    try {
      setLoading(true);
      const data = await getAllMusics();
      setMus(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    loadMusics();
  }, []);

  return { mus, loading };
}

//2. lấy chi tiết âm nhạc by id
export function useMusicsDetailViewModel(id: number) {
  const [mus_id, setMus_id] = useState<Music | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const load = async () => {
      setLoading(true);

      try {
        const data = await geDetailedMusicsbyID(id);
        setMus_id(data);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [id]);

  return {
    mus_id,
    loading,
  };
}
