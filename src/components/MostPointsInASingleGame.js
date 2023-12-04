import { useContext } from 'react';
import { statsContext } from '../store/statsContext';
import Table from './Table';

function MostPointsInASingleGame() {
  const { stats } = useContext(statsContext);

  let tableData;
  if (stats.length > 0) {
    tableData = [...stats].sort((a, b) => +b[3] - +a[3]);
  }

  return (
    <>
      {tableData ? (
        <Table
          columns={['Player name', 'Team', 'Time played(s)', 'Points scored']}
          data={tableData}
          showPlacement
        />
      ) : null}
    </>
  );
}

export default MostPointsInASingleGame;
