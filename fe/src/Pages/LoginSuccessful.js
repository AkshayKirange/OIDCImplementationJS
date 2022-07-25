import axios from 'axios'
import React from 'react'
import AfterLoginHeader from '../Components/AfterLoginHeader'
import {URL} from '../config';


export const LoginSuccessful = () => {
//   const params = new URLSearchParams(window. location. search)
// params.has('code')
// params.get('code')
// params.has('state')
// params.get('state')
// const paramss = new URLSearchParams(window. location. search)
 
//     console. log(paramss) 

let link = URL+"/loginSuccessful";
axios.post(link).then((response) => {
  const link = response.data;
  console.log("Link => " +link);
 // setLink(link);
})



  return (

    <div>
        <AfterLoginHeader/>
        <div style={{ backgroundColor: '#E5E4E2' }} >
                <br />
                <h1
                    style={{ textAlign: "center", fontWeight: 'bolder' }}>
                    Logged in Successfully!
                </h1>
            </div>
    </div>
  )
}
