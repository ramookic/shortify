import { useEffect } from "react";
import { styled } from "styled-components";
import { useUser } from "../../features/authentication/useUser";
import { useGetAllLinksByUser } from "../../features/links/useGetAllLinks";

import DashboardHeading from "../../components/dashboard/DashboardHeading";
import LinkList from "../../features/links/LinkList";
import LinkDetails from "../../features/links/LinkDetails";
import Spinner from "../../components/loaders/Spinner";
import Alert from "../../components/dashboard/Alert";
import ModalCreate from "../../components/modal/ModalCreate";

const StyledLinks = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const LinksLayout = styled.div`
  display: flex;
  gap: 20px;

  @media screen and (max-width: 768px) {
    margin: 0;
    flex-direction: column;
    border: none;
    flex-wrap: wrap;
  }
`;

function Links() {
  useEffect(function () {
    document.title = "Shortify | Link Management";
  }, []);

  const { user } = useUser();
  const { isLoading, links } = useGetAllLinksByUser(user.id);

  if (isLoading) return <Spinner />;

  return (
    <StyledLinks>
      <DashboardHeading>Links</DashboardHeading>
      <LinksLayout>
        {links.length === 0 ? (
          <Alert>
            <p>You dont have any links created yet.</p>
            <ModalCreate />
          </Alert>
        ) : (
          <>
            <LinkList links={links} />
            <LinkDetails links={links} initialLink={links[0].link.id} />
          </>
        )}
      </LinksLayout>
    </StyledLinks>
  );
}

export default Links;
