import { NavLink } from 'react-router-dom';
import picture1 from '../image1.png';

const Nav = () => (
  <nav>
    <div>
      <img src={picture1} alt="logo" />
      <div>Space Travellers HUb</div>
    </div>
    <ul>
      <li>
        <NavLink to="/">Rockets</NavLink>
      </li>
      <li>
        <NavLink to="/Missions">Missions</NavLink>
      </li>
      <li>|</li>
      <li>
        <NavLink to="/MyProfille">My Profile</NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
