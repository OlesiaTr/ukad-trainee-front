// Core
import { Suspense } from 'react';

// Utils
import { Outlet } from 'react-router-dom';

// Styles
import {
  Layout,
  Header,
  Container,
  Logo,
  StyledLink,
  Footer,
} from './SharedLayout.styled';

// Assets
import logo from '../../assets/imgs/UKAD_logo.png';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <Logo src={logo} alt="UKAD logo" />
          <nav>
            <StyledLink to="/" end>
              Home
            </StyledLink>
            <StyledLink to="/products">Products</StyledLink>
          </nav>
        </Container>
      </Header>

      <Layout>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </Layout>

      <Footer>
        <Container>
          <p>2021 © copyright</p>
        </Container>
      </Footer>
    </>
  );
};
