import { useContext } from 'react';
import { statsContext } from '../store/statsContext';
import Table from './Table';

function UnsortedTable() {
  const { stats, setStats } = useContext(statsContext);

  return (
    <>
      {(stats.length > 0) ? (
        <Table
          columns={['Player name', 'Team', 'Time played(s)', 'Points scored']}
          data={stats}
        />
      ) : null}
    </>
  );
}

export default UnsortedTable;
