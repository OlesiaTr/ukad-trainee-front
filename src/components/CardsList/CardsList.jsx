// Utils
import PropTypes from 'prop-types';

// Styles
import {
  Container,
  CardWrapper,
  DogName,
  DogDesc,
  ImgWrapper,
  DescWrapper,
} from './CardsList.styled';

export const CardsList = ({ data }) => {
  return (
    <Container>
      {data.map(({ id, name, temperament, image }) => (
        <CardWrapper key={id}>
          <ImgWrapper>
            <img src={image.url} alt={name} />
          </ImgWrapper>

          <DescWrapper>
            <DogName>{name}</DogName>
            <DogDesc>{temperament}</DogDesc>
          </DescWrapper>
        </CardWrapper>
      ))}
    </Container>
  );
};

CardsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

// id, name, temperament
