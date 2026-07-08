import { FilterDoc } from "@/src/filter/FilterView";
import { useDoctorViewModel } from "@/src/viewmodels/DoctorViewModel";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useContext } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ThemeContext } from "../theme/ThemeContext";

export default function AppointmentView() {
  const { colors } = useContext(ThemeContext);
  const { selectedCategory, setSelectedCategory, filterDocs } = FilterDoc();
  const { doc } = useDoctorViewModel();
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: colors.background,
      }}
      contentContainerStyle={{ paddingBottom: 180 }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 30,
          marginLeft: 20,
        }}
      >
        <TouchableOpacity onPress={() => router.push("/(tabs)/Index")}>
          <Ionicons
            style={{ color: colors.text }}
            name="arrow-back"
            size={25}
          ></Ionicons>
        </TouchableOpacity>
        <Text
          style={{
            flex: 1,
            textAlign: "center",
            fontSize: 20,
            fontWeight: "bold",
            color: colors.text,
          }}
        >
          Xem danh sách bác sĩ
        </Text>
      </View>
      <TextInput
        placeholder="Tìm kiếm bác sĩ..."
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
        {doc.map((item) => (
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
            <Text
              style={{ color: selectedCategory === item.id ? "#fff" : "#000" }}
            >
              {item.specialization}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={{ marginTop: 20 }}>
        {filterDocs.length > 0 ? (
          filterDocs.map((d) => (
            <View
              key={d.id}
              style={{
                backgroundColor: "#fff",
                marginHorizontal: 20,
                marginTop: 15,
                borderRadius: 20,
                padding: 15,
                elevation: 4,
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Ionicons name="person" size={40} />
                <View style={{ flex: 1, marginLeft: 10 }}>
                  <Text style={{ fontSize: 16, fontWeight: "600" }}>
                    BS: {d.account_id.username}
                  </Text>
                  <Text style={{ fontWeight: "light", marginTop: 4 }}>
                    {d.experience_years} năm kinh nghiệm
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 12,
                }}
              >
                <View
                  style={{
                    backgroundColor: "#EFEFEF",
                    paddingHorizontal: 10,
                    paddingVertical: 6,
                    borderRadius: 10,
                  }}
                >
                  <Text style={{ fontSize: 12 }}>{d.specialization}</Text>
                </View>
                <TouchableOpacity
                  onPress={() =>
                    router.push({
                      pathname: "/(no tabs)/DetailedAppointment",
                      params: {
                        id: d.id,
                      },
                    })
                  }
                  style={{
                    backgroundColor: "#F3B8B8",
                    paddingHorizontal: 18,
                    paddingVertical: 10,
                    borderRadius: 20,
                  }}
                >
                  <Text style={{ fontWeight: "semibold" }}>Xem</Text>
                </TouchableOpacity>
              </View>
            </View>
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
            Hiện chưa có bác sĩ nào.
          </Text>
        )}
      </View>
    </ScrollView>
  );
}
