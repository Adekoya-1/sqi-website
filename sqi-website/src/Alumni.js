import React from 'react'

const Alumni = () => {
    return (
    <>
<div className="container px-5 pt-5 mt-5">
    <h2 className='mb-5 pb-3'>Our alumni work at world-class <br /> companies around the world including</h2>
    <div className="img-cont d-flex align-items-center justify-content-between mb-5">
    <img className='img-img' src={require("./images/google.png")} alt=""/>
    <img className='img-img' src={require("./images/Interswitch.png")} alt=""/>
    <img className='img-img' src={require("./images/Andela-log-landscape-blue-400px.png")} alt=""/>
    <img className='img-img' src={require("./images/Microsoft_logo.png")} alt=""/>
    </div>

    <div className="img-cont d-flex align-items-center justify-content-between mb-5">
    <img className='img-img' src={require("./images/Paystack.png")} alt=""/>
    <img className='img-img' src={require("./images/brewery.png")} alt=""/>
    <img className='img-img' src={require("./images/Wema-Bank-Logo.png")} alt=""/>
    <img className='img-img' src={require("./images/clan-logo.png")} alt=""/>
    </div>

    <div className="img-cont d-flex align-items-center justify-content-between mb-5">
    <img className='img-img' src={require("./images/edozzier.png")} alt=""/>
    <img className='img-img' src={require("./images/moneymie.png")} alt=""/>
    <img className='img-img' src={require("./images/Nigerian_Army.png")} alt=""/>
    <img className='img-img' src={require("./images/aella-credit.png")} alt=""/>
    </div>
</div>
    </>
    )
}

export default Alumni