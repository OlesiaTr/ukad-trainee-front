// Utils
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 15px;

  padding: 25px 0 25.5px;

  background: #022b32;

  @media (min-width: 480px) {
    gap: 55px;
  }
`;

export const Logo = styled.img`
  width: 110px;
  margin-left: 10px;

  @media (min-width: 480px) {
    margin-left: 20px;
  }
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

  > p {
    text-transform: uppercase;
    color: #ffffff;

    margin-left: 29px;
    padding: 27px 0;
  }
`;
