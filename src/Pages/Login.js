import React from "react";
import { Link } from 'react-router-dom';


function Login(){
  return(
  <div>
    <body id="signup_body">
	<div className="signup_container">
	    <div className="form-container">
            <form action="" className="signup_form">
                <div className="signup_login">
                    <p className="signup_member">Are you New Here?</p>
                    <Link id="signup_a" to="/signup">SIGNUP</Link>
                </div>
                <h1 id="signup_h1">Login to EYN</h1>
                <p className="signup_title">Discover The World's Top Creatives</p>
                <div className="signup_inside">
                    
                    <label className="signup_label">Email</label><input className="signup_input" type="email"  />
                    <label className="signup_label">Password</label><input className="signup_input" type="password"  />
                    
                    
                    <button id="signup_button">LOGIN</button>
                </div>
		    </form>
        </div>
        <div className="sign_up_right">
             <h1 id="signup_h1">Welcome To EYN!</h1>
        </div>
    </div>
    </body>

</div>

  );
}
export default Login;
