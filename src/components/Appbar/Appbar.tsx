import { ReactNode } from 'react';
import { AppBar as MuiAppbar, Toolbar, useTheme, useMediaQuery } from '@mui/material';

import Title from './Title';
import Menu from './Menu';

type APPBAR = { children: ReactNode };

export default function Appbar({ children }: APPBAR) {
    const theme = useTheme();
    const mdDown = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
            <MuiAppbar>
                <Toolbar disableGutters={mdDown}>
                    {!mdDown && <Title />}
                    <Menu />
                    {mdDown && <Title />}
                </Toolbar>
            </MuiAppbar>
            <Toolbar />
            {children}
        </>
    );
}
