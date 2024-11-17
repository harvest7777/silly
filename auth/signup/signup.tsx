/*
This component handles user sign up for supabse authentication on the client side.
This is for learning and demo purposes only. Do not use this in production because
it introduces security vulnerabilities. 
*/

"use client";
import { supabase_client } from "../../utils/supabase_client";
import { useState, useEffect } from "react";

export default function SignUpPage(){
    //The interface of signupdata is not specified. This is for debug purposes.
    const [signUpData, setSignUpData]= useState<any>(null);

    async function UserSignUp(){
        //This function signs a user up with an email that is already invited to the db.
        let {data, error} = await supabase_client.auth.signUp({
            email: "333harvest.moon333@gmail.com",
            password: "testing123"
        })
        if(error) console.log(error);
        setSignUpData(data);
    }
    
    useEffect(() => {
        UserSignUp();
    }, [])
    
    return(
        <div>
            <p>Result from client side signup: </p>
            <pre>{JSON.stringify(signUpData, null, 2)}</pre>
        </div>
    )

}