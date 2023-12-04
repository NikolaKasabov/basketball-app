import { useContext } from 'react';
import { statsContext } from '../store/statsContext';
import Table from './Table';

function UnsortedTable() {
  const { stats, setStats } = useContext(statsContext);

  return (
    <Table
      columns={['Player name', 'Team', 'Time played(s)', 'Points scored']}
      data={stats}
    />
  );
}

export default UnsortedTable;
