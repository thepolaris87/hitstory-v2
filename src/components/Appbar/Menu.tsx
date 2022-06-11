import { useState } from 'react';
import { Box, Button, IconButton, Menu as MuiMenu, MenuItem, Typography } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

const pages = [
    { display: 'CONTENTS', url: '/contents' },
    { display: 'COMPONENTS', url: '/components' }
];

export default function Menu() {
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = useState<(EventTarget & HTMLButtonElement) | null>(null);
    const handleOpenNavMenu: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = (url?: string) => {
        setAnchorElNav(null);
        url && navigate(url);
    };

    return (
        <>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <IconButton size='large' onClick={handleOpenNavMenu} color='inherit'>
                    <MenuIcon />
                </IconButton>
                <MuiMenu
                    anchorEl={anchorElNav}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                    keepMounted
                    transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                    open={Boolean(anchorElNav)}
                    onClose={() => handleCloseNavMenu()}
                    sx={{ display: { xs: 'block', md: 'none' } }}>
                    {pages.map((page) => (
                        <MenuItem key={page.display} onClick={() => handleCloseNavMenu(page.url)}>
                            <Typography textAlign='center'>{page.display}</Typography>
                        </MenuItem>
                    ))}
                </MuiMenu>
            </Box>
            <Box sx={{ flexGrow: 1, ml: 2, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                    <Button key={page.display} onClick={() => handleCloseNavMenu(page.url)} sx={{ color: 'white', display: 'block' }}>
                        {page.display}
                    </Button>
                ))}
            </Box>
        </>
    );
}
