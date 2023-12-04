import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav className='navigation'>
      <ul>
        <li><NavLink to={'/unsorted'}>Unsorted data</NavLink></li>
        <li><NavLink to={'/team-points'}>Team points</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;
