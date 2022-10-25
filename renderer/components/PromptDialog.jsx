import React from "react";
import { Dialog, Button, TextField, DialogTitle, DialogContent, DialogActions, DialogContentText } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const PromptDialog = ({ open, title, message, label, value, onChange, onConfirm, onDismiss }) => {
  return (
    <Dialog open={open} onClose={onDismiss} >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label={label}
          type="text"
          fullWidth
          defaultValue={value}
          onChange={onChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onDismiss}>Cancel</Button>

        <Button variant="contained" component="label" onClick={onConfirm}>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const PromptDialogContext = React.createContext({});
const PromptDialogProvider = ({ children }) => {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [dialogConfig, setDialogConfig] = React.useState({});
  const [value, setValue] = React.useState('');

  const openDialog = ({ title, message, value, label, handleValue, actionCallback }) => {
    setDialogOpen(true);
    setDialogConfig({ title, message, label, value, handleValue, actionCallback });
  };

  const resetDialog = () => {
    setDialogOpen(false);
    setDialogConfig({});
  };

  const onConfirm = () => {
    resetDialog();

    dialogConfig.actionCallback({ confirmed: true, value });
  };



  const onDismiss = () => {
    resetDialog();
    dialogConfig.actionCallback({ confirmed: false, value });
  };

  return (
    <PromptDialogContext.Provider value={{ openDialog }}>
      <PromptDialog
        open={dialogOpen}
        title={dialogConfig?.title}
        message={dialogConfig?.message}
        value={dialogConfig?.value}
        label={dialogConfig?.label}
        onChange={(e) => setValue(e.target.value)}
        onConfirm={onConfirm}
        onDismiss={onDismiss}
      />
      {children}
    </PromptDialogContext.Provider>
  );
}

const usePromptDialog = () => {
  const { openDialog } = React.useContext(PromptDialogContext);

  const getPrompt = ({ title, message, label, value }) => {
    return new Promise((resolve, reject) => {
      openDialog({
        title, message, label, value,
        actionCallback: (data) => {
          if (data.confirmed) {
            resolve(data.value);
          } else {
            reject();
          }
        },
      });
    });
  }

  return { getPrompt };

}

export default PromptDialogProvider;
export { PromptDialogProvider, usePromptDialog };

