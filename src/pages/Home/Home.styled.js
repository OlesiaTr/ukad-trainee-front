// Utils
import styled from 'styled-components';

export const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0 115px;
`;

export const PageTitle = styled.h1`
  color: #000000;
  font-weight: 700;
  font-size: 36px;

  margin-bottom: 16px;

  @media (max-width: 480px) {
    margin: 0 auto;
  }
`;
