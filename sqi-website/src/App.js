import React from 'react'

const App = () => {
  return (
    <>
    <div className="bor">
    <div className="container d-flex px-5 py-2 justify-content-between align-items-center">
      <div className='log'>
      <img className='logo' src={require("./images/sqi logo.jpg")} alt=""/>
      </div>

    <div className="downs d-flex">
    <div className="drops">
        <ul>
        <div className="drop">
              <li>About &nbsp; <i className='fa fa-chevron-down'></i></li>
              <div className="dropdown">
              <p>Our Story</p>
                <p>Our Team</p>
                <p>Campus info</p>
              </div>
              </div>
          {/* <li><p>About <i className="fa-thin fa-chevron-down" style={{color: "#081f89;"}}></i></p></li> */}
        </ul>
      </div>

      <div className="drop">
        <ul>
        <div className="drop">
              <li>Programmes &nbsp; <i className='fa fa-chevron-down'></i></li>
              <div className="dropdown">
              <p>National Innovation <br /> Diploma</p>
                <p>Professional Diploma <br /> Program</p>
                <p>Executive Professional <br /> Certificate</p>
                <p>Programme</p>
              </div>
              </div>
          {/* <li><p>About <i className="fa-thin fa-chevron-down" style={{color: "#081f89;"}}></i></p></li> */}
        </ul>
      </div>

      <div className="drop">
        <ul>
        <div className="drop">
              <li>Admissions &nbsp; <i className='fa fa-chevron-down'></i></li>
              <div className="dropdown">
              <p>Apply for a<br />Programme</p>
                <p>Mode of Study</p>
                <p>Tuition</p>
                <p>Frequently Asked<br />Questions</p>
              </div>
              </div>
          {/* <li><p>About <i className="fa-thin fa-chevron-down" style={{color: "#081f89;"}}></i></p></li> */}
        </ul>
      </div>

      <div className="drop">
        <ul>
        <div className="drop">
              <li className='nono'>E-Portal &nbsp; <i className='fa fa-chevron-down'></i></li>
              <div className="dropdown">
              <p>Student</p>
                <p>Staff</p>
              </div>
              </div>
          {/* <li><p>About <i className="fa-thin fa-chevron-down" style={{color: "#081f89;"}}></i></p></li> */}
        </ul>
      </div>

        <div className="drop">
          <li>SQI Scholarship</li>
        </div>
        <div className="drop">
          <li>News</li>
        </div>

    </div>
    </div>
    </div>
    </>
  )
}

export default App