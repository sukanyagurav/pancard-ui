import React, { useState } from 'react'

const Inputs = ({onSubmit}) => {
    const [panNo, setPanNo] = useState('')
    const [error,setError] = useState(false)
    function handlePanNo(e){
        setPanNo(e.target.value.toUpperCase())
    }
    function handleClick(e){
        e.preventDefault()
        var regpan =/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/
    
        if(regpan.test(panNo)){
            onSubmit({ userName:'Sukanya Gurav',panNo:panNo,fatherName:'Manohar Gurav',dob:'31/06/2000'})
        }else{
            onSubmit({ userName:'XXXX XXXX',panNo:'XXXX XXXX XX',fatherName:'XXXX XXXX',dob:'DD/MM/YYYY'})
            setTimeout(()=>{
                setError(false)
            },5000)
            setError(true)
        }
       

}
  return (
    <div className='right'>
      <form className='form'>
        <div className="form__control">
      
        <input type="text" id="panNo" placeholder=' '  value={panNo} maxLength={10} onChange={handlePanNo} />
        <label htmlFor="panNo">Enter 10-digit PAN</label>
        </div>
        {error &&  <span  className='error'>Oops you entered wrong pan number!</span>}
            <span>{panNo.length} / 10  </span>
        <button style={{backgroundColor:`${panNo.length == 10 ? '#8AA838' :'#CCCCCC' }`}} 
        onClick={handleClick}
        disabled={panNo.length === 10 ? false :true}
        >Verify</button>
      </form>
    </div>
  )
}

export default Inputs
