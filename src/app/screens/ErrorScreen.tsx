import { useRouteError } from 'react-router-dom';

import img404 from '../../assets/404.svg';
import { ErrorScreenStyled } from './styles/Error.styles';

function ErrorScreen() {
  const error = useRouteError();

  return (
    <ErrorScreenStyled>
      <h1>Oops!</h1>
      <p>
        LOST IN <del>SPACE</del> page.
      </p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <a href="/">Return to home</a>
      <img width={400} height={300} src={img404} alt="404" />
    </ErrorScreenStyled>
  );
}

export default ErrorScreen;
