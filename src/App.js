
import './App.css';
import { BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import CatchAll from './pages/CatchAll'

import NavBar from './components/NavBar';
import CardGame from './components/CardGame';
function App() {
  return (
    <div className="App">
      <NavBar />
      <CardGame /> 
      {/* <Routes>
        <Route path ='/' element={<Home/>} />
        <Route path='*' element= {<CatchAll/>} />
      </Routes> */}
    </div>

  );
}

export default App;
