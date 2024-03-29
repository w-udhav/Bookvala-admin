import React, { useState } from 'react'
import '../../App.css';
import { Link } from 'react-router-dom';

const DataDisplay = (props) => {
    const status = ["Uploaded", "Approved", "Confirmed", "Picked up", "Rejected", "Listed"]
    const { model } = props;
    const read = props.read;
    return (
        <div>
            {
                !read ?
                    <Link to={`/${props.to}`} state={{ data: model }}
                    >
                        <div className='flex flex-row justify-evenly items-center text-center rounded-full py-5 withShadow'>
                            <div className='flex-1'>
                                <p> {model["prod_id"]} </p>
                            </div>
                            <div className='flex-1'>
                                <p> {model["book_title"]} </p>
                            </div>
                            <div className='flex-1'>
                                <p>{status[model["status"] - 1]} </p>
                            </div>
                            <div className='flex-1'>
                                <p> ₹ {model["book_mrp"]} </p>
                            </div>
                        </div>
                    </Link> :

                    <div className='flex flex-row justify-evenly items-center text-center rounded-full py-5 withShadow'>
                        <div className='flex-1'>
                            <p> {model["prod_id"]} </p>
                        </div>
                        <div className='flex-1'>
                            <p> {model["book_title"]} </p>
                        </div>
                        <div className='flex-1'>
                            <p>{status[model["status"] - 1]} </p>
                        </div>
                        <div className='flex-1'>
                            <p> ₹ {model["book_mrp"]} </p>
                        </div>
                    </div>

            }
        </div>
    )
}

export default DataDisplay