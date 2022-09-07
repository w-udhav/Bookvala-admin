import React, { useState } from 'react'
import '../App.css';
import Verification from './Verification';

const DataDisplay = (props) => {
    const { id, name, date, status, price } = props;

    const handleClick = () => {
        console.log("hit")
    }

    return (
        <div onClick={handleClick} className='flex flex-row justify-evenly items-center text-center rounded-full py-5 withShadow'>
            <div className='flex-auto'>
                <p> {id} </p>
            </div>
            <div className='flex-auto'>
                <p> {name} </p>
            </div>
            <div className='flex-auto'>
                <p> {date} </p>
            </div>
            <div className='flex-auto'>
                <p>{status}</p>
            </div>
            <div className='flex-auto'>
                <p> ₹{price} </p>
            </div>
        </div>
    )
}

export default DataDisplay