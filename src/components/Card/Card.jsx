// Utils
import PropTypes from 'prop-types';

// Styles
import {
  CardWrapper,
  DogName,
  DogDesc,
  ImgWrapper,
  DescWrapper,
} from './Card.styled';

export const Card = ({ data: { image, name, temperament } }) => {
  return (
    <CardWrapper>
      <ImgWrapper>
        <img src={image.url} alt={name} />
      </ImgWrapper>

      <DescWrapper>
        <DogName>{name}</DogName>
        <DogDesc>{temperament}</DogDesc>
      </DescWrapper>
    </CardWrapper>
  );
};

Card.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    temperament: PropTypes.string.isRequired,
  }).isRequired,
};
