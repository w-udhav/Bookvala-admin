import React from 'react'
import Page from './Page';

function Verification(props) {
    return (props.trigger) ? (
        <div className='w-full h-full bg-black/50 fixed top-0 left-0 p-10'>
            <div className='bg-white'>
                <div className='flex flex-row justify-center items-center py-5'>
                    <img src={require("../assets/BOOKVALA LOGO 4.png")} alt="Bookvala logo" width={"42px"} />
                    <img src={require("../assets/BOOKVALA LOGO 3.png")} alt="Bookvala" width={"158px"} />
                </div>
                <div className='flex lg:flex-row md:flex-col items-center justify-evenly'>
                    <div className=''>
                        <div>
                            <Page />
                        </div>
                        <div>
                            { }
                        </div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <div>
                            <p className='text-2xl font-bold'> Book Details </p>
                        </div>
                        <div className='flex flex-col my-5 space-y-1 text-lg'>
                            <div className='flex flex-row justify-between'>
                                <div className=''>
                                    <p className='font-bold text-zinc-700'> Name: </p>
                                </div>
                                <div className=''>
                                    <p>
                                        The Physics Book
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-row justify-between'>
                                <div className=''>
                                    <p className='font-bold text-zinc-700'> Author: </p>
                                </div>
                                <div>
                                    <p>
                                        Jim AL-Khalili
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-row justify-between'>
                                <div className='flex-1'>
                                    <p className='font-bold text-zinc-700'> Condition: </p>
                                </div>
                                <div>
                                    <p>
                                        Average
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-row justify-between'>
                                <div className='flex-1'>
                                    <p className='font-bold text-zinc-700'> Edition: </p>
                                </div>
                                <div>
                                    <p>
                                        2019 3rd Edition
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-row justify-between'>
                                <div className='flex-1'>
                                    <p className='font-bold text-zinc-700'> Market Price: </p>
                                </div>
                                <div>
                                    <p>
                                        ₹ 370
                                    </p>
                                </div>
                            </div>
                            <div className='flex lg:flex-row md:flex-col justify-between items-center space-x-6 '>
                                <div className='flex'>
                                    <button
                                        className='border border-cus-yellow rounded-full px-16 text-cus-yellow text-md font-semibold'
                                    >
                                        Reject
                                    </button>
                                </div>
                                <div>
                                    <button
                                        className='bg-cus-yellow text-white rounded-full px-16 text-md font-semibold'
                                    >
                                        Approve
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    ) : "";
}

export default Verification