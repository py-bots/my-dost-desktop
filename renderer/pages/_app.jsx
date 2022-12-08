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
