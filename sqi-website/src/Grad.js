import React from 'react'

const grad = () => {
  return (
    <>
    <div className="bg-grad py-3">
        <div className="container d-flex align-items-center justify-content-around">
            <img className='grad-img my-5' src={require("./images/sqi-graduate1.jpg")} alt=""/>

            <div className="grad-txt mb-5">
                <h2>Making Africa a <br /> Tech Continent…</h2>
                <p>We focus on quality teaching, learning and <br /> training to the globally acceptable productivity <br /> standard in accordance with the requirements of <br /> the industry, for which necessary research and <br /> preparation of courses are ensured to make <br /> industry-ready professionals.</p>
                <p>SQI College of ICT is closely watching the <br /> interaction of industry and academia, getting <br /> feedback from our industry partners to provide <br /> the needed training while concentrating to <br /> contribute industry needed professionals in a very <br /> flexible study structure.</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default grad