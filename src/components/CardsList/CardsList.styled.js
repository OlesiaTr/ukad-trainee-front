// Utils
import styled from 'styled-components';

export const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 350px);
  justify-content: center;
  gap: 40px;
`;

export const CardWrapper = styled.li`
  border-radius: 4px;
  width: 100%;

  border: 3px solid #f2f2f2;

  > a {
    text-decoration: none;
  }
`;

export const ImgWrapper = styled.div`
  > img {
    width: 100%;
    height: 364px;
    object-fit: cover;
    object-position: top;
  }
`;

export const DescWrapper = styled.div`
  margin: 0 28px;
`;

export const DogName = styled.p`
  font-weight: 600;
  font-size: 12px;
  letter-spacing: -0.03em;
  text-transform: uppercase;
`;

export const DogDesc = styled.p`
  font-weight: 700;
  font-size: 19px;
`;
