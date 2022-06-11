import { Grid } from '@mui/material';
import Carousel from '../../components/Carousel';
import List from './List';

export default function ComponentsPage() {
    return (
        <Grid container>
            <Grid item>
                <List></List>
            </Grid>
            <Grid item sx={{ flex: 1 }}>
                카로셀은 이러한 컴포넌트입니다.
                <div style={{ width: '50%', padding: '8px', border: '1px solid red' }}>
                    <Carousel>
                        <div style={{ width: '100px', height: '100px' }}>ffas1</div>
                        <div style={{ width: '100px', height: '100px' }}>ffas2</div>
                    </Carousel>
                </div>
            </Grid>
        </Grid>
    );
}
