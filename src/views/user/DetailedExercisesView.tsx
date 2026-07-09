import { useExercisesDetailViewModel } from "@/src/viewmodels/ExercisesViewModel";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useContext } from "react";
import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ThemeContext } from "../theme/ThemeContext";

export default function DetailedExercisesView() {
    const { colors } = useContext(ThemeContext);
  
  const {id} = useLocalSearchParams();
  const {ex} = useExercisesDetailViewModel(Number(id));
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: colors.background,
        marginTop: 30,
        paddingHorizontal: 20,
      }}
      contentContainerStyle={{ paddingBottom: 120 }}
    >
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 30 }}
      >
        <TouchableOpacity onPress={() => router.push("/(tabs)/Index")}>
          <Ionicons style={{ color: colors.text }} name="arrow-back" size={25}></Ionicons>
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: 220,
          backgroundColor: "#D88D8D",
          marginTop: 20,
          marginHorizontal: 8,
        }}
      ></View>
      <View
        style={{
          alignSelf: "flex-start",
          backgroundColor: "#D9D9D9",
          paddingHorizontal: 15,
          paddingVertical: 6,
          borderRadius: 20,
          marginTop: 15,
        }}
      >
        <Text
          style={{
            fontWeight: "semibold",
            color: colors.text,
          }}
        >
          BÀI TẬP
        </Text>
      </View>
      <Text
        style={{
          fontSize: 22,
          fontWeight: "bold",
          lineHeight: 28,
          marginTop: 15,
          marginHorizontal: 12,
          color: colors.text,
        }}
      >
        {ex?.title}
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 12,
          marginHorizontal: 12,
        }}
      >
        <Text style={{color: colors.text}}>Số vòng: </Text>
        <Text style={{ color: colors.text }}>{ex?.number_of_rounds}</Text>
        <Text style={{ marginLeft: 5, fontWeight: "light", color: colors.text }}>lượt</Text>
        <Ionicons
          name="time-outline"
          size={15}
          style={{ marginLeft: 15, color: colors.text }}
        ></Ionicons>
        <Text style={{ marginLeft: 4, color: colors.text }}>{ex?.duration_minutes} phút</Text>
        <Text style={{ marginLeft: 20, color: colors.text }}>Mức độ: </Text>
        <Text style={{ marginLeft: 3, color: colors.text }}>{ex?.difficulty}</Text>
      </View>
      <Text
        style={{
          marginTop: 25,
          marginHorizontal: 12,
          fontSize: 16,
          lineHeight: 30,
          color: colors.text,
          textAlign: "justify",
          fontWeight: "semibold",
        }}
      >
       {ex?.description}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
          marginTop: 30,
          color: colors.text
        }}
      >
        Các bước thực hiện:
      </Text>
      <FlatList
        style={{ marginTop: 20 }}
        data={ex?.exercises_steps ?? []}
        keyExtractor={(item) => item.id.toString()}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              marginBottom: 24,
            }}
          >
            <View
              style={{
                width: 34,
                height: 34,
                borderRadius: 17,
                backgroundColor: "#c5871c",
                justifyContent: "center",
                alignItems: "center",
                marginRight: 14,
                marginTop: 2,
              }}
            >
              <Text
                style={{ fontSize: 15, fontWeight: "700", color: "#efece7" }}
              >
                {item.id}
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: colors.text
                }}
              >
                {item.title_step}
              </Text>
              <Text style={{ fontSize: 15, color: "#888", lineHeight: 22 }}>
                {item.des_step}
              </Text>
              <View
                style={{
                  marginTop: 10,
                  alignSelf: "flex-start",
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "#f6ca5b",
                  borderRadius: 20,
                  paddingHorizontal: 12,
                  paddingVertical: 5,
                }}
              >
                <Text
                  style={{
                    marginLeft: 4,
                    fontWeight: "light",
                    fontSize: 13,
                  }}
                >
                  {item.time_step} giây
                </Text>
              </View>
            </View>
          </View>
        )}
      ></FlatList>
    </ScrollView>
  );
}
