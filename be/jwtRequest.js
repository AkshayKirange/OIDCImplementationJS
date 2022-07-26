//import { fetch } from 'node-fetch';
//const fetch = require("node-fetch");
var myHeaders = new fetch.Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Cookie", "upid=79797B9F8F5EA41D9A71E275F96FABE7");

var raw = JSON.stringify({
  "code": [
    "bd83f97c-d71d-46a3-9e74-fc49013fd302"
  ],
  "grant_type": [
    "authorization_code"
  ],
  "scope": [
    "openid"
  ],
  "redirect_uri": [
    "https://up.epramaan.in/openid/jwt/processJwtTokenRequest.do"
  ],
  "request_uri": [
    "http://localhost:2000/loginSuccessful"
  ],
  "code_verifier": [
    "f71b024b-c66b-40f4-bba8-a138a5b2d406"
  ],
  "client_id": [
    "100000921"
  ]
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://up.epramaan.in/openid/jwt/processJwtTokenRequest.do", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));