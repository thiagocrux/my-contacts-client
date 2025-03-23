import sad from '../../../../assets/images/icons/sad.svg';
import Button from '../../../../components/Button';

import { Container } from './styles';

type Props = {
  onTryAgain: () => void;
};

export default function ErrorStatus({ onTryAgain }: Props) {
  return (
    <Container>
      <img src={sad} alt="Sad" />
      <div className="details">
        <strong>Ocorreu um erro ao obter os seus contatos</strong>
        <Button type="button" onClick={onTryAgain}>
          Tentar novamente
        </Button>
      </div>
    </Container>
  );
}
