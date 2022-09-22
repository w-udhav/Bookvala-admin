import axios from 'axios';
import React, { useState, useEffect } from 'react'
import DataCat from '../DataCat';
import DataDisplay from '../Display Data/DataDisplay'
import Lottie from 'lottie-react'
import loading from '../loading.json'
import { serverURL } from '../../App';
import { useGlobalState } from '../../GlobalState';


function Uploaded() {
    const [data, setData] = useState([])
    var category = useGlobalState("category");

    const getData = () => {
        axios({
            method: 'get',
            url: `${serverURL}/api/admingetuploadedproduct/1`,
        }).then((res) => {
            setData(res.data);
        })
    }


    useEffect(() => {
        getData();
    }, [])

    return (
        <div>
            <DataCat id='p1' />

            {(data.length == 0) ?
                // <p className='text-4xl text-center my-40 text-red-600'> Data Not Available!</p> 
                (<div className='flex justify-center p-5'>
                    <Lottie animationData={loading} loop={true} />
                </div>)
                :
                category[0] == -1 ?

                    data.map((e) => {
                        return (
                            <DataDisplay key={e["prod_id"]} model={e} to="verify" />
                        )
                    }) :

                    data.filter(e => e.category == category[0]).map((e) => {
                        return (
                            <DataDisplay key={e["prod_id"]} model={e} to="verify" />
                        )
                    })
            }

        </div>
    )
}

export default Uploaded