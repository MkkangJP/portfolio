import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import Video from './pages/Video';
import Case from './pages/Case';
import('preline')

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/Case" element={<Case />}></Route>
        <Route path="/Video" element={<Video />}></Route>
        <Route path="/Profile" element={<Profile />}>
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;