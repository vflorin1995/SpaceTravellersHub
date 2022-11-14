import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './modules/nav';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={Rockets} />
        <Route path="/Mission" element={Mission} />
        <Route path="/MyProfile" element={MyProfile} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
