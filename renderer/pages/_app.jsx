import { useEffect } from 'react';
import { clarity } from 'react-microsoft-clarity';
import React from 'react';
import '../styles/globals.css';
import { ConfirmationDialogProvider } from "../components/ConfirmationDialog";
import { PromptDialogProvider } from "../components/PromptDialog";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    clarity.init('ev2ivwtqeh');
  }, []);
  return (
    <ThemeProvider theme={darkTheme}>

      <PromptDialogProvider>

        <ConfirmationDialogProvider>

          <Component {...pageProps} />
        </ConfirmationDialogProvider>
      </PromptDialogProvider>
    </ThemeProvider>
  );
}

export default MyApp;
