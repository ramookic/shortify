import { useEffect } from "react";
import DashboardHeading from "../../components/dashboard/DashboardHeading";
import ProfileUpdate from "../../components/dashboard/settings/ProfileUpdate";
import { useUser } from "../../features/authentication/useUser";
import { styled } from "styled-components";
import DashboardSubHeading from "../../components/dashboard/DashboardSubHeading";
import PasswordUpdate from "../../components/dashboard/settings/PasswordUpdate";

const StyledSettings = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SettingsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: var(--color-grey-0);
  padding: 2rem;
  border-radius: 10px;
  outline: 1px solid var(--color-grey-200);
`;

function Settings() {
  const { user, isLoading } = useUser();

  useEffect(function () {
    document.title = "Shortify | Settings";
  }, []);

  if (isLoading) return;

  return (
    <StyledSettings>
      <DashboardHeading>Settings</DashboardHeading>
      <SettingsBox>
        <DashboardSubHeading>Preferences</DashboardSubHeading>
        <ProfileUpdate user={user} />
      </SettingsBox>
      <SettingsBox>
        <DashboardSubHeading>Security & Authentication</DashboardSubHeading>
        <PasswordUpdate />
      </SettingsBox>
    </StyledSettings>
  );
}

export default Settings;
