import { useContext } from 'react';
import { statsContext } from '../store/statsContext';
import Table from './Table';

function TeamPoints() {
  const { stats, setStats } = useContext(statsContext);

  let tableData;
  if (stats.length > 0) {
    const teamPoints = stats.reduce((acc, cur) => {
      if (!acc.hasOwnProperty(cur[1])) {
        acc[cur[1]] = +cur[3];
      } else {
        acc[cur[1]] += +cur[3];
      }

      return acc;
    }, {});

    tableData = Object.entries(teamPoints)
      .sort((a, b) => b[1] - a[1]);
  }

  return (
    <>
      {tableData ? (
        <Table
          columns={['Team', 'Point Scored']}
          data={tableData}
          numbered
        />
      ) : null}
    </>
  );
}

export default TeamPoints;
