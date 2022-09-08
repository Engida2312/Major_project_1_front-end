import React from "react";
import { Link } from "react-router-dom";
import './../Assets/Styles/editprofile.css'
import Logo from './../Assets/Images/avatar.png'




function Editprofile(){
    return(<div>
       
    <div className="right">
    <h2 className="edit_h2">Edit Profile</h2>
    
        
	   		<img className="edit_img" src={Logo} alt="av"/>
            <input type="file" name="file" className="imgpic input_field_img" />

		


        <form>
                <ul class="form-style-1">
                    <li><label>Full Name </label><input type="text" name="field1" class="field-divided" placeholder="First" /> <input type="text" name="field2" class="field-divided" placeholder="Last" /></li>
                    <li>
                        <label>Email </label>
                        <input type="email" name="field3" class="field-long" placeholder="nahom@mail.com"/>
                        <label>Linkedin Link </label>
                        <input type="email" name="field3" class="field-long" placeholder="linkedin.com/in/nahom-saketa-64970a245/"/>
                        <label>Github Link </label>
                        <input type="email" name="field3" class="field-long"placeholder="https://github.com/Na-ak-11" />
                        <label>Role </label>
                        <input type="email" name="field3" class="field-long" placeholder="Developer"/>
                        <li><label>Change Password</label><input type="text" name="field1" class="field-divided" placeholder="New Password" /> <input type="text" name="field2" class="field-divided" placeholder="Confirm Password" /></li>
                    </li>
                </ul>
                <input type="submit" value="save" className="btn save"/>
         </form>



    </div>
        




      </div>  );
    }
    export default Editprofile