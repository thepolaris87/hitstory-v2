import '@mui/material';

type STATUS = { danger?: string };

declare module '@mui/material' {
    interface ThemeOptions {
        status?: STATUS;
    }
}
