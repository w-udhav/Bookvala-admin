import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import DataCat from '../DataCat';
import DataDisplay from '../DataDisplay'
import Lottie from 'lottie-react'
import loading from '../loading.json'
import { serverURL } from '../../App';
import DataDisplayRead from '../DataDisplayRead';



class Listed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        axios({
            method: 'get',
            url: `${serverURL}/api/admingetuploadedproduct/6`,
        }).then((res) => {
            this.setState({ data: res.data })
            // console.log(res.data)
        })
    }

    render() {
        const { data } = this.state;
        return (
            <div>
                <DataCat id='p6' />

                {(data.length == 0) ?
                    // <p className='text-4xl text-center my-40 text-red-600'> Data Not Available!</p> 
                    <div className='flex justify-center p-5'>
                        <Lottie animationData={loading} loop={true} />
                    </div>
                    :

                    data.map((e) => {
                        return (
                            <DataDisplayRead key={e["prod_id"]} model={e} />
                        )
                    })
                }

            </div>
        )
    }
}

export default Listed