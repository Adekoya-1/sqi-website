import React from 'react'

const study = () => {
  return (
    <>
    <div className="big">
        <div className=" big1 d-flex justify-content-between align-items-center mb-4">
            <div className="one">
                <h1>Study to <br /> become a <br /> global talent</h1>
                <p>Learn new tech skills using world-class curriculum and top <br /> industry experts.</p>
                <button className="bot mt-4">Start Now</button>
            </div>
            <div className="two">
                <img className='big-img' src={require("./images/sqimodel.png")} alt="sqimodel."/>
            </div>
        </div>
    </div>
    </>
  )
}

export default study