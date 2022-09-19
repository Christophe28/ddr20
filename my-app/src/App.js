import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import Game from './pages/Game';
import Error404 from './pages/Error404';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/game" element={<Game />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default App;