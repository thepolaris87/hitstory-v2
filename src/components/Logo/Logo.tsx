import styled from '@emotion/styled';
import { Grid, Typography } from '@mui/material';
import { ReactNode } from 'react';

type LOGO = {
    icon: ReactNode;
    name: string;
    variant?: 'button' | 'caption' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'overline' | 'inherit';
};

const CustomTypography = styled(Typography)`
    letter-spacing: -0.05em;
    color: #3c4340;
    font-weight: 300;
`;

export default function Logo({ icon, name, variant = 'h4' }: LOGO) {
    return (
        <Grid container alignItems='center' justifyContent='center'>
            <Grid item sx={{ p: 1 }}>
                {icon}
            </Grid>
            <Grid item>
                <CustomTypography variant={variant}>{name}</CustomTypography>
            </Grid>
        </Grid>
    );
}
