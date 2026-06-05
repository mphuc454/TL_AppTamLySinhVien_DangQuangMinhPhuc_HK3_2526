import { Animated, Text, View } from "react-native";
import './global.css';
import ScrollView = Animated.ScrollView;
export default function Index() {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: "#F5EDED" }} showsVerticalScrollIndicator={false}>
            <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 20 }}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>Chào bạn, User! Bạn cảm thấy thế nào !</Text>
            </View>
        </ScrollView>
    );
}
