// LIBRARIES
import { SnackbarProvider } from "notistack";
// routes
import Router from "@/router/index";
// Providers
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "@/theme/theme-provider";
import { LayoutProvider } from "@/providers/LayoutProvider";
import { AlertConfirmProvider } from "./providers/AlertConfirmProvider";
// Components - global
import { ProgressBar } from "./components";
// CSS
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <HelmetProvider>
        <LayoutProvider>
          <AlertConfirmProvider>
            <SnackbarProvider>
              <ProgressBar />
              <Router />
            </SnackbarProvider>
          </AlertConfirmProvider>
        </LayoutProvider>
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;
