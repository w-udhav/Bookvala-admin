import React from 'react'
import { Link } from 'react-router-dom'
import DataCat from './DataCat'

const Navbar = () => {
    return (
        <div className='flex flex-col'>
            <div className='flex justify-center items-center my-10'>
                <img src={require("../assets/BOOKVALA LOGO 4.png")} alt="Bookvala logo" width={"42px"} />
                <img src={require("../assets/BOOKVALA LOGO 3.png")} alt="Bookvala" width={"158px"} />
            </div>
            {/* <div className='w-full flex flex-row justify-between items-center lg:px-12 md:px-6 mb-4'>
                <div>
                    <p className='font-bold lg:text-5xl'> Approvals </p>
                </div>
                <div>
                    Calender
                </div>
            </div> */}

        </div>
    )
}

export default Navbar