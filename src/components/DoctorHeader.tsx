import { Ionicons } from "@expo/vector-icons";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity, View } from "react-native";

export default function HeaderDoctor() {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#c76a1e",
        paddingHorizontal: 16,
        paddingVertical: 30,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      }}
    >
      <TouchableOpacity
        style={{
          padding: 6,
        }}
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      >
        <Ionicons name="menu" size={28} />
      </TouchableOpacity>
      <Text
        style={{
          flex: 1,
          textAlign: "center",
          color: "#fff",
          fontSize: 22,
          fontWeight: "bold",
        }}
      >
        GIAO DIỆN BÁC SĨ
      </Text>
    </View>
  );
}
