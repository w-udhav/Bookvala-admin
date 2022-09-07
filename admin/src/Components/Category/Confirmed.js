import axios from 'axios';
import React from 'react'
import DataCat from '../DataCat';
import DataDisplay from '../DataDisplay';

class Confirmed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        axios({
            method: 'get',
            url: "https://backend.bookvala.com/api/admingetuploadedproduct/3",
        }).then((res) => {
            this.setState({ data: res.data })
            // console.log(res.data)
        })
    }

    render() {
        const { data } = this.state;
        return (
            <div>
                {/* <DataDisplay id='' name='' date='' status='' price='' setTrigger='' /> */}
                {/* <Verification trigger={trigger} setTrigger={setTrigger} /> */}
                <DataCat />

                {(data.length == 0) ?
                    <p className='text-4xl text-center my-40 text-red-600'> Data Not Available !</p> :

                    data.map((e) => {
                        return (
                            <DataDisplay key={e["prod_id"]} model={e} />

                        )
                    })
                }
            </div>
        )
    }
}


export default Confirmed