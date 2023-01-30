// Utils
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Layout = styled.main`
  display: flex;
  flex-direction: column;

  max-width: 1600px;
  min-height: 100vh;
  margin: 0 auto;
`;

export const Header = styled.header`
  padding: 25px 20px 25.5px;

  background: #022b32;

  @media (min-width: 480px) {
    gap: 55px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  max-width: 1560px;

  margin: 0 auto;

  @media (min-width: 480px) {
    gap: 55px;
  }
`;

export const Logo = styled.img`
  width: 110px;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  text-transform: uppercase;
  color: #ffffff;

  & + & {
    margin-left: 10px;

    @media (min-width: 480px) {
      margin-left: 55px;
    }
  }

  &.active {
    text-decoration: underline;
  }
`;

export const Footer = styled.footer`
  background: #022b32;
  padding: 27px 29px;

  & p {
    text-transform: uppercase;
    color: #ffffff;
  }
`;
