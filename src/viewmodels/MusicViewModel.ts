import { AudioPlayer, useAudioPlayerStatus } from "expo-audio";
import { useFocusEffect } from "expo-router";
import { useCallback, useEffect, useState } from "react";
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
  useFocusEffect(
    useCallback(() => {
      loadMusics();
    }, []),
  );

  return { mus, loading };
}

//2. lấy chi tiết âm nhạc by id
export function useMusicsDetailViewModel(id: number) {
  const [mus_id, setMus_id] = useState<Music | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadDetailMusic = async () => {
      setLoading(true);

      try {
        const data = await geDetailedMusicsbyID(id);
        setMus_id(data);
      } finally {
        setLoading(false);
      }
    };

    loadDetailMusic();
  }, [id]);

  return {
    mus_id,
    loading,
  };
}
export function useMusicPlayer(player: AudioPlayer) {
  const status = useAudioPlayerStatus(player);
  const handlePlayPause = async () => {
    if (!player) return;
    if (status.playing) {
      await player.pause();
    } else {
      await player.play();
    }
  };
  useEffect(() => {
    if (status.didJustFinish) {
      try {
        player.pause();
        player.seekTo(0);
      } catch (e) {
        console.log(e);
      }
    }
  }, [status.didJustFinish, player]);
  useFocusEffect(
    useCallback(() => {
      return () => {
        try {
          player.pause();
          player.seekTo(0);
        } catch (e) {
          console.log(e);
        }
      };
    }, [player]),
  );
  return { handlePlayPause, status };
}

export function useFormatTime() {
  const formatTime = (seconds: number = 0) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };
  return { formatTime };
}
