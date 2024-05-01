import './App.css';
import Create from './Components/Create';
import ListData from './Components/ListData';
import Navbar from './Components/Navbar';
import Read from './Components/Read';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Update from './Components/Update';

function App() {
  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<ListData></ListData>}></Route>
          <Route path='/create' element={<Create></Create>}></Route>
          <Route path='/update/:id' element={<Update></Update>}></Route>
          <Route path='/read/:id' element={<Read></Read>}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
