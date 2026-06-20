import { Ionicons } from "@expo/vector-icons";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";


export default function profile(){
    return(
        <ScrollView style={{
            flex: 1,
            backgroundColor: "#F7F7F8",
            paddingHorizontal: 20,
        }} contentContainerStyle={{ paddingBottom: 100 }}>
        <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 30 }}
      >
        <TouchableOpacity onPress={() => router.push("/")}>
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
          Chỉnh sửa thông tin
        </Text>
      </View>
      <View style={{ 
        alignSelf: "center",
        marginVertical: 20,}}>
            <Image source={{ uri : "https://i.pravatar.cc/150?img=5"}} style={{
                 width: 110,
                 height: 110,
                 borderRadius: 55,
                 borderWidth: 2,
                 borderColor: "#5b5bb5",
            }}></Image>
            <TouchableOpacity style={{
                position: "absolute",
                bottom: 5,
                right: 0,
                width: 24,
                height: 24,
                borderRadius: 12,
                backgroundColor: "#5b5bb5",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Ionicons name="camera" size={20} color="#fff" />
            </TouchableOpacity>
        </View>
        <View 
              style={{
                  marginTop: 10,
                }}>
                  <Text 
                    style={{
                    fontSize: 12,
                    color: "#888",
                    marginBottom: 6,}}>Tên</Text>
                  <TextInput
                    style={{backgroundColor: "#FFF",
                    borderWidth: 1,
                    borderColor: "#E5E5E5",
                    borderRadius: 10,
                    height: 52,
                    paddingHorizontal: 12,}}>Alex</TextInput>
              </View>
             <View 
              style={{
                  marginTop: 10,
                }}>
                  <Text 
                    style={{
                    fontSize: 12,
                    color: "#888",
                    marginBottom: 6,}}>Email</Text>
                  <TextInput
                    style={{backgroundColor: "#FFF",
                    borderWidth: 1,
                    borderColor: "#E5E5E5",
                    borderRadius: 10,
                    height: 52,
                    paddingHorizontal: 12,}} value="22130215@st.hcmuaf.edu.vn"></TextInput>
              </View>
               <View 
              style={{
                  marginTop: 10,
                }}>
                  <Text 
                    style={{
                    fontSize: 12,
                    color: "#888",
                    marginBottom: 6,}}>SĐT</Text>
                  <TextInput
                    style={{backgroundColor: "#FFF",
                    borderWidth: 1,
                    borderColor: "#E5E5E5",
                    borderRadius: 10,
                    height: 52,
                    paddingHorizontal: 12,}} value="099888"></TextInput>
              </View>
                <View 
              style={{
                  marginTop: 10,
                }}>
                  <Text 
                    style={{
                    fontSize: 12,
                    color: "#888",
                    marginBottom: 6,}}>Ngày sinh</Text>
                  <TextInput
                    style={{backgroundColor: "#FFF",
                    borderWidth: 1,
                    borderColor: "#E5E5E5",
                    borderRadius: 10,
                    height: 52,
                    paddingHorizontal: 12,}} value="14/09/2004"></TextInput>
              </View> 
              <View style={{ 
                    flexDirection: "row",
                    marginTop: 30,
                    alignItems: "center",}}>
                    <View style={{flex: 1}}>
                    <TouchableOpacity style={{
                        backgroundColor: "#29296d",
                        height: 55,
                        borderRadius: 8,
                        justifyContent: "center",
                        alignItems: "center",
                        width: "80%",
                        alignSelf: "center",
                    }}>
                <Text style={{color: "#fff",fontSize: 12, fontWeight: "semibold",}}>Cập nhật thông tin</Text>
                </TouchableOpacity>
                    </View>
               <View style={{flex: 1}}>
                <TouchableOpacity style={{
                        backgroundColor: "#29296d",
                        height: 55,
                        borderRadius: 8,
                        justifyContent: "center",
                        alignItems: "center",
                        width: "80%",
                        alignSelf: "center",
                    }}>
                <Text style={{color: "#fff",fontSize: 12, fontWeight: "semibold",}}>Lưu thay đổi</Text>
                </TouchableOpacity>
               </View>  
                </View>
                  <TouchableOpacity style={{
                    backgroundColor: "#FBDFDF",
                    borderRadius: 25,
                    flexDirection: "row",
                    alignItems: "center",
                    padding: 20,
                    marginTop: 30,
                }}>
                    <View style={{
                        width: 45,
                        height: 45,
                        borderRadius: 10,
                        backgroundColor: "#D5D5D5",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: 20,
                    }}>
                        <Ionicons name="lock-closed" size={24}></Ionicons>
                    </View>
                    <Text style={{ fontSize: 16, fontWeight: "bold", flex: 1, textAlign: "center",}}>Đổi mật khẩu</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    backgroundColor: "#C0392B",
                    borderRadius: 25,
                    flexDirection: "row",
                    alignItems: "center",
                    padding: 20,
                    marginTop: 30,
                }}>
                    <View style={{
                        width: 45,
                        height: 45,
                        borderRadius: 10,
                        backgroundColor: "#D5D5D5",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: 20,
                    }}>
                        <Ionicons name="log-out" size={24}></Ionicons>
                    </View>
                    <Text style={{ fontSize: 16, fontWeight: "bold", flex: 1, textAlign: "center", color: "#FFF0F0"}}>Đăng xuất</Text>
                </TouchableOpacity>        
        </ScrollView>
    );}