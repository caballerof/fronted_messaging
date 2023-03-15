import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const PaperStyled = styled(Paper)`
  padding: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImgLoading = styled('img')`
  width: 100px;
  height: 100px;
  filter: invert(105%) sepia(0%) saturate(6858%) hue-rotate(276deg) brightness(97%)
    contrast(50%);
`;
