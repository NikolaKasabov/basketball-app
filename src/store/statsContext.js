import { createContext, useState } from 'react';

export const statsContext = createContext({
  stats: [],
  setStats: (stats) => { }
});

function ContextProvider({ children }) {
  const [stats, setStats] = useState([]);

  return (
    <statsContext.Provider value={{ stats, setStats }}>
      {children}
    </statsContext.Provider>
  );
}

export default ContextProvider;
