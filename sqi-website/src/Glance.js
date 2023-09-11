import React from 'react'

const Glance = () => {

    const same = {
        color:"blue",
        cursor:"pointer"
     }

  return (
    <>
         <div className='glance mb-5'>
        <div className="right py-5">
        <div className="glance-txt">
          <h3>SCICT AT A GLANCE</h3>
          <p>
            SQI College of ICT offers both <span style={same}>National Diploma</span> and
            <span style={same}> Professional <br /> Certificate programmes.</span>
          </p>
          <p>The diploma Certificate conforms with the standard National Diploma <br /> Certificate obtained in Polytechnics while the 
            Professional certificate is <br /> the certificate you earn after taking a professional course here at SQI.</p>
            <p className=''>You can use the Diploma certificate to seek admissions into the <br /> University through Direct Entry or for Higher National Diploma (HND). <br /> While the professional Certificate is recognized worldwide not as a <br /> degree but as a proof of 
              having undergone professional training in the <br /> field for which the certificate is issued.</p>
              <div className="glance-btn mt-4 d-flex">Learn More &nbsp;&nbsp; <span className='icon'><i class="fa fa-chevron-right"></i></span></div>
        </div>
        </div>
       
    </div>
    </>
  )
}

export default Glance