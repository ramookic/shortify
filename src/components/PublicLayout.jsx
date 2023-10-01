import { Outlet } from "react-router-dom";
import { styled } from "styled-components";

import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";

const StyledPublicLayout = styled.div`
  max-width: 75rem;
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 75rem) {
    padding: 0 20px;
  }
`;

const Container = styled.div`
  max-width: 75rem;
`;

function PublicLayout() {
  return (
    <>
      <Banner />
      <StyledPublicLayout>
        <Header />
        <Container>
          <Outlet />
        </Container>
      </StyledPublicLayout>
      <Footer />
    </>
  );
}

export default PublicLayout;
