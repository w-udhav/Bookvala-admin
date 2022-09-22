import axios from 'axios';
import React from 'react'
import DataCat from '../DataCat';
import DataDisplayRead from '../Display Data/DataDisplayRead';
import Lottie from 'lottie-react'
import loading from '../loading.json'
import { serverURL } from '../../App';
import { useGlobalState } from '../../GlobalState';
import { useEffect } from 'react';
import { useState } from 'react';
import DataDisplay from '../Display Data/DataDisplay';

function Confirmed() {
    const [data, setData] = useState([])
    var category = useGlobalState("category");

    const getData = () => {
        axios({
            method: 'get',
            url: `${serverURL}/api/admingetuploadedproduct/3`,
        }).then((res) => {
            setData(res.data);
        })
    }


    useEffect(() => {
        getData();
    }, [])

    return (
        <div>

            <DataCat id='p3' />

            {(data.length == 0) ?
                // <p className='text-4xl text-center my-40 text-red-600'> Data Not Available !</p> 
                <div className='flex justify-center p-5'>
                    <Lottie animationData={loading} loop={true} />
                </div>
                :
                category[0] == -1 ?

                    data.map((e) => {
                        return (
                            <DataDisplay key={e["prod_id"]} model={e} read={true} />
                        )
                    }) :

                    data.filter(e => e.category == category[0]).map((e) => {
                        return (
                            <DataDisplay key={e["prod_id"]} model={e} read={true} />
                        )
                    })
            }
        </div>
    )
}


export default Confirmed