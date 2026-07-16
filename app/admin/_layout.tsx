import HeaderAdmin from "@/src/components/AdminHeader";
import { Drawer } from "expo-router/drawer";

export default function AdminLayout() {
  return (
    <Drawer
      screenOptions={{
        header: () => <HeaderAdmin />,
      }}
    >
      <Drawer.Screen
        name="Dashboard"
        options={{
          title: "Thống Kê",
        }}
      />
      <Drawer.Screen
        name="Profile"
        options={{
          title: "Hồ sơ Admin",
        }}
      />
      <Drawer.Screen
        name="DoctorManagement"
        options={{
          title: "Quản Lý Bác sĩ",
        }}
      />
      <Drawer.Screen
        name="ArticleManagement"
        options={{
          title: "Quản Lý Bài Viết",
        }}
      />
      <Drawer.Screen
        name="ChatbotManagement"
        options={{
          title: "Quản Lý Chatbot",
        }}
      />
      <Drawer.Screen
        name="CRUD/FormAddArticle"
        options={{
          drawerLabel: () => null,
          drawerItemStyle: { display: "none" },
        }}
      />
      <Drawer.Screen
        name="CRUD/FormEditArticle"
        options={{
          drawerLabel: () => null,
          drawerItemStyle: { display: "none" },
        }}
      />
      <Drawer.Screen
        name="CRUD/PermissionDoctor"
        options={{
          drawerLabel: () => null,
          drawerItemStyle: { display: "none" },
        }}
      />
    </Drawer>
  );
}
