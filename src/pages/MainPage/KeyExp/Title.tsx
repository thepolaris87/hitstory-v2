import styled from '@emotion/styled';
import { Typography } from '@mui/material';

type TITLE = { title: string; subtitle?: string };
const Wrapper = styled('div')`
    padding: 8px;
`;

export default function Title({ title, subtitle }: TITLE) {
    return (
        <Wrapper>
            <Typography variant='h4' align='center'>
                {title}
            </Typography>
            <Typography sx={{ color: (theme) => theme.palette.grey[500] }} variant='subtitle1' align='center'>
                {subtitle}
            </Typography>
        </Wrapper>
    );
}
