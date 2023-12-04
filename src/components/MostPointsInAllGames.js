import { useContext } from 'react';
import { statsContext } from '../store/statsContext';
import Table from './Table';

function MostPointsInAllGames() {
  const { stats, setStats } = useContext(statsContext);

  let tableData;
  if (stats.length > 0) {
    const points = stats.reduce((acc, cur) => {
      if (!acc.hasOwnProperty(cur[0])) {
        acc[cur[0]] = +cur[3];
      } else {
        acc[cur[0]] += +cur[3];
      }

      return acc;
    }, {});

    tableData = Object.entries(points)
      .sort((a, b) => +b[1] - +a[1]);
  }

  return (
    <>
      {tableData ? (
        <Table
          columns={['Player name', 'Points Scored']}
          data={tableData}
          showPlacement
        />
      ) : null}
    </>
  );
}

export default MostPointsInAllGames;
