import { Text, TouchableOpacity, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {Image} from "expo-image";

export default function Header() {
    return(
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 20, paddingTop: 60,}}>
            <TouchableOpacity>
                <Image
                    source={{uri: "https://reactnative.dev/img/tiny_logo.png",}}
                    style={{width: 48, height: 48, borderRadius: 24,}}
                />
            </TouchableOpacity>

            <TouchableOpacity style={{ position: "relative" }}>
                <Ionicons name="notifications-outline" size={28} color="#5B4B6A"/>
                <View style={{position: "absolute", top: -4, right: -4, width: 18, height: 18, borderRadius: 9, backgroundColor: "#f97316", justifyContent: "center", alignItems: "center",}}>
                    <Text style={{color: "#fff", fontSize: 10, fontWeight: "bold",}}>3</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}
