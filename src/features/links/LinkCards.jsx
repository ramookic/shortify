import { useUser } from "../authentication/useUser";
import { useGetAllClicksByUser } from "./useGetAllClicks";
import { useGetAllLinksByUser } from "./useGetAllLinks";
import DashboardCard from "../../components/dashboard/DashboardCard";
import DashboardCardList from "../../components/dashboard/DashboardCardList";
import Spinner from "../../components/loaders/Spinner";

function LinkCards() {
  const { user } = useUser();
  const { isLoading, links } = useGetAllLinksByUser(user.id);
  const { isLoading: isLoadingClicks, clicks } = useGetAllClicksByUser(user.id);

  if (isLoading || isLoadingClicks) return <Spinner />;

  function clicksToday(clicks) {
    const currentDate = new Date().toISOString().split("T")[0];

    const todayClicks = clicks.filter((click) => {
      if (click.created_at) {
        const clickDate = click.created_at.split("T")[0];
        return clickDate === currentDate;
      }
      return false;
    });

    return todayClicks.length;
  }

  return (
    <div>
      <DashboardCardList>
        <DashboardCard
          title="Total Links"
          description={links.length === 1 ? "link" : "links"}
          data={links.length}
        />
        <DashboardCard
          title="Total Clicks"
          description={clicks.length === 1 ? "click" : "clicks"}
          data={clicks.length}
        />
        <DashboardCard
          title="Today Clicks"
          description={clicksToday(clicks) === 1 ? "click" : "clicks"}
          data={clicksToday(clicks)}
        />
      </DashboardCardList>
    </div>
  );
}

export default LinkCards;
