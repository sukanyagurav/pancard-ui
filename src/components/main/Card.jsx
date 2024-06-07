import React from 'react'

const Card = ({panNo}) => {
  return (
    <div className='left card'>
        <div className="card__header">
            <h2>INCOME TAX DEPARTMENT</h2>
            <img src="http://3.bp.blogspot.com/_UNb0Gv2vxYA/TRSZ89yAvoI/AAAAAAAAACs/Vh6FcHqjXNY/w1200-h630-p-k-no-nu/250px-Emblem_of_India_svg.png" alt="three headed lion"  />
            <h2>GOVT. OF INDIA</h2>
       </div>
      <p>PAN Holders <span className='name'>{panNo.userName || 'XXXX XXXX'}</span></p>
      <p>Fathers Name <span className='name'>{panNo.fatherName || 'XXXX XXXX'}</span></p>
     <p>Date of birth <span> {panNo.dob || 'DD/MM/YYYY'}</span></p>
     <p>PAN Number <span>{panNo.panNo || 'XXXX XXXX XX'}</span></p>
    </div>
  )
}

export default Card
