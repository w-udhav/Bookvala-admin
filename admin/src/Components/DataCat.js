import React from 'react'
import { Link } from 'react-router-dom'

const DataCat = () => {
    return (
        <div className='my-7'>
            <nav className='flex flex-col mt-8 mb-4 border-zinc-400 box-border border-b pb-3'>
                <div className='lg:w-[70%]  flex flex-row justify-around font-semibold text-xl'>
                    <div className='underline underline-offset-8 decoration-cus-yellow'>
                        <Link to='/'>
                            <p className='font-bold text-2xl'> Uploaded </p>
                        </Link>
                    </div>
                    <div>
                        <Link to='/approved'>
                            <p> Approved </p>
                        </Link>

                    </div>
                    <div>
                        <Link to='/confirmed'>
                            <p> Confirmed </p>
                        </Link>

                    </div>
                    <div>
                        <Link to='/pickedup'>
                            <p> Picked up </p>
                        </Link>
                    </div>
                    <div>
                        <Link to='/rejected'>
                            <p> Rejected </p>
                        </Link>
                    </div>

                </div>
            </nav>
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