// LIBRARIES
import { SnackbarProvider } from "notistack";
// routes
import Router from "@/router/index";
// Providers
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "@/theme/theme-provider";
import { LayoutProvider } from "@/providers/LayoutProvider";
// CSS
import "./App.css";
import { AlertConfirmProvider } from "./providers/AlertConfirmProvider";

function App() {
  return (
    <ThemeProvider>
      <HelmetProvider>
        <LayoutProvider>
          <AlertConfirmProvider>
            <SnackbarProvider>
              <Router />
            </SnackbarProvider>
          </AlertConfirmProvider>
        </LayoutProvider>
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;
