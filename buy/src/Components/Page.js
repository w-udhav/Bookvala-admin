import axios from 'axios';
import React from 'react'
import { motion } from 'framer-motion'



class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            count: 0
        }
    }

    componentDidMount() {
        axios.get(`https://backend.bookvala.com/api/getimages/${this.props.id}`)
            .then((res) => {
                this.setState({ images: Object.values(res.data) })
                // console.log(this.state.images)
            })
    }

    componentDidUpdate() {

    }


    handleChange = (status) => {
        console.log(this.state.count)
        // if (status == 0) {
        //     let updateVal1 = (this.state.images.length) - ((this.state.count + 1) % this.state.images.length)
        //     console.log(updateVal1 + " count : " + this.state.count)
        //     //     this.setState({ count: updateVal1 })
        // }

        if (status == 1) {
            let updateVal = (this.state.count + 1) % this.state.images.length
            return this.setState({ count: updateVal })
        }
    }

    render() {
        // console.log(imageUrls)
        const { images, count } = this.state;
        return (
            <div className='flex flex-wrap justify-center items-center box-border py-3'>
                <div className='flex flex-col items-center space-y-11'>
                    <div className=''>
                        <img
                            src={images[count]}
                            className="w-full rounded-md shadow-xl"
                        />
                    </div>
                    <motion.div>
                        <motion.button
                            className='border border-cus-yellow bg-cus-yellow text-white rounded-full py-1 px-7 text-md'
                            onClick={() => this.handleChange(1)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            Next
                        </motion.button>
                    </motion.div>

                </div>
            </div>


        )
    }
}

export default Page