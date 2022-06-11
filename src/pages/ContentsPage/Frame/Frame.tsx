import { useRef } from 'react';
import { Box, Grid, IconButton } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectContents } from '../../../slices/contents';
import * as Tiles from '../../../assets/images/contents/coding';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import UndoIcon from '@mui/icons-material/Undo';
import DeleteIcon from '@mui/icons-material/Delete';

type TILES = 'start' | 'front' | 'front3' | 'crush' | 'rotateR' | 'end' | 'anim' | 'undo' | 'init';

const getSrc = (frameId: string) => {
    const subject = frameId.substring(0, 2);
    let result = { subject, src: '' };

    if (subject === 'DM') result.src = `/contents/math/?frame_id=${frameId}`;
    if (subject === 'CM') result.src = `/contents/coding`;

    return result;
};
const parseCode = (type: TILES) => {
    const indexes = {
        start: '0007D3',
        front3: '0007D5',
        front: '0007D7',
        crush: '0007D4',
        rotateR: '0007D6',
        end: '0007D8',
        anim: '0007D9',
        undo: '0007DA',
        init: '0007DB'
    };

    return indexes[type];
};

export default function Frame() {
    const { frameId } = useSelector(selectContents);
    const iframe = useRef<HTMLIFrameElement>(null);
    const { subject, src } = getSrc(frameId);

    const onTileClickHandler = (type: TILES) => {
        const code = parseCode(type);
        window[0].postMessage({ code }, '*');
    };

    return (
        <Box sx={{ height: '100%' }}>
            <Grid sx={{ height: '100%' }} container flexWrap='wrap'>
                <Grid item sx={{ flex: 3, height: '100%', position: 'relative' }}>
                    {src && (
                        <>
                            <iframe ref={iframe} style={{ userSelect: 'none' }} width='100%' height='100%' frameBorder='0' title='contents' src={src}></iframe>
                            {subject === 'CM' && (
                                <Grid sx={{ position: 'absolute', top: '0', paddingTop: '46.5%' }} container>
                                    <IconButton onClick={() => onTileClickHandler('anim')}>
                                        <PlayCircleOutlineIcon color='primary' fontSize='large' />
                                    </IconButton>
                                    <IconButton onClick={() => onTileClickHandler('undo')}>
                                        <UndoIcon color='primary' fontSize='large' />
                                    </IconButton>
                                    <IconButton onClick={() => onTileClickHandler('init')}>
                                        <DeleteIcon color='primary' fontSize='large' />
                                    </IconButton>
                                </Grid>
                            )}
                        </>
                    )}
                </Grid>
                {src && subject === 'CM' && (
                    <Grid item sx={{ flex: 1, padding: '0 8px' }}>
                        <Grid container gap='8px' justifyContent='center'>
                            {Object.entries(Tiles).map(([type, Comp]) => (
                                <Grid key={type} item sx={{ cursor: 'pointer' }} onClick={() => onTileClickHandler(type as TILES)}>
                                    <Comp width='100%' height='100%' />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                )}
            </Grid>
        </Box>
    );
}
