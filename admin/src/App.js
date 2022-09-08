import './App.css';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import All from './Components/Category/Uploaded';
import Rejected from './Components/Category/Rejected';
import Approved from './Components/Category/Approved';
import DataDisplay from './Components/DataDisplay';
import DataCat from './Components/DataCat';
import Confirmed from './Components/Category/Confirmed';
import PickedUp from './Components/Category/PickedUp';
import Uploaded from './Components/Category/Uploaded'
import Verification from './Components/Verification';
import { useState } from 'react';
function App() {
  const [loginStatus, setLoginStatus] = useState(false);
  return (
    <BrowserRouter>
      <div className="lg:px-[9%]">
        {/* <Login /> */}
        <Navbar />
        {
          loginStatus ?
            <Login />
            :
            <div>
              <Routes>
                {/* <Route path='/' element={<Login />} /> */}
                <Route path='/' element={<Uploaded />} />
                <Route path='/approved' element={<Approved />} />
                <Route path='/confirmed' element={<Confirmed />} />
                <Route path='/pickedup' element={<PickedUp />} />
                <Route path='/rejected' element={<Rejected />} />
                <Route path='/verify' element={<Verification />} />

              </Routes>
            </div>
        }

      </div>
    </BrowserRouter>
  );
}

export default App;
