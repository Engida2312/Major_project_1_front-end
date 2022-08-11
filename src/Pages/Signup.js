import React from "react";


function Signup(){
  return(
  <div>
<body>
	<div className="container" id="container">
	
		<div className="form-container sign-in-container">
        
			<form action="" className="">
                <div className="login">
                    <p className="member">Already Member?</p>
                    <a href="">LOGIN</a>
                </div>

                <h1>sign up to EYN</h1>
                <p className="title">Discover The World's Top Creatives</p>
               

                <div className="inside">
                    <label>Name	</label><input type="Name" />
                    <label>Email</label><input type="email"  />
                    <label>Password</label><input type="password"  />
                    
                    <div class="check">
                        <input id="checkbox" type="checkbox" required/>
                         <label id="agree" for="checkbox"> I agree to these <a href="#">Terms and Conditions</a>.</label>
                    </div>
                    
                   
            
                    <button>CREATE ACCOUNT</button>
                </div>
		    </form>
        </div>


        <div className="sign_up_right">
            
                
            <h1>Welcome To EYN!</h1>
                    
        </div>
    </div>
</body>

</div>

  );
}
export default Signup;
