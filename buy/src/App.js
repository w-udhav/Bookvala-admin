import './App.css';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dispatched from './Components/Category/Dispatched';
import Delivery from './Components/Category/Delivery';
import Disapproved from './Components/Category/Disapproved';
import Received from './Components/Category/Received'
import Verification from './Components/Verification';
import { useState } from 'react';
import PickedUpDetails from './Components/PickedUpDetails';

const serverURL = "https://backend.bookvala.com"


function App() {
  const [loginStatus, setLoginStatus] = useState(false);
  return (
    <BrowserRouter>
      <div className="lg:px-[9%] bg-[#FCFCFC]">
        {/* <Login /> */}
        <Navbar />
        {
          loginStatus ?
            <Login />
            :
            <div>
              <Routes>
                {/* <Route path='/' element={<Login />} /> */}
                <Route path='/' element={<Received />} />
                <Route path='/dispatched' element={<Dispatched />} />
                <Route path='/delivery' element={<Delivery />} />
                <Route path='/disapproved' element={<Disapproved />} />
                <Route path='/verify' element={<Verification />} />
                <Route path='/pickedupdetails' element={<PickedUpDetails />} />
              </Routes>
            </div>
        }

      </div>
    </BrowserRouter>
  );
}

export default App;
export { serverURL };