// Utils
import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 1560px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 480px) {
    padding: 0;
  }
`;
