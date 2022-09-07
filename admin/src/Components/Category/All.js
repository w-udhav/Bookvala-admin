import React from 'react'
import DataDisplay from '../DataDisplay'
import Verification from '../Verification'

const All = () => {
    return (
        <div>
            <DataDisplay id='#001' name='hello' date='13-05' status='pending' price='150' />
            <Verification trigger={true} />

        </div>
    )
}

export default All