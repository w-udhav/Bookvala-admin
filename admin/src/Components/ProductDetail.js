import React, { useEffect, useState } from 'react'
import Page from './Page';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import Lottie from 'lottie-react';
import animation from './animation.json';
import { motion } from 'framer-motion'
import { serverURL } from '../App'

const ProductDetail = (props) => {
    const location = useLocation();
    const model = location.state.data;
    const [approval, setApproval] = useState(false);
    const [err, setErr] = useState('');
    // const [option, setOption] = useState(0);

    const updateStatus = async (status) => {
        await axios.post(`${serverURL}/api/adminupdatestatus/${model.prod_id}`, { status: status })
            .then((res) => {
                setApproval(true);

            })
            .catch(err => {
                setErr(err);
                setApproval(false);
            })
    }
    const condition = ["Bad", "Average", "Good"];
    return (
        <div className='p-10'>
            <Link to='/confirmed'>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} className='fixed top-6 left-16 rounded-full shadow-sm shadow-cus-yellow py-5 px-4'>
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
                    <div className=' flex flex-col my-5 space-y-3 text-xl'>
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
                                    {condition[model.book_condition - 1]}
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

                    </div>

                    {
                        !approval ?
                            <div className='flex lg:flex-row md:flex-col justify-between items-center space-x-6 my-8'>
                                <motion.div>
                                    <motion.button
                                        className='border border-cus-yellow bg-cus-yellow text-white rounded-full py-1 px-16 text-md font-semibold'
                                        onClick={() => updateStatus(4)}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        Move to Picked up
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

export default ProductDetail