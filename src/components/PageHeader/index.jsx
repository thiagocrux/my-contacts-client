import { Link } from 'react-router';
import PropTypes from 'prop-types';

import arrow from '../../assets/images/icons/arrow.svg';
import { Container } from './styles';

export default function PageHeader({ title }) {
  return (
    <Container>
      <Link to="../">
        <img src={arrow} alt="Arrow" />
        <span>Voltar</span>
      </Link>
      <h1>{title}</h1>
    </Container>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
