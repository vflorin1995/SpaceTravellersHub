import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Missions from './modules/missions';
import MyProfile from './modules/myProfile';
import Nav from './modules/nav';
import Rockets from './modules/rockets';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/Mission" element={<Missions />} />
        <Route path="/MyProfile" element={<MyProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
