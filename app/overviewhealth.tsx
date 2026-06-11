import { ScrollView, Text, View, FlatList, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const Data = [
  { id: 1, name: "Vui vẻ", icon: "happy-outline", bg: "#EF5DA8" },
  { id: 2, name: "Bình thản", icon: "moon-outline", bg: "#AEAFF7" },
  { id: 3, name: "Hỗn loạn", icon: "sync-outline", bg: "#A0E3E2" },
  { id: 4, name: "Giận dữ", icon: "thunderstorm-outline", bg: "#F09E54" },
  { id: 5, name: "Buồn bã", icon: "sad-outline", bg: "#C3F2A6" },
];
export default function Overviewhealth() {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: "#F5EDED" }}>
        {/* Layout1: Hỏi tâm trạng ntn */}
        <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 20 }}>
<Text
          style={{
            fontSize: 16,
            fontWeight: "medium",
            marginTop: 20,
            color: "#371B34",
          }}
        >
          Tâm trạng bạn hôm nay thấy thế nào ?
        </Text>
        <FlatList
          data={Data}
          horizontal
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={{ alignItems: "center", marginRight: 25 }}>
              <View
                style={{
                  width: 59.2,
                  height: 62.06,
                  backgroundColor: item.bg,
                  borderRadius: 16,
                  marginTop: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons name={item.icon as any} size={30} color="#FFFFFF" />
              </View>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: "medium",
                  marginTop: 8,
                  color: "#828282",
                  textAlign: "center",
                }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        ></FlatList>
        </View>
        </ScrollView>
    );
}