import { ScrollView, Text, View, FlatList, TouchableOpacity, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const Data = [
  { id: 1, name: "Vui vẻ", icon: "happy-outline", bg: "#EF5DA8" },
  { id: 2, name: "Bình thản", icon: "moon-outline", bg: "#AEAFF7" },
  { id: 3, name: "Hỗn loạn", icon: "sync-outline", bg: "#A0E3E2" },
  { id: 4, name: "Giận dữ", icon: "thunderstorm-outline", bg: "#F09E54" },
  { id: 5, name: "Buồn bã", icon: "sad-outline", bg: "#C3F2A6" },
];
const jounalData = [
  {id: 1, moodID: 1, date:"Hôm nay. 8:30 AM", content: "Hôm nay mình cảm thấy rất vui vì đã hoàn thành được nhiều việc quan trọng"},
  {id: 2, moodID: 4, date:"Hôm qua. 8:25 PM", content: "Bực hết cả mình"},
]
export default function Overviewhealth() {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: "#F5EDED"}} contentContainerStyle={{ paddingBottom: 24 }}>
          <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 20 }}>
            {/* Layout1: Ghi nhật ký */}
              <View style={{ flex: 1, marginTop:30 ,paddingHorizontal: 20, paddingTop: 20, backgroundColor:"#2D2121", borderRadius: 16}}>
                <Text
              style={{
              fontSize: 16,
              fontWeight: "bold",
              color: "#FBDFDF",
              }}>
                Ghi nhật ký tâm trạng hôm nay
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
                <TextInput style={{
                  height: 40,
                  borderColor:"#a02b2b",
                  marginBottom: 25,
                  marginTop: 15,
                  borderWidth: 0.5,
                  padding: 10,
                  }}
                  placeholder="Ghi nhật kí tại đây..."
                  placeholderTextColor="rgba(255, 255, 255, 0.5)">
                  
                  </TextInput>
                <TouchableOpacity style={{ 
                  borderWidth: 1, 
                  height: 38,
                  width: 163,
                  borderRadius: 16, 
                  paddingHorizontal: 16, 
                  alignItems:"center", 
                  backgroundColor:"#D9D9D9",
                  borderColor: "#D9D9D9",
                  marginBottom: 20,
                  justifyContent: "center",
                  alignSelf: "center"}}>
                    <Text style={{ fontSize: 14, fontWeight: "semibold", color: "#445AE6" }}>
                      Lưu tâm trạng
                    </Text>  
                </TouchableOpacity>          
              </View>
            {/* Layout2: Lịch sử ghi nhật ký */}
            <View style={{ marginTop:30}}>
              <View style={{flexDirection: "row", justifyContent:"space-between", alignItems:"center"}}>
                  <Text style={{ fontSize: 16, fontWeight:"bold"}}>Nhật ký gần đây:</Text>
                  <TouchableOpacity><Text style={{fontSize: 11, color:"#3514C6", fontWeight:"regular"}}>
                    Xem tất cả</Text>
                  </TouchableOpacity>
              </View>
                  <View>
                    {jounalData.map((item) => {
                      const mood = Data.find((m) => m.id === item.moodID);
                      return (
                        <TouchableOpacity
                          key={item.id}
                          style={{
                            backgroundColor: "#2D2121",
                            borderRadius: 16,
                            padding: 16,
                            flexDirection: "row",
                            alignItems: "center",
                            marginTop: 16,
                          }}
                        >
                          <View
                            style={{
                              width: 70,
                              height: 70,
                              borderRadius: 35,
                              backgroundColor: mood?.bg,
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <Ionicons name={mood?.icon as any} size={36} />
                          </View>
                          <View style={{ flex: 1, marginLeft: 10 }}>
                            <Text style={{ fontSize: 8, color: "#d9cfcf", fontWeight: "light" }}>{item.date}</Text>
                            <Text style={{ fontSize: 12, color: "#FFFF", fontWeight: "regular" }}>{item.content}</Text>
                          </View>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
            </View>

      </View>
       
        </ScrollView>
    );
}