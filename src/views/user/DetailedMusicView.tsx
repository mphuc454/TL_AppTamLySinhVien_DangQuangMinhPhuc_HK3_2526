import {
  useFormatTime,
  useMusicPlayer,
  useMusicsDetailViewModel,
} from "@/src/viewmodels/MusicViewModel";
import { Ionicons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";
import { useAudioPlayer } from "expo-audio";
import { router, useLocalSearchParams } from "expo-router";
import {
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function DetailedMusicView() {
  const { id } = useLocalSearchParams();
  const { mus_id } = useMusicsDetailViewModel(Number(id));
  const player = useAudioPlayer(
    mus_id?.audio_url
      ? {
          uri: mus_id.audio_url,
        }
      : null,
  );
  const { handlePlayPause, status } = useMusicPlayer(player);
  const { formatTime } = useFormatTime();
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#F7F7F8",
      }}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <ImageBackground
        source={{ uri: mus_id?.image_url }}
        style={{
          flex: 1,
          width: "100%",
        }}
        resizeMode="repeat"
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 50,
            marginLeft: 20,
          }}
        >
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons
              name="arrow-back"
              size={40}
              style={{ color: "#fff" }}
            ></Ionicons>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 30 }}>
          <Text
            style={{
              color: "#2b2727",
              fontWeight: "semibold",
              fontSize: 40,
              textAlign: "center",
            }}
          >
            {mus_id?.title}
          </Text>
        </View>
        <View style={{ marginTop: 30 }}>
          <Text
            style={{
              color: "#fff",
              fontWeight: "light",
              fontSize: 15,
              textAlign: "center",
            }}
          >
            Thời gian: {mus_id?.duration} phút
          </Text>
        </View>
        <View style={{ marginTop: 30 }}>
          <Slider
            minimumValue={0}
            maximumValue={status.duration ?? 0}
            value={status.currentTime ?? 0}
            onSlidingComplete={(v) => {
              player.seekTo(v);
            }}
          />
        </View>
        <View
          style={{
            marginTop: 30,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 16,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontWeight: "light",
              fontSize: 15,
              textAlign: "center",
            }}
          >
            {formatTime(status.currentTime)}
          </Text>
          <TouchableOpacity
            onPress={handlePlayPause}
            style={{
              width: 70,
              height: 70,
              borderRadius: 35,
              backgroundColor: "#EDEDED",
              shadowColor: "#FFFFFF",
              shadowOffset: {
                width: -5,
                height: -5,
              },
              shadowOpacity: 1,
              shadowRadius: 5,
              elevation: 8,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons name={status.playing ? "pause" : "play"} size={30} />
          </TouchableOpacity>
          <Text
            style={{
              color: "#fff",
              fontSize: 14,
            }}
          >
            {formatTime(status.duration)}
          </Text>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}
