import styled from '@emotion/styled';
import { Box, Divider, Grid, Paper, Typography } from '@mui/material';
import Carousel from '../../../components/Carousel';
import Logos from '../Logos';
import Title from './Title';
import View from './View';
import Desc from './Desc';

export default function KeyExp() {    
    return (
        <Box sx={{ padding: '8px' }}>        
            <Paper sx={{ width: '80%', margin: 'auto', padding: (theme) => theme.spacing(1) }}>
                <Grid container flexDirection='column'>
                    <Grid item>
                        <Title title='CONTENTS' subtitle='MATH / ENG / CODING' />
                    </Grid>
                    <Grid item>
                        <Grid container>
                            <Grid item sx={{ flex: 1 }}>
                                <View />
                            </Grid>
                            <Grid item sx={{ flex: 1 }}>
                                <Desc />                                    
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
}

//         <Divider />
//         <Typography variant='h4'>CONTENTS</Typography>
//         <Divider />
//         <Typography variant='h5'>- MATH</Typography>
//         <Typography variant='h5'>- ENGLISH</Typography>
//         <Typography variant='h5'>- SKILL</Typography>

//         <div style={{ width: 'fit-content' }}>
//             <Carousel>
//                 <Logos icons={['Snapsvg']} />
//                 <Logos icons={['Typescript']} />
//             </Carousel>
//         </div>
//         <Divider />
//         <Typography variant='h4'>PLATFORM</Typography>
//         <Divider />
//         <Typography variant='h5'>- CODING</Typography>
