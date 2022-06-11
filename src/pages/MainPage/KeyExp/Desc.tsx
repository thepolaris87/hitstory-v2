import { Box, Grid, Icon, Typography } from '@mui/material';
import React, { ReactNode } from 'react';

import CheckIcon from '@mui/icons-material/Check';
import Logos from '../Logos';
type CHILDREN = { skills?: string[] };
type DESC = CHILDREN;

export default function Desc({ skills }: DESC) {
    return (
        <Box sx={{ padding: '4px' }}>
            <Typography variant='body1'>수학 / 영어 / 코딩 콘텐츠 제작</Typography>
            <Grid container alignItems='center'>
                <Grid item>
                    <Icon sx={{ pr: '8px' }}>
                        <CheckIcon />
                    </Icon>
                </Grid>
                <Grid item>
                    <Typography variant='h6'>주요 스킬</Typography>
                </Grid>
            </Grid>
            <Grid container>
                <Logos icons={['Snapsvg']} width='25px' variant='h4'></Logos>
            </Grid>
        </Box>
    );
}
