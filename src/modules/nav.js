import { NavLink } from 'react-router-dom';
import picture1 from '../image1.png';

const Nav = () => (
  <nav className="flex justify-between px-10 pt-10">
    <div className="flex gap-5 items-center">
      <img className="w-10 h-10" src={picture1} alt="logo" />
      <div>Space Travellers HUb</div>
    </div>
    <ul className="flex gap-5 items-center">
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? 'underline' : '')}
          to="/"
        >
          Rockets
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? 'underline' : '')}
          to="/Mission"
        >
          Mission
        </NavLink>
      </li>
      <li>|</li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? 'underline' : '')}
          to="/MyProfile"
        >
          My Profile
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Nav;
