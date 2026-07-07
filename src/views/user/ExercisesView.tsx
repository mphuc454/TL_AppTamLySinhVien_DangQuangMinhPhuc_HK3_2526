import { useCategoryExercisesViewModel } from "@/src/viewmodels/CategoryExercisesViewModel";
import { useExercisesViewModel } from "@/src/viewmodels/ExercisesViewModel";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function ExercisesView() {
const {ex} = useExercisesViewModel();
const {categoryArticles} = useCategoryExercisesViewModel();
const [selectedCategory, setSelectedCategory] = useState<number | null>(null)
const filterExercises = setSelectedCategory == null ? ex : ex.filter((item) => item.category.id === selectedCategory)
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#F5EDED" }}
      contentContainerStyle={{ paddingBottom: 180 }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 130,
          marginLeft: 20,
        }}
      >
        <TouchableOpacity onPress={() => router.push("/(tabs)/Index")}>
          <Ionicons name="arrow-back" size={25}></Ionicons>
        </TouchableOpacity>
        <Text
          style={{
            flex: 1,
            textAlign: "center",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Bài tập cải thiện
        </Text>
      </View>
      <TextInput
        placeholder="Tìm kiếm bài tập..."
        style={{
          marginTop: 30,
          height: 50,
          borderWidth: 1,
          borderColor: "#ccc",
          borderRadius: 15,
          marginHorizontal: 20,
          paddingHorizontal: 15,
          backgroundColor: "#fff",
        }}
      ></TextInput>
       <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 15, paddingHorizontal: 20 }}
      >
        {categoryArticles.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => setSelectedCategory(item.id)}
            style={{
              backgroundColor: "#D9D9D9",
              paddingHorizontal: 12,
              paddingVertical: 8,
              borderRadius: 16,
              marginRight: 10,
            }}
          >
            <Text style={{color: selectedCategory === item.id ? "#fff" : "#000",}}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={{ marginTop: 30, marginHorizontal: 20 }}>
          <Text
          style={{
            fontWeight: "bold",
            fontSize: 16,
            marginBottom: 15,
          }}
        >
          DANH SÁCH BÀI TẬP
        </Text>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {filterExercises.length > 0 ? (
  filterExercises.map((item) => (
    <TouchableOpacity
      key={item.id}
      onPress={() =>
        router.push({
          pathname: "/(no tabs)/DetailedExercises",
          params: {
            id: item.id,
          },
        })
      }
      style={{
        width: "48%",
        backgroundColor: "#2D2121",
        borderRadius: 18,
        padding: 16,
        marginBottom: 16,
      }}
    >
      <View
        style={{
          backgroundColor: "#FBDFDF",
          alignSelf: "flex-start",
          paddingHorizontal: 8,
          paddingVertical: 3,
          borderRadius: 6,
          marginBottom: 10,
        }}
      >
        <Text
          style={{ fontSize: 9, fontWeight: "700", color: "#7a2e2e" }}
        >
          {item.category.name}
        </Text>
      </View>

      <Text
        style={{
          fontSize: 20,
          fontWeight: "700",
          color: "#FFFFFF",
          marginBottom: 6,
        }}
      >
        {item.title}
      </Text>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 8,
        }}
      >
        <Ionicons name="time-outline" size={14} color="#888" />
        <Text
          style={{
            marginLeft: 4,
            color: "#FAF3F3",
          }}
        >
          {item.duration_minutes} phút
        </Text>
      </View>
    </TouchableOpacity>
  ))
) : (
  <Text
    style={{
      width: "100%",
      textAlign: "center",
      marginTop: 20,
      fontSize: 16,
      color: "#666",
    }}
  >
    Hiện chưa có bài tập nào.
  </Text>
)}
        </View>
      </View>
    </ScrollView>
  );
}
