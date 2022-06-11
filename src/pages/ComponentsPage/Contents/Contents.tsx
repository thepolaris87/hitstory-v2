import { useSelector } from 'react-redux';
import { selectComponents } from '../../../slices/components';

export default function Contents() {
    const { component } = useSelector(selectComponents);

    return <div>{component}</div>;
}
