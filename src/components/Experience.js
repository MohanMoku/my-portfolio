import React from 'react'
import Navbar from './Navbar'

const Experience = () => {

    const st = {
        display: 'flex',
        justifyContent: 'center'
    }

    return (
        <div className='Experience'>
            <div style={st}><Navbar /></div>
            <div1>
                <div2>
                    <div5>
                        <h1>EXPERIENCE</h1>
                        <hr/>
                    </div5>
                    <h1>2024</h1>
                </div2>

                <div3>
                    <div4>
                    <img width="48" height="48" src="https://img.icons8.com/fluency/48/double-right.png" alt="double-right"/>
                    <div6>
                        <h2>SDM Institute of Technology</h2>
                        <h3>Hackathon</h3>
                    </div6>
                    <p>Participated in a Hackathon at SDMIT, where my team and I developed FarmDirect—a platform connecting farmers and consumers directly. It was an incredible experience, enhancing my skills and collaboration.</p>
                    </div4>
                    <div4>
                    <img width="48" height="48" src="https://img.icons8.com/fluency/48/double-right.png" alt="double-right"/>
                    <div6>
                        <h2>Alvas Engineering College</h2>
                        <h3>Hackathon</h3>
                    </div6>
                    <p className='P1inExp'>Participated in a Hackathon at Alva's Engineering College, where my team and I developed a GigWorker platform—designed to connect freelancers with job opportunities. It was an amazing experience, enhancing my technical skills and team collaboration.</p>
                    </div4>
                    
                </div3>
            </div1>
        </div>
    )
}

export default Experience