import React, { useState } from 'react';
import PhoneNumber from './PhoneNumber';
import Otp from './Otp';
import UserDetails from './UserDetails';
import firebase from '../../firebase';
import swal from 'sweetalert';
import "../../css/auth/signin.css";

const SignIn = () => {

    const [phoneNumber, setPhoneNumber] = useState();
    const [phoneNumberError, setPhoneNumberError] = useState("");
    const [otp, setOtp] = useState();
    const [val, setVal] = useState(1);

    const handlePhoneNumber = (e) => {
        console.log(phoneNumber);
        setPhoneNumber(e.target.value);
    }

    const handleOtp = (e) => {
        console.log(otp);
        setOtp(e.target.value);
    }

    const submitPhoneNumber = () => {
        if(!phoneNumber){
            setPhoneNumberError("enter Number");
        } else if(phoneNumber.length !== 10){
            setPhoneNumberError("Invalid Phone Number");
        } else {
            setPhoneNumberError("");
            onSignInSubmit();
        }
    }

    const configureCaptcha = () => {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback': (response) => {
              onSignInSubmit();
            },
            defaultCountry: "IN"
        });
    } 

    const onSignInSubmit = () => {
        configureCaptcha();
        const phoneNumber1 = "+91" + phoneNumber;
        console.log(phoneNumber);
        const appVerifier = window.recaptchaVerifier;
        firebase.auth().signInWithPhoneNumber(phoneNumber1, appVerifier)
        .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setVal(2);
        }).catch((error) => {
        console.log(error);
        });
    }

    const submitOtp = () => {
        if(!otp) {
            console.log("enter otp");
        } else {
            const code = otp;
            window.confirmationResult.confirm(code).then((result) => {
            const user = result.user;
            swal("Great", "OTP has been verified", "success");
            setVal(3);
        }).catch((error) => {
            console.log(error);
        });
        }
    }

    const renderDiv = (val) => {
        switch (val) {
            case 1:
            return (
             <PhoneNumber 
                handlePhoneNumber={handlePhoneNumber} 
                submitPhoneNumber={submitPhoneNumber} 
                phoneNumberError={phoneNumberError}
             />
            )
            

            case 2:
            return (
             <Otp handleOtp={handleOtp} submitOtp={submitOtp}/>
            )


            case 3:
            return (
             <UserDetails />
            )

            default:
            return;
        }
    }

    return(
        <div className="sign_in_container">
            <div className="sign_in_inner_container">
            <div className="sign_in_div">
               { renderDiv(val) }
            </div>
            </div>
        </div>
    );
}

export default SignIn;