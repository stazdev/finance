// import createContext and useState
import { createContext, useState, useEffect } from "react";
// Initiate context
import AsyncStorage from "@react-native-async-storage/async-storage";
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  // Manage theme state
  const [theme, setTheme] = useState(AsyncStorage.getItem("light") === "true");

  useEffect(() => {
    AsyncStorage.setItem("light", theme);
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
