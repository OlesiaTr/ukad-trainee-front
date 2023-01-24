// Core
import { Suspense } from 'react';

// Utils
import { Outlet } from 'react-router-dom';

// Styles
import { Header, Logo, StyledLink, Footer } from './SharedLayout.styled';
import { Layout } from 'components/Layout';
import { GlobalStyle } from 'components/GlobalStyle';

// Assets
import logo from '../../assets/imgs/UKAD_logo.png';

export const SharedLayout = () => {
  return (
    <Layout>
      <Header>
        <Logo src={logo} alt="UKAD logo" />
        <nav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/products">Products</StyledLink>
        </nav>
      </Header>

      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>

      <Footer>
        <p>2021 © copyright</p>
      </Footer>

      <GlobalStyle />
    </Layout>
  );
};
