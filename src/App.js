import { useContext, useEffect } from 'react';
import './App.css';
import FileLoader from './components/FileLoader';
import { statsContext } from './store/statsContext';
import { Outlet, useNavigate } from 'react-router-dom';
import Navigation from './components/Navigation';

function App() {
  const { stats, setStats } = useContext(statsContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (stats.length > 0) {
      navigate('/unsorted');
    }
  }, [stats]);

  return (
    <div className="App">
      <FileLoader className='load-file' />
      {stats.length === 0 ? (
        <p className='select-file'>Please select a file.</p>
      ) : (
        <Navigation />
      )}
      <Outlet />
    </div>
  );
}

export default App;
