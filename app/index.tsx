import { Ionicons } from "@expo/vector-icons";
import { Animated, FlatList, Text, TouchableOpacity, View, Button } from "react-native";
import "./global.css";
import ScrollView = Animated.ScrollView;

const Data = [
  { id: 1, name: "Vui vẻ", icon: "happy-outline", bg: "#EF5DA8" },
  { id: 2, name: "Bình thản", icon: "moon-outline", bg: "#AEAFF7" },
  { id: 3, name: "Hỗn loạn", icon: "sync-outline", bg: "#A0E3E2" },
  { id: 4, name: "Giận dữ", icon: "thunderstorm-outline", bg: "#F09E54" },
  { id: 5, name: "Buồn bã", icon: "sad-outline", bg: "#C3F2A6" },
];
const Data2 = [
  {id: 1, name: "Nhật ký", icon:"book", bg:"#F9EED8"},
  {id: 2, name: "Đặt lịch hẹn", icon:"calendar", bg:"#F9EED8"},
  {id: 3, name: "Kiểm tra tâm trạng", icon:"heart", bg:"#F9EED8"},
  {id: 4, name: "Bài khảo sát", icon:"checkbox", bg:"#F9EED8"}
]
export default function Index() {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#F5EDED" }}
      showsVerticalScrollIndicator={false}
    >
      {/* Layout1: Lời chào mở đầu */}
      <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          Chào bạn, User! Bạn cảm thấy thế nào !
        </Text>
        {/* Layout2: Hỏi tâm trạng ntn */}
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
        {/* Layout3: Chatbot AI */}
        <View style={{ marginTop: 30, backgroundColor: "#604FD9", flexDirection: "row", alignItems: "center", borderRadius: 30, padding: 10, width: '100%' }}>
          {/* cột 1: icon */}
          <View style={{ flex: 1, alignItems: "center" }}>
            <Ionicons name="chatbubble" size={52} color="#FFF0F0" />
          </View>
          {/* cột 2: text */}
          <View style={{ flex: 3 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "#FFF0F0" }}>
              Trò chuyện với AI
            </Text>
            <Text style={{ fontSize: 12, fontWeight: "medium", color: "#FFF0F0", padding: 10 }}>
              Lắng nghe & hỗ trợ 24/7
            </Text>
          </View>
          {/* cột 3: nút */}
          <View style={{ flex: 2 }}>
            <Button title="Bắt đầu" onPress={() => console.log('Button with adjusted color pressed')}></Button>
          </View>
        </View>
        {/* Layout4: Các dịch vụ */}
        <FlatList data={Data2}
                  numColumns={2}
                  columnWrapperStyle={{justifyContent: "space-between", marginBottom: 20}}
                  keyExtractor={(item) => item.id.toString()}
                  renderItem={({item}) =>(
                    <TouchableOpacity style={{ alignItems: "center", marginRight: 2}}>
                      <View
                        style={{
                          width: 165.02,
                          height: 62,
                          backgroundColor: item.bg,
                          borderRadius: 16,
                          marginTop: 20,
                          flexDirection:"row",
                          alignItems: "center",
                          paddingHorizontal: 10,
                          borderWidth: 1, 
                          borderColor: "#D8AD93"
                        }}
                      >
                        <Ionicons name={item.icon as any} size={25} color="#D8AD93" />
                        <Text
                        style={{fontSize: 10, fontWeight: "bold", marginLeft: 10, color: "#573926", flex: 1}}
                      >
                        {item.name}
                      </Text>
                      </View>
                    </TouchableOpacity>
                  )}
        >
        </FlatList>
        {/* Layout5: Các bài tập */}
      </View>
    </ScrollView>
  );
}
