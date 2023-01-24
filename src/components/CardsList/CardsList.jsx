// Utils
import PropTypes from 'prop-types';

// Components
import { Card } from 'components/Card/Card';

// Styles
import { Container } from './CardsList.styled';

export const CardsList = ({ data }) => {
  return (
    <Container>
      {data.map(({ id, ...otherProps }) => (
        <li key={id}>
          <Card data={otherProps} />
        </li>
      ))}
    </Container>
  );
};

CardsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
