import React from 'react'

const Navbar = () => {
    return (
        <div className='flex flex-col'>
            <div className='flex justify-center items-center my-10'>
                <img src={require("../assets/BOOKVALA LOGO 4.png")} alt="Bookvala logo" width={"42px"} />
                <img src={require("../assets/BOOKVALA LOGO 3.png")} alt="Bookvala" width={"158px"} />
            </div>
        </div>
    )
}

export default Navbar