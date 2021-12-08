import React from 'react';

const PhoneNumber = ({ handlePhoneNumber, submitPhoneNumber, phoneNumberError }) => {
    return (
        <div className="sign_in_div_elements">
             <div className="sign_in_div_heading">
             <p className="sign-in-text">Sign In</p>
             </div>
             <div className="sign_in_div_input">
             <p>Mobile Number</p>
             <input 
                 type="number" 
                 onChange={handlePhoneNumber}
             />
             <p className="phone_number_error">{phoneNumberError}</p>
             </div>
             <div id="sign-in-button"></div>
             <div className="sign_in_div_button">
                 <button onClick={submitPhoneNumber}>Submit</button>
             </div>
        </div>
    )
}

export default PhoneNumber;
