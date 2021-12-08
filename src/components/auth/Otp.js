import React from 'react';

const Otp = ({ handleOtp, submitOtp}) => {
    return (
        <div className="sign_in_div_elements">
            <div className="sign_in_div_heading">
            <p className="sign-in-text">Enter OTP</p>
            </div>
            <div className="sign_in_div_input">
            <p>OTP received on Mobile Number</p>
            <input
                type="number" 
                onChange={handleOtp}
            />
            </div>
            <div className="sign_in_div_button">
                <button onClick={submitOtp}>Submit</button>
            </div>
        </div>
    )
}

export default Otp;
