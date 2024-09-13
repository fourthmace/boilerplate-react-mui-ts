// LIBRARIES
import { SnackbarProvider } from "notistack";
// routes
import Router from "@/router/index";
import { useNavigate } from "react-router";
// Providers
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "@/theme/theme-provider";
import { LayoutProvider } from "@/providers/LayoutProvider";
import { AlertConfirmProvider } from "./providers/AlertConfirmProvider";
// Components - global
import { ProgressBar } from "./components";
// CSS
import "./App.css";
// Functions - global
import globalRouter from "./utils/functions";

function App() {
  const navigate = useNavigate();
  globalRouter.navigate = navigate;

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
