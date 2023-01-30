// Utils
import styled from 'styled-components';

export const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 20px 20px 40px;

  @media (min-width: 767px) {
    padding: 40px 20px 80px;
  }
`;
