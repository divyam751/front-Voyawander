
import './App.css';
import Cart from './Components/Cart';
import Holiday from './Components/Holiday';
import AllRoutes from './Routes/AllRoutes';
import { Navbar } from './Routes/Navbar';

function App() {
  return (
    <div className="App">
      <AllRoutes/>
      <Navbar/>
    </div>
  );
}

export default App;
