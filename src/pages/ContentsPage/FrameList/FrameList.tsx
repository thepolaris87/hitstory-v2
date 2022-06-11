import { Button, ButtonGroup } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { selectContents, setFrameId } from '../../../slices/contents';

const frameList = [
    { id: 'DM000001', display: '모으기' },
    { id: 'DM000002', display: '애니팡' },
    { id: 'DM000003', display: '뒤집기' },
    { id: 'DM000004', display: '덧셈' },
    { id: 'DM000005', display: '드라이빙' },
    { id: 'CM000001', display: '블록 코딩' }
];

export default function FrameList() {
    const { frameId } = useSelector(selectContents);
    const disptach = useDispatch();
    const onFrameIdButtonClickHandler = (id: string) => disptach(setFrameId(id));
    return (
        <div>
            <ButtonGroup orientation='vertical' variant='text'>
                {frameList.map((el) => (
                    <Button key={el.id} variant={el.id === frameId ? 'contained' : 'text'} onClick={() => onFrameIdButtonClickHandler(el.id)}>
                        {el.display}
                    </Button>
                ))}
            </ButtonGroup>
        </div>
    );
}
