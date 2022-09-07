import React from 'react'

const DataCat = () => {
    return (
        <div className='my-7'>
            <div className='flex flex-row justify-evenly text-md font-semibold text-center'>
                <div className='flex-auto'>
                    <p> ID </p>
                </div>
                <div className='flex-auto'>
                    <p>NAME</p>
                </div>
                <div className='flex-auto'>
                    <p>DATE </p>
                </div>
                <div className='flex-auto'>
                    <p>STATUS</p>
                </div>
                <div className='flex-auto'>
                    <p>PRICE</p>
                </div>
            </div>
        </div>
    )
}

export default DataCat