import { NavLink } from 'react-router-dom';
import picture1 from '../image1.png';

const Nav = () => (
  <nav className="flex justify-between px-6 py-8 border-b mx-4">
    <div className="flex gap-5 items-center font-bold text-2xl leading-3 tracking-wide">
      <img className="w-10 h-10" src={picture1} alt="logo" />
      <div>Space Traveller&apos;s Hub</div>
    </div>
    <ul className="flex gap-5 items-center text-blue-500 font-medium">
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
