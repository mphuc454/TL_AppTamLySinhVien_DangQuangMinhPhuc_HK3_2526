import { Slot } from "expo-router";
import ThemeProvider from "../src/views/theme/ThemeContext";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Slot />
    </ThemeProvider>
  );
}
