import { useContext } from 'react';
import './App.css';
import FileLoader from './components/FileLoader';
import { statsContext } from './store/statsContext';

function App() {
  const { stats, setStats } = useContext(statsContext);

  return (
    <div className="App">
      <FileLoader />
      {stats}
    </div>
  );
}

export default App;
