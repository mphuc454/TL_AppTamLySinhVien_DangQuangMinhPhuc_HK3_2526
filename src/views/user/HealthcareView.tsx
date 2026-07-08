import { useAddEmotionLog, useEmotionViewModel } from "@/src/viewmodels/EmotionViewModel";
import { useExercisesViewModel } from "@/src/viewmodels/ExercisesViewModel";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
// import { useState } from "react";
import {
  FlatList,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
export default function HealthcareView() {
  const {ex} = useExercisesViewModel();
  const{em} = useEmotionViewModel();
  const{content,setContent,selectedEmotionId, setSelectedEmotionId} = useAddEmotionLog()
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#F5EDED" }}
      contentContainerStyle={{ paddingBottom: 180 }}
    >
      <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
        {/* Layout1: Ghi nhật ký */}
        <View
          style={{
            marginTop: 30,
            paddingHorizontal: 20,
            paddingTop: 20,
            backgroundColor: "#2D2121",
            borderRadius: 16,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              color: "#FBDFDF",
            }}
          >
            Ghi nhật ký tâm trạng hôm nay
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            {em.map((opt) => (
              <TouchableOpacity
                key={opt.id}
                onPress={() => setSelectedEmotionId(opt.id)}
                style={{
                  alignItems: "center",
                  flex: 1,
                }}
              >
                <View
                  style={{
                    width: 59.2,
                    height: 62.06,
                    backgroundColor: opt.color,
                    borderRadius: 16,
                    marginTop: 10,
                    justifyContent: "center",
                    alignItems: "center",
                    borderWidth: selectedEmotionId === opt.id ? 3 : 0
                  }}
                >
                  <Ionicons name={opt.icon as any} size={30} color="#FFFFFF" />
                </View>
                <Text
                  style={{
                    fontSize: 9,
                    marginTop: 8,
                    color: "#828282",
                    textAlign: "center",
                  }}
                >
                  {opt.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <TextInput
          value={content}
          onChangeText={setContent}
            style={{
              height: 40,
              borderColor: "#a02b2b",
              marginBottom: 25,
              marginTop: 15,
              borderWidth: 0.5,
              padding: 10,
            }}
            placeholder="Ghi nhật kí tại đây..."
            placeholderTextColor="rgba(255, 255, 255, 0.5)"
          ></TextInput>
          <TouchableOpacity
            // onPress={() => handleSave(accountId)}
            style={{
              borderWidth: 1,
              height: 38,
              width: 163,
              borderRadius: 16,
              paddingHorizontal: 16,
              alignItems: "center",
              backgroundColor: "#D9D9D9",
              borderColor: "#D9D9D9",
              marginBottom: 20,
              justifyContent: "center",
              alignSelf: "center",
            }}
          >
            <Text
              style={{ fontSize: 14, fontWeight: "semibold", color: "#445AE6" }}
            >
              Lưu tâm trạng
            </Text>
          </TouchableOpacity>
        </View>
        {/* Layout2: Lịch sử ghi nhật ký */}
        <View style={{ marginTop: 30 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Nhật ký gần đây:
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  fontSize: 11,
                  color: "#3514C6",
                  fontWeight: "regular",
                }}
              >
                Xem tất cả
              </Text>
            </TouchableOpacity>
          </View>
          <View>
 
          </View>
        </View>
        {/* Layout3: Âm nhạc thư giãn */}
      <View style={{marginTop: 30}}>
           <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Nghe nhạc thư giãn:
            </Text>
            <TouchableOpacity
            onPress={() => router.push("/(no tabs)/Music")}
            >
              <Text
                style={{
                  fontSize: 11,
                  color: "#3514C6",
                  fontWeight: "regular",
                }}
              >
                Xem tất cả
              </Text>
            </TouchableOpacity>
          </View>
      </View>
        {/* Layout4: Gợi ý bài tập */}
        <View style={{ marginTop: 30 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Bài tập gợi ý cho bạn:
            </Text>
            <TouchableOpacity
              onPress={() => router.push("/(no tabs)/Exercises")}
            >
              <Text
                style={{
                  fontSize: 11,
                  color: "#3514C6",
                  fontWeight: "regular",
                }}
              >
                Xem tất cả
              </Text>
            </TouchableOpacity>
          </View>
          <FlatList
            style={{ marginTop: 20 }}
            data={ex}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 20, gap: 12 }}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  width: 220,
                  backgroundColor: "#2D2121",
                  borderRadius: 18,
                  padding: 16,
                }}
                onPress={() =>
              router.push({
                pathname: "/(no tabs)/DetailedExercises",
                params: {
                  id: item.id,
                },
              })
            }
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
                    BÀI TẬP
                  </Text>
                </View>

                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "700",
                    color: "#FFFFFF",
                    lineHeight: 19,
                    marginBottom: 6,
                  }}
                  numberOfLines={2}
                >
                  {item.title}
                </Text>

                <Text
                  style={{
                    fontSize: 11,
                    fontWeight: "400",
                    color: "#bfa9a9",
                    lineHeight: 15,
                  }}
                  numberOfLines={2}
                >
                  {item.description}
                </Text>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 12,
                    gap: 4,
                  }}
                >
                  <Ionicons name="time-outline" size={11} color="#8a7878" />
                  <Text style={{ fontSize: 10, color: "#8a7878" }}>
                    {item.duration_minutes} phút đọc
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
}
