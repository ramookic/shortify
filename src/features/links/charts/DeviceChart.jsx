import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { styled } from "styled-components";

import { useGetAllClicksByUser } from "../useGetAllClicks";
import { weekStartDate } from "../../../utils/helpers";
import { useUser } from "../../authentication/useUser";
import ChartHeader from "./ChartHeader";
import Alert from "../../../components/dashboard/Alert";
import Spinner from "../../../components/loaders/Spinner";

const StyledDeviceChart = styled.div`
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

const COLORS = ["var(--color-yellow-500)", "var(--color-brand-500)"];

function DeviceChart({ description, data }) {
  const { user } = useUser();
  const { isLoading, clicks } = useGetAllClicksByUser(user.id);

  if (isLoading) return <Spinner />;

  const { currentDate, currentWeekStartDate } = weekStartDate();

  const clicksForPastWeek = clicks.filter((click) => {
    const clickDate = new Date(click.created_at.split("T")[0]);
    return clickDate >= currentWeekStartDate && clickDate <= currentDate;
  });

  const mobileClicks = clicksForPastWeek.filter((click) =>
    click.userAgent.includes("Mobile")
  );
  const desktopClicks = clicksForPastWeek.filter(
    (click) => !click.userAgent.includes("Mobile")
  );

  const deviceData = [
    { name: "Mobile", value: mobileClicks.length },
    { name: "Desktop", value: desktopClicks.length },
  ];

  const preparedData = data || deviceData;

  return (
    <StyledDeviceChart>
      <ChartHeader
        title="User Device"
        description={description || "Clicks by users device this week"}
      />
      {preparedData[0].value === 0 && preparedData[1].value === 0 ? (
        <Alert>No data to display</Alert>
      ) : (
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              dataKey="value"
              data={preparedData}
              cx="50%"
              cy="45%"
              outerRadius={70}
              label
              fill="var(--color-yellow-500)"
            >
              {preparedData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      )}
    </StyledDeviceChart>
  );
}

export default DeviceChart;
