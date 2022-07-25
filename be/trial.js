const express=require('express');
// const jwt=require('jsonwebtoken');
const app=express();
const crypto = require('crypto');



const aesKey = "813f6791-6a37-41da-9836-f520c7225668";
const inputValue = "100000921813f6791-6a37-41da-9836-f520c72256686d7b198a-5a85-4e8b-9a84-f329bddfb96e104254c9-bc45-40fa-afcd-b06b55e704fehttp://localhost:2000/loginSuccessfulopenidY5G4k_nWcLddWlMq3qvLB_bO2jkOQjUQgIxDAzUvV-0";
const iValue = "100000921813f6791-6a37-41da-9836-f520c72256686d7b198a-5a85-4e8b-9a84-f329bddfb96e104254c9-bc45-40fa-afcd-b06b55e704fehttp://localhost:2000/loginSuccessfulY5G4k_nWcLddWlMq3qvLB_bO2jkOQjUQgIxDAzUvV-0";


const apiHmac = crypto.createHmac('sha256', aesKey)
// Data to be encoded
.update(inputValue)//input value
// Defining encoding type
.digest('base64');
// Printing the output
console.log("Hmac value Obtained is: ", apiHmac);

const apiHmac1 = crypto.createHmac('sha256', aesKey)
// Data to be encoded
.update(iValue)//input value
// Defining encoding type
.digest('base64');
// Printing the output
console.log("Hmac value Obtained is: ", apiHmac1);







app.listen(5550,()=>console.log('Server started on the port no 5550'));
