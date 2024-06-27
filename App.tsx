import { ThemeProvider } from "styled-components/native";

import { Routes } from "@/routes";
import { theme } from "@/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}
