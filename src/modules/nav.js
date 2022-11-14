import picture1 from '../image1.png';

const Nav = () => (
  <nav>
    <div>
      <img src={picture1} alt="logo" />
      <div>Space Travellers HUb</div>
    </div>
    <ul>
      <li>Rockets</li>
      <li>Missions</li>
      <li>My profile</li>
    </ul>
  </nav>
);

export default Nav;
