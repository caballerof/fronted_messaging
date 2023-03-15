import loading from '../../assets/loading.svg';
import { ImgLoading, PaperStyled } from './styles/Loading.styles';

function Loading() {
  return (
    <PaperStyled>
      <ImgLoading src={loading} alt="Cargando" />
    </PaperStyled>
  );
}

export default Loading;
