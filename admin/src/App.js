import './App.css';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Rejected from './Components/Category/Rejected';
import Approved from './Components/Category/Approved';
import Confirmed from './Components/Category/Confirmed';
import PickedUp from './Components/Category/PickedUp';
import Uploaded from './Components/Category/Uploaded'
import Verification from './Components/Verification';
import { useState } from 'react';
import PickedUpDetails from './Components/PickedUpDetails';
import Listed from './Components/Category/Listed';
import ProductDetail from './Components/ProductDetail';
import FinalListing from './Components/FinalListing';

const serverURL = "https://backend.bookvala.com"
// const serverURL = "http://10.0.22.72:8000"

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
                <Route path='/listed' element={<Listed />} />

                {/* Verified routes */}
                <Route path='/verify' element={<Verification />} />
                <Route path='/pickedupdetails' element={<PickedUpDetails />} />
                <Route path='/confirmedtopicked' element={<ProductDetail />} />
                <Route path='/finallisting' element={<FinalListing />} />
              </Routes>
            </div>
        }

      </div>
    </BrowserRouter>
  );
}

export default App;
export { serverURL };