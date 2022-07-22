import express from 'express';

import stationsServicesJsonFile from "./data/stationsServices.json";

import fs from "fs" ;

import path from 'path';

import massages from "./data/Massages.json"

const app = express();

app.get('/api/v1/stations-services', (req, res) => {
  res.json(stationsServicesJsonFile);
});


 


app.post('/api/v1/user-massages' , (req, res) => {
  const massage =  req.query.massage;
  const stringMassage = massage.toString();
  
  const filePath = "src/data/Massages.json";
  fs.writeFile(filePath,stringMassage,err => {
    console.log("there is an error", err );
  });

})
const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(process.cwd());

});

server.on('error', console.error);
// console.log(`Listening at http://localhost:${port}/api` )