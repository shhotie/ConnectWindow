import './OTP.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {verifyOtp} from '../services/user_service';
function OTP() {
    let navigate = useNavigate();
    const [otp, setotp] = useState(new Array(4).fill(''));
    const handleChange = (element, index) => {
        if (isNaN(element.value))
            return false;

        setotp([...otp.map((d, idx) => (idx === index) ? element.value : d)]);

        //focus next input

        if (element.nextSibling) {
            element.nextSibling.focus();
            
        }
    };

    

      
    const otpHandler = (e)=>{
        // ()=>{navigate('/FormComponent')}
        e.preventDefault();
        var num = Number(otp.join(''));
        verifyOtp(num)
        .then((resp)=>{
            if(resp){
                console.log(num);
               console.log(resp);
                setTimeout(() => {
                    navigate('/FormComponent')
                  }, 1000);
               // navigate('/FormComponent')
            }
        })
        .catch(()=>{
            
        });
        
        
    }

    return (
        <div className='otpOuterDiv'>
        <div className="container-otp" id="container">
            <p className='para'>Enter OTP Code </p>
            <form>
                <div className="otp-box" >
                    {
                        otp.map((data, index) => {
                            return (<input className='otp-field' type='text' name='otp' maxLength='1' key={index} value={data} onChange={e => handleChange(e.target, index)} onFocus={e => e.target.select()}></input>);
                        })
                    }
                </div>
                <p>OTP Entered -{otp.join("")}</p>
                <div>
                    <button className='btn' onClick={otpHandler}>Verify</button>
                </div>
            </form>
        </div>
</div>
    );
}

export default OTP; 
