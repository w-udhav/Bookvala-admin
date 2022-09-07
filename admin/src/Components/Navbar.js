import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex flex-col'>
            <div className='flex justify-center items-center my-10'>
                <img src={require("../assets/BOOKVALA LOGO 4.png")} alt="Bookvala logo" width={"42px"} />
                <img src={require("../assets/BOOKVALA LOGO 3.png")} alt="Bookvala" width={"158px"} />
            </div>
            <div className='w-full flex flex-row justify-between items-center lg:px-12 md:px-6 mb-4'>
                <div>
                    <p className='font-bold lg:text-5xl'> Approvals </p>
                </div>
                <div>
                    Calender
                </div>
            </div>

            <nav className='flex flex-col mt-8 mb-4 border-zinc-400 box-border border-b pb-3'>
                <div className='lg:w-[50%]  flex flex-row justify-around font-semibold text-xl'>
                    <div className='underline underline-offset-8 decoration-cus-yellow'>
                        <Link to='/'>
                            <p className='font-bold text-2xl'> All </p>
                        </Link>
                    </div>
                    <div>
                        <Link to='/pending'>
                            <p> Pending </p>
                        </Link>

                    </div>
                    <div>
                        <Link to='/approved'>
                            <p> Approved </p>
                        </Link>

                    </div>
                    <div>
                        <Link to='/rejected'>
                            <p> Rejected </p>
                        </Link>
                    </div>

                </div>
            </nav>


        </div>
    )
}

export default Navbar