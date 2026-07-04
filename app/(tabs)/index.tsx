import ThemeProvider from "@/src/views/theme/ThemeContext";
import IndexView from "@/src/views/user/HomeView";
export default function Index() {
  return ( 
    <ThemeProvider>
      <IndexView></IndexView>
    </ThemeProvider>
  
  );
}