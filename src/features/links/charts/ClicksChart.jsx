import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import { styled } from "styled-components";

import { useGetAllClicksByUser } from "../useGetAllClicks";
import { weekStartDate } from "../../../utils/helpers";
import { useUser } from "../../authentication/useUser";
import ChartHeader from "./ChartHeader";
import Alert from "../../../components/dashboard/Alert";
import Spinner from "../../../components/loaders/Spinner";

const StyledClicksChart = styled.div`
  width: 100%;
  background: var(--color-grey-0);
  padding: 2rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  outline: 1px solid var(--color-grey-200);

  & h4 {
    font-size: 20px;
    color: var(--color-grey-700);
  }
`;

function ClicksChart({ description, data }) {
  const { user } = useUser();
  const { isLoading, clicks } = useGetAllClicksByUser(user.id);

  const prepareData = (clicks) => {
    if (clicks.length === 0) return [];

    const { currentDate, currentWeekStartDate } = weekStartDate();

    const clicksForWeek = clicks.filter((click) => {
      const clickDate = new Date(click.created_at.split("T")[0]);
      return clickDate >= currentWeekStartDate && clickDate <= currentDate;
    });

    const pastWeekDates = [];
    for (let i = 6; i >= 0; i--) {
      const date = new Date(currentDate);
      date.setDate(currentDate.getDate() - i);
      pastWeekDates.push(date.toISOString().split("T")[0]);
    }

    const data = pastWeekDates.map((date) => ({
      date,
      clicks: 0,
    }));

    clicksForWeek.forEach((click) => {
      const clickDate = click.created_at.split("T")[0];
      const dataIndex = data.findIndex((item) => item.date === clickDate);
      if (dataIndex !== -1) {
        data[dataIndex].clicks++;
      }
    });

    return data;
  };

  if (isLoading) return <Spinner />;

  const preparedData = data || prepareData(clicks);

  return (
    <StyledClicksChart>
      <ChartHeader
        title="Total Clicks"
        description={description || "Total clicks this week"}
      />
      {preparedData.length === 0 ? (
        <Alert>No data to display</Alert>
      ) : (
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart
            data={preparedData}
            margin={{ top: 20, right: 20, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tickFormatter={(tick) => {
                const date = new Date(tick);
                return date.toLocaleDateString(undefined, { weekday: "short" });
              }}
            />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="clicks"
              fill="var(--color-brand-500)"
              stroke="var(--color-brand-500)"
              strokeWidth={2}
              fillOpacity={0.5}
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </StyledClicksChart>
  );
}

export default ClicksChart;
