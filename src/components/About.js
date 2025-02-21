import Navbar from './Navbar'

const About = () => {

  const st = {
    display: 'flex',
    justifyContent: 'center'
  }

  return (
    <div className='About'>
      <div style={st}><Navbar /></div>
      <div className='About-Content'>
          <h1>MY BIOGRAPHY</h1>
          <hr/>
          <p>As an engineering student specializing in Web Development and App Development, I have gained hands-on experience working with technologies like React, Node.js, and Android Studio. I have successfully completed projects such as an Online Library and Splitify, a native app, showcasing my ability to build scalable and user-friendly applications. My technical expertise includes proficiency in Java, JavaScript, Python, and Data Structures & Algorithms (DSA).</p>
          <p>I am passionate about creating innovative solutions and continuously enhancing my skills in full-stack development and mobile app development. My strong foundation in programming and problem-solving enables me to tackle complex challenges and deliver efficient, high-quality results.</p>
          <h1>Skill & Interest</h1>
          <div>
            <h3>Python</h3>
            <h3>JavaScript</h3>
            <h3>DSA</h3>
            <h3>Oop's</h3>
          </div>
          <div>

          </div>
          
      </div>
    </div>
  )
}

export default About