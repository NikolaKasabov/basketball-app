import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav className='navigation'>
      <ul>
        <li><NavLink to={'/unsorted'}>Unsorted data</NavLink></li>
        <li><NavLink to={'/most-points-in-a-single-game'}>Most points in a single game</NavLink></li>
        <li><NavLink to={'/most-points-in-all-games'}>Most points in all games</NavLink></li>
        <li><NavLink to={'/scored-points-per-second'}>Scored points per second</NavLink></li>
        <li><NavLink to={'/most-points-by-a-team'}>Most points by a team</NavLink></li>
        <li><NavLink to={'/best-player-in-the-team'}>Best player in the team</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;
