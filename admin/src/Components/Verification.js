import React from 'react'
import Page from './Page';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Verification = (props) => {
    const location = useLocation();
    const model = location.state.data;
    const updateStatus = async (status) => {
        await axios.put(`https://backend.bookvala.com/api/updatesellingconfirmation/${model.prod_id}/${status}`)
            .then((res) => {
                console.log('done', res.data)
            })
    }
    return (
        <div className='p-10'>
            <div className='bg-white px-7 rounded-xl'>
                <div className='flex lg:flex-row md:flex-col items-center justify-evenly'>
                    <div className=''>
                        <Page id={model.prod_id} />
                    </div>
                    <div className='flex flex-col items-center'>
                        <div>
                            <p className='text-2xl font-bold'> Book Details </p>
                        </div>
                        <div className='flex flex-col my-5 space-y-1 text-lg'>
                            <div className='flex flex-row justify-between space-x-8'>
                                <div className=''>
                                    <p className='font-bold text-zinc-700'> Name: </p>
                                </div>
                                <div className=''>
                                    <p>
                                        {model.book_title}
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-row justify-between space-x-8'>
                                <div className=''>
                                    <p className='font-bold text-zinc-700'> Author: </p>
                                </div>
                                <div>
                                    <p>
                                        {model.book_author}
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-row justify-between space-x-8'>
                                <div className='flex-1'>
                                    <p className='font-bold text-zinc-700'> Condition: </p>
                                </div>
                                <div>
                                    <p>
                                        {model.book_condition}
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-row justify-between space-x-8'>
                                <div className='flex-1'>
                                    <p className='font-bold text-zinc-700'> Edition: </p>
                                </div>
                                <div>
                                    <p>
                                        {model.book_edition}
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-row justify-between space-x-8'>
                                <div className='flex-1'>
                                    <p className='font-bold text-zinc-700'> Market Price: </p>
                                </div>
                                <div>
                                    <p>
                                        ₹ {model.book_mrp}
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-row justify-between space-x-8'>
                                <div className='flex-1'>
                                    <p className='font-bold text-zinc-700'> Coins: </p>
                                </div>
                                <div className=''>
                                    <input
                                        type='number'
                                        className='rounded-lg border border-zinc-500 px-3 box-border w-16'
                                    />
                                </div>
                            </div>

                        </div>

                        <div className='flex lg:flex-row md:flex-col justify-between items-center space-x-6 my-8'>
                            <div className='flex'>
                                <button
                                    className='border border-cus-yellow rounded-full py-1 px-16 text-cus-yellow text-md font-semibold'
                                    onClick={() => updateStatus(5)}
                                >
                                    Reject
                                </button>
                            </div>
                            <div>
                                <button
                                    className='border border-cus-yellow bg-cus-yellow text-white rounded-full py-1 px-16 text-md font-semibold'
                                    onClick={() => updateStatus(2)}
                                >
                                    Approve
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Verification