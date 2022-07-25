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
  const [link, setLink] = useState([]);

  function LinkURL() {
    const url = `${URL}/linkURL`;
    axios.post(url).then((response) => {
      const link = response.data;
      console.log("Link => " +link);
      setLink(link);


      // if (result["status"] == "success") {
      //   setOffers(result["data"]);
      //   toast.success("Checkout Special offers");
      // } else {
      //   toast.warning("No offer available now");
      //   navigate("/loginhome");
      // }
    });
  }

  useEffect(LinkURL, []);


  const loginEpramann = () => {
    
    //const body = link;
    
   // Navigate(link);

    

    // axios.post(link,body).then((request,response) => {
    //   request.data=link;

    //   console.log(response.data);
    // });

  }     

  const userAction = async () => {
    const response = await fetch(window.location.href = link, {
      method: 'POST',
      body: link, // string or object
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
    console.log("Data => "+myJson);
  }

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
              <button onClick={loginEpramann} className="btn btn-primary" style={{marginTop:'20px', width:'500px',backgroundColor:'#5C0632'}}>
                Login using e-Pramaan
              </button>
                <button  className="btn btn-primary" style={{marginTop:'20px', width:'500px',backgroundColor:'#5C0632'}}>
                Signin
              </button>
              <a href={link} onClick={userAction} >Login using epramaan</a>
            </div>
          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  )
}
 

export default Login;