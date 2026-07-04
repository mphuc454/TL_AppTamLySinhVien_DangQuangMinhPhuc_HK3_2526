import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, ReactNode, useEffect, useState } from "react";

export type Theme = "light" | "dark";

export type ThemeColors = {
  background: string;
  text: string;
  textSecondary: string;
  cardBackground: string;
  borderColor: string;
};

export const lightColors: ThemeColors = {
  background: "#F7F7F8",
  text: "#000000",
  textSecondary: "#707070",
  cardBackground: "#FFFFFF",
  borderColor: "#E0E0E0",
};

export const darkColors: ThemeColors = {
  background: "#1A1A1A",
  text: "#FFFFFF",
  textSecondary: "#B0B0B0",
  cardBackground: "#2D2D2D",
  borderColor: "#444444",
};

export type ThemeContextType = {
  currentTheme: Theme;
  toggleTheme: (newTheme: Theme) => void;
  colors: ThemeColors;
};

export const ThemeContext = createContext<ThemeContextType>({
  currentTheme: "light",
  toggleTheme: () => {},
  colors: lightColors,
});

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadTheme();
  }, []);

  const loadTheme = async () => {
    try {
      const savedTheme = await AsyncStorage.getItem("app-theme");
      if (savedTheme) {
        setTheme(savedTheme as Theme);
      }
    } catch (error) {
      console.log("Error loading theme:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleTheme = async (newTheme: Theme) => {
    try {
      setTheme(newTheme);
      await AsyncStorage.setItem("app-theme", newTheme);
    } catch (error) {
      console.log("Error saving theme:", error);
    }
  };

  const colors = theme === "dark" ? darkColors : lightColors;

  if (isLoading) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ currentTheme: theme, toggleTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider; 
   
