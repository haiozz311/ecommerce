import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
