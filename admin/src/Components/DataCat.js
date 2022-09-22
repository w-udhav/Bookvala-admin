import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom'
import ListSelector from './listSelector';

const DataCat = (props) => {
    const style = 'underline underline-offset-8 decoration-cus-yellow font-bold text-2xl';
    return (
        <div className='my-7'>
            <nav className='flex flex-row items-center justify-between mt-8 mb-4 border-zinc-400 box-border border-b pb-2'>
                <div className='lg:w-[70%]  flex flex-row justify-around items-center text-xl'>
                    <div className=''>
                        <Link to='/'>
                            <p className={`${props.id === 'p1' ? style : ""}`}> Uploaded </p>
                        </Link>
                    </div>
                    <div>
                        <Link to='/approved'>
                            <p className={`${props.id === 'p2' ? style : ""}`} id='p2' > Approved </p>
                        </Link>

                    </div>
                    <div>
                        <Link to='/confirmed'>
                            <p className={`${props.id === 'p3' ? style : ""}`} id='p3'> Confirmed </p>
                        </Link>

                    </div>
                    <div>
                        <Link to='/pickedup'>
                            <p className={`${props.id === 'p4' ? style : ""}`} id='p4'> Picked up </p>
                        </Link>
                    </div>
                    <div>
                        <Link to='/rejected'>
                            <p className={`${props.id === 'p5' ? style : ""}`} id='p5'> Rejected </p>
                        </Link>
                    </div>
                    <div>
                        <Link to='/listed'>
                            <p className={`${props.id === 'p6' ? style : ""}`} id='p6'> Listed </p>
                        </Link>
                    </div>
                </div>
            </nav>

            <ListSelector />
            <div className='flex flex-row justify-evenly text-md font-semibold text-center'>
                <div className='flex-1'>
                    <p> ID </p>
                </div>
                <div className='flex-1'>
                    <p>NAME</p>
                </div>
                <div className='flex-1'>
                    <p>STATUS</p>
                </div>
                <div className='flex-1'>
                    <p>PRICE</p>
                </div>
            </div>


        </div>
    )
}

export default DataCat