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
      <Drawer.Screen
        name="Profile"
        options={{
          title: "Hồ sơ bác sĩ",
        }}
      />
      <Drawer.Screen
        name="FormEditDoctor"
        options={{
          drawerLabel: () => null,
          drawerItemStyle: { display: "none" },
        }}
      />
    </Drawer>
  );
}
