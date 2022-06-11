import { Grid } from '@mui/material';
import Frame from './Frame';
import FrameList from './FrameList';

export default function ContentsPage() {
    return (
        <Grid container>
            <Grid item sx={{ mr: 2, ml: 2 }}>
                <FrameList />
            </Grid>
            <Grid item sx={{ flex: 1, height: '80vh' }}>
                <Frame />
            </Grid>
        </Grid>
    );
}
