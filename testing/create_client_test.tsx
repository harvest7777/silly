/*
The point of this is to test if utils/superbase_client.js is correctly creating a 
client-side connection to supabase. This is tested by simply reading data from a 
test table.
*/

"use client";
import { useEffect, useState } from "react";
import {supabase_client} from "../utils/supabase_client.js"

interface textData{
    id: number; 
    somecolumn: string;
}
export default function CreateClientTest(){
    //Create use state of text and setting the text 
    const [text, setText] = useState<textData[] | null>([]);

    async function getTestData(){
        /*
        This function will get the test data and set test. In case of an error,
        it will be logged.
        */
        const {data, error} = await supabase_client.from("test").select();
        if(error)
        {
            console.log(error);
        }
        if(data)
        {
            setText(data);
        }
    }

    useEffect(()=>{
        /*
        On every page update, get the most updated test data
        */
        getTestData();
    }, [])

    return(
        //After all updates, return newest state of virtual dom
        <div>
            <h1>Result of create client test: </h1>
            <pre>{JSON.stringify(text, null, 2)}</pre>
        </div>
    )
}