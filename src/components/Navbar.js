import React from 'react'

const Navbar = () => {

  const lastPart = window.location.pathname.split('/').filter(Boolean).pop();

  return (
    <div className='Nav'>
      <nav>
        <span id='NameInNav' onClick={() => window.location.href = '/'} >MOHAN KUMAR S</span>
        <span id='AboutInNav' onClick={() => window.location.href = '/about'} style={{ color: lastPart === 'about' ? 'aqua' : 'white' }}>ABOUT ME</span>
        <span id='EduInNav' onClick={() => window.location.href = '/education'} style={{ color: lastPart === 'education' ? 'aqua' : 'white' }}>EDUCATION</span>
        <span id='ExpInNav' onClick={() => window.location.href = '/experience'} style={{ color: lastPart === 'experience' ? 'aqua' : 'white' }}>EXPERIENCE</span>
        <span id='ProInNav' onClick={() => window.location.href = '/projects'} style={{ color: lastPart === 'projects' ? 'aqua' : 'white' }}>PROJECTS</span>
        <span id='ContactInNav' onClick={() => window.location.href = '/contact'} style={{ color: lastPart === 'contact' ? 'aqua' : 'white' }}>CONTACT</span>
      </nav>
    </div>
  )
}

export default Navbar