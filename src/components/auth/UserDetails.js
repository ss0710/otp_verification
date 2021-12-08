import React from 'react';
import { NavLink } from 'react-router-dom';

const UserDetails = () => {
    return (
        <div className="sign_in_div_elements">
            <div className="sign_in_div_input">
             <p>Name</p>
             <input 
                 type="text" 
             />
             </div>
             <div className="sign_in_div_input">
             <p>Email</p>
             <input 
                 type="email" 
             />
             </div>
             <div className="sign_in_div_button">
                <NavLink to="/home"><button>Submit</button></NavLink>
             </div>
        </div>
    )
}

export default UserDetails;