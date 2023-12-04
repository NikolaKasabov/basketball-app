import { useContext } from 'react';
import { statsContext } from '../store/statsContext';
import Table from './Table';

function ScoredPointsPerSecond() {
  const { stats } = useContext(statsContext);

  let tableData;
  if (stats.length > 0) {
    // create copy of the matrix
    tableData = stats.map(row => [...row]);

    // add 'scored points per second' field
    tableData.map(row => {
      const pointsPerSecond = (+row[3]) / (+row[2]);
      row.push(pointsPerSecond.toFixed(3));
    });

    tableData.sort((a, b) => b[4] - a[4]);
  }

  return (
    <>
      {tableData ? (
        <Table
          columns={['Player name', 'Team', 'Time played(s)', 'Points scored', 'Scored points per second']}
          data={tableData}
          showPlacement
        />
      ) : null}
    </>
  );
}

export default ScoredPointsPerSecond;
