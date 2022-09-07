import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import DataCat from '../DataCat';
import DataDisplay from '../DataDisplay'
import Verification from '../Verification'

// const Uploaded = () => {
//     const [trigger, setTrigger] = useState(false);
//     const [data, setData] = useState();
//     axios({
//         method: 'get',
//         url: "https://backend.bookvala.com/api/admingetuploadedproduct/1",
//     })
//         .then(function (res) {
//             console.log(res.data)
//             setData(res.data[0])
//         })

//     return (
//         <div>
//             <DataDisplay id='' name='' date='' status='' price='' setTrigger={setTrigger} />
//             <Verification trigger={trigger} setTrigger={setTrigger} />

//             {
//                 data.map(() => {
//                     <DataDisplay id={data["prod_id"]} />
//                 })
//             }
//         </div>
//     )
// }

class Uploaded extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            book: {
                name: '',
                author: '',
                condition: '',
                edition: '',
                marketPrice: '',
                trigger: false
            }
        }
    }

    handleChange = () => {
        this.setState({
            book: {
                trigger: !this
            }
        })
    }

    componentDidMount() {
        axios({
            method: 'get',
            url: "https://backend.bookvala.com/api/admingetuploadedproduct/1",
        }).then((res) => {
            this.setState({ data: res.data })
            // console.log(res.data)
        })
    }

    render() {
        const { data } = this.state;
        const { name, author, condition, edition, marketPrice, trigger } = this.state.book;
        return (
            <div>
                {/* <DataDisplay id='' name='' date='' status='' price='' setTrigger='' /> */}
                {/* <Verification trigger={trigger} setTrigger={setTrigger} /> */}
                <DataCat />

                {(data.length == 0) ?
                    <p className='text-4xl text-center my-40 text-red-600'> Data Not Available !</p> :

                    data.map((e) => {
                        // console.log(e)
                        return (
                            <DataDisplay key={e["prod_id"]} model={e} />
                        )
                    })
                }

            </div>
        )
    }
}

export default Uploaded