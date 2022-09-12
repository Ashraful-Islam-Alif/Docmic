import { Route, Routes } from 'react-router-dom';
import Home from './Pages/HomePage/Home';

function App() {
  return (
    <div>
      <h1>Welcome to React world</h1>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
