const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const https = require('https');

const app = express();
app.use(cors('*'))
app.use(express.json())

var codeVerifierGlobal;
var clientIdGlobal;
var nonceValueGlobal;


// import cryptoRandomString from 'crypto-random-string';
//const cryptoRandomString = require('crypto-random-string');

const { default: axios } = require('axios');

// app.get('/api', (req, res) => {
//     res.json({
//         message: 'Welcome to the API'

//     });
// });

app.post('/linkURL', (request, response) => {

    //Akshay 
    const crypto = require('crypto');

    const clientId = "100000921";
    clientIdGlobal = clientId;
    const scope = "openid";
    const stateIdUnprocessed = crypto.randomUUID();
    const stateId = stateIdUnprocessed.replace(/[^a-zA-Z0-9]/g, '');
    const redirectUri = "http://localhost:5050/loginSuccessful";
    const requestUri = "https://up.epramaan.in/openid/jwt/processJwtAuthGrantRequest.do";
    const responseType = "code";
    const aesKey = "813f6791-6a37-41da-9836-f520c7225668";
    // for nonce and code challenge - crypto.randomBytes(16).toString('base64')

    const nonceValueUnprocessed = crypto.randomUUID();

    const nonceValue = nonceValueUnprocessed.replace(/[^a-zA-Z0-9]/g, '');
    //Line 74, did it because nonce was giving error while decoding JWE(JSON Web Encryption)

    // const nonce = crypto.randomBytes(16).toString('hex');

    //const randomString = require("randomstring");
    nonceValueGlobal = nonceValue;
    const base64url = require("base64url");
    const codeVerifierUnprocessed = crypto.randomBytes(24).toString('hex');
    const codeVerifier = codeVerifierUnprocessed.replace(/[^a-zA-Z0-9]/g, '');
    codeVerifierGlobal = codeVerifier;
    const base64Digest = crypto
        .createHash("sha256")
        .update(codeVerifier)
        .digest("base64");

    const codeChallenge = base64url.fromBase64(base64Digest);

    const codeChallengeMethod = "S256";
    //     input value will be string of
    // "serviceId+aesKey+stateID+nonce+redirectionURI+scope+codeChallenge"
    const inputValue = clientId + aesKey + stateId + nonceValue + redirectUri + scope + codeChallenge;

    // crypto.createHmac()
    // Initializing the createHmac method using secret
    const apiHmac = crypto.createHmac('sha256', aesKey)
        // Data to be encoded
        .update(inputValue)//input value
        // Defining encoding type
        .digest('base64');





    const link = "https://up.epramaan.in/openid/jwt/processJwtAuthGrantRequest.do?&scope=" + scope + "&response_type=" + responseType + "&redirect_uri=" + redirectUri + "&state=" + stateId + "&code_challenge_method=" + codeChallengeMethod + "&nonce=" + nonceValue + "&client_id=" + clientId + "&code_challenge=" + codeChallenge + "&request_uri=" + requestUri + "&apiHmac=" + apiHmac + "";

    console.log("Link = " + link);

    console.log("stateId = " + stateId);
    console.log("nonce = " + nonceValue);
    console.log("codeVerifier = " + codeVerifier);
    console.log("codeChallenge = " + codeChallenge);
    console.log("apiHmac = " + apiHmac);
    console.log("inputValue = " + inputValue);

    const data = [link, clientId, stateId, scope, nonceValue, requestUri, redirectUri, responseType, aesKey, codeVerifier, codeChallenge, codeChallengeMethod, apiHmac, inputValue];


    response.send(data);

    console.log("codeVerifier = " + codeVerifier);



});

app.post('/loginSuccessful', (req, res) => {

    const authCode = req.query.code;
    const stateId = req.query.state;

    console.log("in loginSuccessful api");
    console.log("authCode => " + authCode);
    console.log("stateId => " + stateId);
    const tokenRequestLink = "https://up.epramaan.in/openid/jwt/processJwtAuthGrantRequest.do";
    var body = {
        "code": authCode,
        "grant_type": ["authorization_code"],
        "scope": ["openid"],
        "redirect_uri": ["https://up.epramaan.in/openid/jwt/processJwtTokenRequest.do"],
        "request_uri": ["http://localhost:5050/loginSuccessful"],
        "code_verifier": codeVerifierGlobal,
        "client_id": clientIdGlobal
    }

    const httpsAgent = new https.Agent({ rejectUnauthorized: false });

    const  result = axios.post(
        `${tokenRequestLink}`,
        body,
        {
            httpsAgent: new https.Agent({
                rejectUnauthorized: false
            })
        }
    )
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });

    // axios({
    //     method: 'POST',
    //     url: tokenRequestLink,
    //     data: body
    // })
    //     .then(function (response) {
    //         console.log(response.data);
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });
});




app.get('/codechallenge1', (req, res) => {

    console.log('codeVerifierGlobal => ' + codeVerifierGlobal);
    res.send(codeVerifierGlobal);

})


app.listen(5050, () => console.log('Server started on the port no 5050'));

