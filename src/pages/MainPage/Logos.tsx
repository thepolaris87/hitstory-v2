import { Box } from '@mui/system';
import * as Icons from '../../assets/images/logos';
import Logo from '../../components/Logo';

const list = Object.entries(Icons);
export type ICON = 'Blockly' | 'Fabric' | 'Material' | 'React' | 'Redux' | 'Snapsvg' | 'Styled_Components' | 'Typescript';
export type LOGOS = {
    icons?: ICON[];
    width?: string;
    height?: string;
    variant?: 'button' | 'caption' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'overline' | 'inherit';
};

export default function Logos({ icons, width = '50px', height = '50px', variant }: LOGOS) {
    const filteredList = icons ? list.filter(([key, Icon]) => icons.includes(key as ICON)) : list;

    return (
        <Box>
            {filteredList.map(([key, Icon]) => (
                <Logo key={key} icon={<Icon width={width} height={height}></Icon>} name={key} variant={variant}></Logo>
            ))}
        </Box>
    );
}
