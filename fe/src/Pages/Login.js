import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate, Redirect } from 'react-router'
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
  const [clientId, setClientId] = useState([]);
  const [stateId, setStateId] = useState([]);
  const [scope, setScope] = useState([]);
  const [nonceValue, setNonceValue] = useState([]);
  const [requestUri, setrequestUri] = useState([]);
  const [redirectUri, setredirectUri] = useState([]);
  const [responseType, setresponseType] = useState([]);
  const [aesKey, setaesKey] = useState([]);
  const [codeVerifier, setcodeVerifier] = useState([]);
  const [codeChallenge, setcodeChallenge] = useState([]);
  const [codeChallengeMethod, setcodeChallengeMethod] = useState([]);
  const [apiHmac, setapiHmac] = useState([]);

  function LinkURL() {
  
    const url = `${URL}/linkURL`;
    axios.post(url).then((response) => {
      
      const data = response.data;
      console.log(data);
      // sessionStorage['userId'] = id
      //     sessionStorage['firstName'] = firstName
      //     sessionStorage['lastName'] = lastName
      //     sessionStorage['email'] = email
      //     sessionStorage['loginStatus'] = 1
			//     sessionStorage['role'] = role
      sessionStorage.clear();
      sessionStorage.setItem('link', JSON.stringify(data[0]));
      sessionStorage.setItem('clientId', JSON.stringify(data[1]));
      sessionStorage.setItem('stateId', JSON.stringify(data[2]));
      sessionStorage.setItem('scope', JSON.stringify(data[3]));
      sessionStorage.setItem('nonceValue', JSON.stringify(data[4]));
      sessionStorage.setItem('requestUri', JSON.stringify(data[5]));
      sessionStorage.setItem('redirectUri', JSON.stringify(data[6]));
      sessionStorage.setItem('responseType', JSON.stringify(data[7]));
      sessionStorage.setItem('aesKey', JSON.stringify(data[8]));
      sessionStorage.setItem('codeVerifier', JSON.stringify(data[9]));
      sessionStorage.setItem('codeChallenge', JSON.stringify(data[10]));
      sessionStorage.setItem('codeChallengeMethod', JSON.stringify(data[11]));
      sessionStorage.setItem('apiHmac', JSON.stringify(data[12]));
      sessionStorage.setItem('inputValue', JSON.stringify(data[13]));
      
      var finalLink = sessionStorage.setItem("link", data[0]);

      //onclick
      



      //localStorage.removeItem(key);
      //localStorage.clear();
      //let lastname = localStorage.getItem(key);
      //localStorage.setItem(key, value);

    });




  }

 

  useEffect(LinkURL,
     []);

 async function loginEpramann()  {
  var link = sessionStorage.getItem('link')
  window.location.replace(link);
  const url = `${URL}/getjWT`;  
  const jwe = await axios.post(url).then((response) => {
    // get the server result
    const result = response.data;
    
    
  })
  
    
    
    
  //  Redire(link);

    

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

  //onClick={()=>{Redirect('/CancelBooking')}} 

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
              <a href={sessionStorage.getItem('link')}  >Login using e-Pramaan</a>
              <button className="btn btn-primary" style={{marginTop:'20px', width:'500px',backgroundColor:'#5C0632'}}>
                SignIn
              </button>
                <button  className="btn btn-primary" style={{marginTop:'20px', width:'500px',backgroundColor:'#5C0632'}}>
                SignUp
              </button>
              <button onClick={loginEpramann} className="btn btn-primary" style={{marginTop:'20px', width:'500px',backgroundColor:'#5C0632'}}>
                Login using e-Pramaan 
              </button>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  )
}
 

export default Login;