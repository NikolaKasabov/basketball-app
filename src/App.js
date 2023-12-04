import { useContext } from 'react';
import './App.css';
import FileLoader from './components/FileLoader';
import { statsContext } from './store/statsContext';
import Table from './components/Table';

function App() {
  const { stats, setStats } = useContext(statsContext);

  console.log(stats);

  return (
    <div className="App">
      <FileLoader className='load-file' />
      {stats.length === 0 ? (
        <p className='select-file'>Please select a file.</p>
      ) : (
        <Table
          columns={['Player name', 'Team', 'Time played(s)', 'Points scored']}
          data={stats}
          numbered
          className='stats-table'
        />
      )}

    </div>
  );
}

export default App;
