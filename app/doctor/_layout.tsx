import HeaderDoctor from "@/src/components/DoctorHeader";
import { Drawer } from "expo-router/drawer";

export default function AdminLayout() {
  return (
    <Drawer
      screenOptions={{
        header: () => <HeaderDoctor />,
      }}
    >
      <Drawer.Screen
        name="MainDoctor"
        options={{
          title: "Quản lý theo dõi sức khoẻ",
        }}
      />
    </Drawer>
  );
}
