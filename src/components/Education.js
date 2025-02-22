import React from 'react'
import Navbar from './Navbar'

const Education = () => {
  const st = {
    display: 'flex',
    justifyContent: 'center'
  }
  return (
    <div className='Education'>
      <div style={st}><Navbar /></div>
      <div1>
        <h1>2020 - 2026</h1>
        <div2>
          <div3>
            <h1>EDUCATION</h1>
            <hr />
            <p>I completed my secondary education with a strong academic foundation, followed by pre-university studies in PCMB, which sharpened my analytical skills. Currently pursuing a B.Tech in Computer Science, I am gaining expertise in programming, software development, and modern technologies, preparing me for a career in tech.</p>
          </div3>
          <div4 className='EduDetails'>
            <div5>
              <h1>Secondary School</h1>
              <h3>Morarji Desai Residential School | 2020</h3>
            </div5>
            <div5>
              <h1>Pre-University College</h1>
              <h3>Morarji Desai Residential PU College | P C M B | 2022</h3></div5>
            <div5>
            <h1>Bachelor Degree</h1>
            <h3>SDM Institute of Technology | Computer Science and Engineering | Currently pursuing</h3>
            </div5>
          </div4>
        </div2>
      </div1>
    </div>
  )
}

export default Education