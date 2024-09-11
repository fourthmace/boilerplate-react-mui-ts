// Libraries
import { ReactNode, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  CircularProgress,
} from "@mui/material";
// Context
import { AlertConfirmContext } from "@/context/AlertConfirmContext";

export const AlertConfirmProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [onConfirm, setOnConfirm] = useState<() => Promise<void> | void>(
    () => {}
  );
  const [loading, setLoading] = useState(false); // State for loading

  const showAlert = (
    title: string,
    content: string,
    onConfirm?: () => Promise<void> | void // Accept both async and sync functions
  ) => {
    setTitle(title);
    setContent(content);
    setOnConfirm(() => onConfirm || (() => {}));
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = async () => {
    if (onConfirm) {
      setLoading(true); // Set loading state to true
      try {
        await onConfirm(); // Await for async function if it's async
      } catch (error) {
        console.error("Error during confirmation:", error); // Handle error if necessary
      }
      setLoading(false); // Set loading state to false
      setOpen(false);
    }
  };

  return (
    <AlertConfirmContext.Provider value={{ showAlert }}>
      {children}

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} disabled={loading}>
            Disagree
          </Button>
          <Button onClick={handleConfirm} autoFocus disabled={loading}>
            {loading ? <CircularProgress size={24} /> : "Agree"}
          </Button>
        </DialogActions>
      </Dialog>
    </AlertConfirmContext.Provider>
  );
};
