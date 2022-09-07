import './App.css';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import All from './Components/Category/All';
import Rejected from './Components/Category/Rejected';
import Approved from './Components/Category/Approved';
import Pending from './Components/Category/Pending';
import DataDisplay from './Components/DataDisplay';
import DataCat from './Components/DataCat';

function App() {
  return (
    <BrowserRouter>
      <div className="lg:px-[9%]">
        {/* <Login /> */}
        <Navbar />

        <div>
          <DataCat />
          <Routes>
            <Route path='/' element={<All />} />
            <Route path='/pending' element={<Pending />} />
            <Route path='/approved' element={<Approved />} />
            <Route path='/rejected' element={<Rejected />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
