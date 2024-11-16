/*
The point of this is to test if utils/superbase_client.js is correctly creating a 
client-side connection to supabase. This is tested by simply reading data from a 
test table.
*/

"use client";
import { useEffect, useState } from "react";
import {supabase_client} from "../utils/supabase_client.js"

export default function CreateClientTest(){

    async function getTestData(){
        const {data} = await supabase_client.from("test").select();
        console.log(data);
    }

    useEffect(()=>{
        getTestData();
    }, [])

    return(
        <div>
            <h1>HELLO??</h1>
        </div>
    )
}