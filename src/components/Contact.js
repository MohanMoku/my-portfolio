import React from 'react'
import Navbar from './Navbar'

const Contact = () => {

    const st = {
        display: 'flex',
        justifyContent: 'center'
    }

    return (
        <div className='Contact'>
            <div style={st}><Navbar /></div>
        </div>
    )
}

export default Contact
