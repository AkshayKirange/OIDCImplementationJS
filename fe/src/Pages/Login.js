import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router'
import {URL} from '../config';
import Header from '../Components/Header'
import { v4 as uuidv4 } from 'uuid';
import pkceChallenge from 'pkce-challenge'
const styles={
    div:{
        backgroundColor:'#E5E4E2',
        width:'100%',
        height:'100%'
    }
}


const Login = () => {
  
  

  const [link, setLink] = useState('');
  // const [clientId, setClientId] = useState([]);
  // const [stateId, setStateId] = useState([]);
  // const [scope, setScope] = useState([]);
  const [nonceValue, setNonceValue] = useState([]);
  // const [requestUri, setrequestUri] = useState([]);
  // const [redirectUri, setredirectUri] = useState([]);
  // const [responseType, setresponseType] = useState([]);
  // const [aesKey, setaesKey] = useState([]);
  const [codeVerifier, setcodeVerifier] = useState([]);
  // const [codeChallenge, setcodeChallenge] = useState([]);
  // const [codeChallengeMethod, setcodeChallengeMethod] = useState([]);
  // const [apiHmac, setapiHmac] = useState([]);

  function LinkURL() {
  
    const url = `${URL}/linkURL`;
    axios.post(url).then((response) => {
      
      const data = response.data;
      console.log(data);
      sessionStorage.setItem('link', JSON.stringify(data[0]));
      localStorage.setItem('clientId', JSON.stringify(data[1]));
      localStorage.setItem('stateId', JSON.stringify(data[2]));
      localStorage.setItem('scope', JSON.stringify(data[3]));
      localStorage.setItem('nonceValue', JSON.stringify(data[4]));
      localStorage.setItem('requestUri', JSON.stringify(data[5]));
      localStorage.setItem('redirectUri', JSON.stringify(data[6]));
      localStorage.setItem('responseType', JSON.stringify(data[7]));
      localStorage.setItem('aesKey', JSON.stringify(data[8]));
      localStorage.setItem('codeVerifier', JSON.stringify(data[9]));
      localStorage.setItem('codeChallenge', JSON.stringify(data[10]));
      localStorage.setItem('codeChallengeMethod', JSON.stringify(data[11]));
      localStorage.setItem('apiHmac', JSON.stringify(data[12]));
      localStorage.setItem('inputValue', JSON.stringify(data[13]));
      
      sessionStorage.setItem("link", data[0]);
      



      console.log("codeVerifier = "+ codeVerifier);
      //localStorage.removeItem(key);
      //localStorage.clear();
      //let lastname = localStorage.getItem(key);
      //localStorage.setItem(key, value);
      const hre = localStorage.getItemItem('link');

    });
    const link = localStorage.getItem("link");


  }


  useEffect(LinkURL,
     []);

 const loginEpramann = () => {
    
    
    //const body = link;
    
   // Navigate(link);

    

    // axios.post(link,body).then((request,response) => {
    //   request.data=link;

    //   console.log(response.data);
    // });

  }     

  // const userAction = async () => {
  //   const response = await fetch(window.location.href = link, {
  //     method: 'POST',
  //     body: link, // string or object
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   });
  //   const myJson = await response.json(); //extract JSON from the http response
  //   // do something with myJson
  //   console.log("Data => "+myJson);
  // }

  return (
    <div className='row d-flex' style={{"width":'100%',"height":'100%',backgroundColor:'#E5E4E2'}}>
        <Header/>
      

      <div className='row d-flex'>
        {/* <div className="col"></div> */}
        <div className='row d-flex' style={{marginLeft:'350px',width:'500px', height:'545px',backgroundColor:'#E5E4E2'}}>
        <h1 style={{marginTop:'100px'}}>Login</h1>
          <div className="form" style={{marginTop:'25px'}}>
            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Email address
              </label>
              <input
                // onChange={(e) => {
                //   setEmail(e.target.value)
                // }}
                type="text"
                className="form-control"
              />
              {/* <input
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                type="text"
                className="form-control"
              /> */}
            </div>

            <div className="mb-3">
              <label htmlFor="" className="label-control">
                Password
              </label>
               <input
                // onChange={(e) => {
                //   setPassword(e.target.value)
                // }}
                type="password"
                className="form-control"
              />
              {/* <input
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
                type="password"
                className="form-control"
              /> */}
            </div>

            <div>
              <div >
                {/* <a href="www.google.com" >Login using e-pramaan</a>
                {/* <Link to="/forgotpassword" style={{color:'#5C0632'}}>Login using e-pramaan</Link> }*/}
              </div> 
              <button onClick={LinkURL} className="btn btn-primary" style={{marginTop:'20px', width:'500px',backgroundColor:'#5C0632'}}>
                Login using e-Pramaan
              </button>
                <button  className="btn btn-primary" style={{marginTop:'20px', width:'500px',backgroundColor:'#5C0632'}}>
                Signin
              </button>
              <a href={link}  >Login using epramaan</a>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  )
}
 

export default Login;