import React, { useState } from 'react'
import Page from './Page';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import Lottie from 'lottie-react';
import animation from './animation.json';
import { motion } from 'framer-motion'

const Verification = (props) => {
    const location = useLocation();
    const model = location.state.data;
    const [approval, setApproval] = useState(false);
    const [err, setErr] = useState('');

    const updateStatus = async (status) => {
        await axios.put(`https://backend.bookvala.com/api/updatesellingconfirmation/${model.prod_id}/${status}`)
            .then((res) => {
                setApproval(true);
            })
            .catch(err => {
                setErr(err);
                setApproval(false);
            })
    }
    return (
        <div className='p-10'>
            <Link to='/'>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className='absolute top-6 left-16 rounded-full shadow-sm shadow-cus-yellow py-5 px-4'>
                    {/* <p className='text-2xl'> &lt; </p> */}
                    <motion.button> Back </motion.button>
                </motion.div>
            </Link>

            <div className='flex lg:flex-row md:flex-col items-start justify-evenly'>
                <div className='flex-1'>
                    <Page id={model.prod_id} />
                </div>
                <div className='flex-1 flex flex-col items-center sticky top-28'>
                    <div className='my-5'>
                        <p className='text-4xl font-bold'> Book Details </p>
                    </div>
                    <div className='flex flex-col my-5 space-y-2 text-lg'>
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

                    {
                        !approval ?
                            <div className='flex lg:flex-row md:flex-col justify-between items-center space-x-6 my-8'>
                                <motion.div className='flex'>
                                    <motion.button
                                        className='border border-cus-yellow rounded-full py-1 px-16 text-cus-yellow text-md font-semibold'
                                        onClick={() => updateStatus(5)}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        Reject
                                    </motion.button>
                                </motion.div>
                                <motion.div>
                                    <motion.button
                                        className='border border-cus-yellow bg-cus-yellow text-white rounded-full py-1 px-16 text-md font-semibold'
                                        onClick={() => updateStatus(2)}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        Approve
                                    </motion.button>
                                </motion.div>
                            </div> :
                            <Lottie animationData={animation} loop={true} />

                    }
                    {
                        err != "" ?
                            <div>
                                <p className='text-lg text-red-600'> {err} </p>
                            </div> : ""
                    }
                </div>

            </div>
        </div>
    )
}

export default Verification