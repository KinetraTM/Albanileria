import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import NotFound from './page/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
