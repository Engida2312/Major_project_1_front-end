import React from "react";


function Signup(){
  return(
  <div>
    <body id="signup_body">
	<div className="signup_container">
	    <div className="form-container">
            <form action="" className="signup_form">
                <div className="signup_login">
                    <p className="signup_member">Already Member?</p>
                    <a id="signup_a" href="">LOGIN</a>
                </div>
                <h1 id="signup_h1">sign up to EYN</h1>
                <p className="signup_title">Discover The World's Top Creatives</p>
                <div className="signup_inside">
                    <label className="signup_label">Name	</label><input className="signup_input" type="Name" />
                    <label className="signup_label">Email</label><input className="signup_input" type="email"  />
                    <label className="signup_label">Password</label><input className="signup_input" type="password"  />
                    
                    <div class="signup_check">
                        <input id="signup_checkbox" type="checkbox" required/>
                        <label id="signup_boxagree" for="checkbox"> I agree to these <a className="termandcondition" href="#">Terms and Conditions</a>.</label>
                    </div>
                    <button id="signup_button">CREATE ACCOUNT</button>
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
export default Signup;
