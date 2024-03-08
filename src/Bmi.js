import React, { useState } from 'react'
import './Bmi.css'
import BMI from './Images/BMI.png'

const Bmi = () => {
    const [height, setHeight] = useState("")
    const [weight, setWeight] = useState("")
    const [bmi, setBmi] = useState(null)
    const [bmistatus,setBmiStatus] = useState("")

   function calculate(){
        if (height && weight){
            const heightInMeters = height/100
            const bmivalue = weight/(heightInMeters*heightInMeters)
            setBmi(bmivalue.toFixed(2))
            if (bmivalue < 18.5){
                setBmiStatus("UnderWeight")
            } else if (bmivalue >= 18.5 && bmivalue < 24.9){
                setBmiStatus("Normal Weight")
            }else if(bmivalue >= 25 && bmivalue < 29.9){
                setBmiStatus("OverWeight")
            }else{
                setBmiStatus("Obese")
            }
        }else{
            setBmi(null)
            setBmiStatus("")
        }
   }
function clearAll(){
    setHeight("")
    setWeight("")
    setBmi(null)
    setBmiStatus("")
}

  return (
    <div className='container'>
        <div className='box'>
            
            <h1>BMI CALCULATOR</h1>
            <img src={BMI} alt="Bmi" />
            <label htmlFor="height" className='input-label'>Height (cm):</label>
            <input type="text"  id='height' onChange={(e)=>setHeight(e.target.value)}/>
            <label htmlFor="weight" className='input-label'>Weight (kg):</label>
            <input type="text"  id='weight' onChange={(e)=>setWeight(e.target.value)}/>
                <div className='btn'> <button onClick={calculate} className='cal'> Calculate BMI </button>
                <button className='clear'onClick={clearAll}>Clear</button></div>
            {bmi !== null &&(
            <div className='result'>
                <p>Your BMI is {bmi}</p>
                <p>Status: {bmistatus}</p>
            </div>)}
        </div>
        
      </div>
  )
}

export default Bmi
