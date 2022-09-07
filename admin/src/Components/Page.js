import axios from 'axios';
import React from 'react'

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: []
        }
    }

    componentDidMount() {
        axios.get(`https://backend.bookvala.com/api/getimages/${this.props.id}`)
            .then((res) => {
                this.setState({ images: Object.values(res.data) })
                // console.log(this.state.images)
            })
    }
    render() {
        return (
            <div className='flex flex-wrap justify-center items-center'>
                {
                    this.state.images.map((e) => {
                        return (
                            <div className='rounded-xl shadow-lg my-8 mx-2'>
                                <img src={e} alt='page' width={"300px"} className='rounded-xl hover:scale-150 transition-all' />
                            </div>
                        )
                    })
                }

            </div>
        )
    }
}

export default Page