import React from 'react'
import Navbar from './Navbar'

const Project = () => {

    const st = {
        display: 'flex',
        justifyContent: 'center'
    }

    return (
        <div className='Project'>
            <div style={st}><Navbar /></div>
            
        </div>
    )
}

export default Project