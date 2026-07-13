import { Ionicons } from "@expo/vector-icons";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";

export default function HeaderAdmin() {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingTop: 60,
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      >
        <Ionicons name="menu" size={28} />
      </TouchableOpacity>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>GIAO DIỆN ADMIN</Text>
    </View>
  );
}
