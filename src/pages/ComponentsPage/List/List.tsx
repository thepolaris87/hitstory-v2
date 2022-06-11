import { useDispatch } from 'react-redux';
import { List as MuiList, ListItemButton, ListItemText } from '@mui/material';

import { setComponent } from '../../../slices/components';

const list = [
    { name: 'carousel', primary: 'Carousel' }
];

export default function List() {
    const dispatch = useDispatch();

    const onListClickHandler = (component: string) => {
        dispatch(setComponent(component));
    };

    return (
        <MuiList>
            {list.map(({ name, primary }) => (
                <ListItemButton key={name} alignItems='center' onClick={() => onListClickHandler(name)}>
                    <ListItemText primary={primary}></ListItemText>
                </ListItemButton>
            ))}
        </MuiList>
    );
}
