import React, { useState } from 'react'
import '../../App.css';

const DataDisplayRead = (props) => {
    const status = ["Uploaded", "Approved", "Confirmed", "Picked up", "Rejected", "Listed"]
    const { model } = props;
    return (
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
    )
}

export default DataDisplayRead