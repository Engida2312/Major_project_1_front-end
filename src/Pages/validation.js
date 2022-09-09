
const validation = (values) => {

    let errors={}

    if(!values.name){
        errors.name="Name is required"
    }
    if(!values.email){
        errors.email="Email is required"
    }else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="The entered Email is invalid"
    }
    if(!values.password){
        errors.password="Password is required"
    }else if(values.password.length>12){
        errors.password="Password must not be more than 12"
    }
    else if (values.password.length<8){
        errors.password="Password must be more than 8"

    }
    return errors;

}

export default validation;