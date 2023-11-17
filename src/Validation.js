export const valid = (values)=>{
    let errors={};
    if(values.name.trim() == "" )
    {
errors.name= "user name is invalid"
    }
    else if(values.name.trim().length <5)
    {
        errors.name= "user name character less than 5 "

    }
//******************************************* 

if(values.email == ""){
    errors.email = "email invalid"
}
else if( values.email.trim().length <10){
    errors.email = "email characterstic  less than 10 "
}

//******************************************* 

if(values.password == ""){
    errors.password = "password invalid"
}
else if( values.password.trim().length <6){
    errors.password = "password characterstic  less than 6 "
}
//****************************** 

    return errors;
} 