// Utils
import styled from 'styled-components';

export const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 320px);
  justify-content: center;
  gap: 40px;

  @media (min-width: 767px) {
    grid-template-columns: repeat(2, 350px);
  }

  @media (min-width: 1199px) {
    grid-template-columns: repeat(3, 350px);
  }

  @media (min-width: 1600px) {
    grid-template-columns: repeat(4, 350px);
    justify-content: start;
  }
`;
