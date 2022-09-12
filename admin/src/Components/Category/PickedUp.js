import axios from 'axios';
import React from 'react'
import DataCat from '../DataCat';
import Lottie from 'lottie-react'
import loading from '../loading.json'
import { serverURL } from '../../App';
import { useState } from 'react';
import { useGlobalState } from '../../GlobalState';
import { useEffect } from 'react';
import DataDisplay from '../Display Data/DataDisplay';


function PickedUp() {
    const [data, setData] = useState([])
    var category = useGlobalState("category");

    const getData = () => {
        axios({
            method: 'get',
            url: `${serverURL}/api/admingetuploadedproduct/4`,
        }).then((res) => {
            setData(res.data);
        })
    }


    useEffect(() => {
        getData();
    }, [])

    return (
        <div>
            <DataCat id='p4' />

            {(data.length == 0) ?
                // <p className='text-4xl text-center my-40 text-red-600'> Data Not Available!</p> 
                (<div className='flex justify-center p-5'>
                    <Lottie animationData={loading} loop={true} />
                </div>)
                :
                category[0] == -1 ?

                    data.map((e) => {
                        return (
                            <DataDisplay key={e["prod_id"]} model={e} to="pickedupdetails" read={false} />
                        )
                    }) :

                    data.filter(e => e.category == category[0]).map((e) => {
                        return (
                            <DataDisplay key={e["prod_id"]} model={e} to="pickedupdetails" read={false} />
                        )
                    })
            }

        </div>
    )
}


export default PickedUp