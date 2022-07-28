const { response } = require('express');
const express=require('express');
const jwt=require('jsonwebtoken');
const app=express();
// import cryptoRandomString from 'crypto-random-string';
//const cryptoRandomString = require('crypto-random-string');


const cors = require('cors')
app.use(cors('*'))

app.get('/api',(req,res)=>
{
    res.json({
        message:'Welcome to the API'

    });
});

app.post('/loginSuccessful',(req,res)=>{
    console.log("in loginSuccessful api");
    // res.json({
    //     message:'Post created...'


    // });
});

app.post('/linkURL',(request,response)=>{

    //Akshay 
const crypto = require('crypto');

const clientId = "100000921";
const scope = "openid";
const stateId = crypto.randomUUID();
const redirectUri = "http://localhost:2000/loginSuccessful";
const requestUri = "https://up.epramaan.in/openid/jwt/processJwtAuthGrantRequest.do";
const responseType = "code";
const aesKey = "813f6791-6a37-41da-9836-f520c7225668";
// for nonce and code challenge - crypto.randomBytes(16).toString('base64')

const nonceValue=crypto.randomUUID();

// const nonce = crypto.randomBytes(16).toString('hex');

const randomString = require("randomstring");
const base64url = require("base64url");
// const codeVerifier = crypto.randomUUID()
// randomString.generate(16);
const codeVerifier = crypto.randomBytes(24).toString('hex');
// const codeVerifier = cryptoRandomString();
const base64Digest = crypto
  .createHash("sha256")
  .update(codeVerifier)
  .digest("base64");
//console.log("Base64 Digest=code verifier: "+base64Digest);

const codeChallenge = base64url.fromBase64(base64Digest);

const codeChallengeMethod = "S256";
//     input value will be string of
// "serviceId+aesKey+stateID+nonce+redirectionURI+scope+codeChallenge"
const inputValue = clientId+aesKey+stateId+nonceValue+redirectUri+scope+codeChallenge;

// crypto.createHmac()
// Initializing the createHmac method using secret
const apiHmac = crypto.createHmac('sha256', aesKey)
// Data to be encoded
.update(inputValue)//input value
// Defining encoding type
.digest('base64');
// Printing the output
//console.log("Hmac value Obtained is: ", apiHmac);


//const apiHmac = crypto.createHmac('SHA256', {aesKey}).update({inputValue}).digest('base64');



const link = "https://up.epramaan.in/openid/jwt/processJwtAuthGrantRequest.do?&scope=" + scope + "&response_type=" + responseType + "&redirect_uri=" + redirectUri + "&state=" + stateId + "&code_challenge_method=" + codeChallengeMethod + "&nonce=" + nonceValue + "&client_id=" + clientId + "&code_challenge=" + codeChallenge + "&request_uri=" + requestUri + "&apiHmac=" + apiHmac + "";

console.log("Link = " + link);

console.log("stateId = " + stateId);
console.log("nonce = " + nonceValue);
console.log("codeVerifier = " + codeVerifier);
console.log("codeChallenge = " + codeChallenge);
console.log("apiHmac = " + apiHmac);
console.log("inputValue = " + inputValue);

response.send(link);

console.log("codeVerifier = " + codeVerifier);



});

app.get('/codechallenge1',(req,res)=>
{
    res.json(
        {
            noncevalue:noncevalue,
            code_challenges:code_challenge,
            base64Digest:base64Digest,
            ServiceId:"100000917",
            AESKEY:"813f6791-6a37-41da-9836-f520c7225668"


        }
    )
   
 //   res.json(code_challenge)
})




//Code to consume response of the redirected uri

// fetch(url, { method: 'POST', redirect: 'follow'})
//     .then(response => {
//         // HTTP 301 response
//     })
//     .catch(function(err) {
//         console.info(err + " url: " + url);
//     });




app.listen(5050,()=>console.log('Server started on the port no 5050'));

