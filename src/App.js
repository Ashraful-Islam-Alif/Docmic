import { Route, Routes } from 'react-router-dom';
import Home from './Pages/HomePage/Home';

function App() {
  return (
    <div className='bg-slate-100'>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
