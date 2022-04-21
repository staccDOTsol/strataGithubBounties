// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Numberu32, Numberu64, NAME_PROGRAM_ID, createInstruction, createNameRegistry, getNameAccountKey, getHashedName, NameRegistryState } from "@solana/spl-name-service";
import { Keypair, SystemProgram, sendAndConfirmRawTransaction } from "@solana/web3.js";
import {PublicKey, Connection, Transaction} from '@solana/web3.js'
import * as fs from 'fs';
import express from "express";
import * as anchor from '@project-serum/anchor'
import { SplTokenBonding } from "@strata-foundation/spl-token-bonding";
import { SplTokenCollective } from "@strata-foundation/spl-token-collective";
import { getAssociatedAccountBalance, SplTokenMetadata } from "@strata-foundation/spl-utils";
import axios from 'axios'
import fetch from 'cross-fetch'
import qs from 'qs'
import passport from 'passport'
var users = {}
var GitHubStrategy = require('passport-github').Strategy;

passport.use(new GitHubStrategy({
    clientID: process.env.clientID,
    clientSecret: process.env.clientSecret,
    callbackURL: "https://copeplex.art/auth"
  },
async  function(accessToken: any, refreshToken: any, profile: any, cb: any) {
    let holycrap = (profile.username)
    console.log(holycrap)
    console.log(users)
if (Object.keys(users).includes(holycrap)){
  const ghTld = new PublicKey("AWMBip38R6yQvyhZteSm5ezqLTFgWh6ajot1vupNPfmd")
  try {
    if (authorityWallet ){
      var ghName =holycrap
      var ghHandle = ghName
           var hashedghHandle = await getHashedName(ghHandle);
     
     
      var ghName2 = await getNameAccountKey(
        hashedghHandle,
        undefined, // No class
        ghTld// Every gh handle is under our tld
      )
      if (!(await connection.getAccountInfo(ghName2))) {

    var space = 1000; // Extra space to store things on the name
    var instructions = [createInstruction(
      NAME_PROGRAM_ID, // name program id
      SystemProgram.programId, // system program id
      ghName2, // name to create
      // @ts-ignore
      new PublicKey(users[holycrap]), // name owner
      authorityWallet.publicKey, // Fee payer, normally we'd make the person claiming the handle pay
      hashedghHandle, new Numberu64(
        await connection.getMinimumBalanceForRentExemption(space)
      ),
      new Numberu32(space),
      undefined, // Name class, there is none here
      ghTld, // Name parent.
      authorityWallet.publicKey // Name owner. Twitter verifier acts as owner of the parent
    )];
    var transaction = new Transaction({ 
      recentBlockhash: (await connection.getRecentBlockhash()).blockhash,
      feePayer: authorityWallet.publicKey 
    });
    transaction.add(...instructions);
    transaction.partialSign(authorityWallet);
    
    var presignedTransaction = transaction.serialize({ requireAllSignatures: false, verifySignatures: false }).toJSON()
  
    connection.sendTransaction(transaction, [authorityWallet])
    return
  }
  else{
    return
  }
  }
  else{
    return
  }
}
catch(err){
  console.log(err )
  return
}
}
else {
  return
}
}))




type Data = {
    name: string;
};
const connection = new Connection("https://solana--mainnet.datahub.figment.io/apikey/24c64e276fc5db6ff73da2f59bac40f2", "confirmed");
let authorityWallet: Keypair;
let aw: Uint8Array;
aw = (
  new Uint8Array(new Uint8Array(JSON.parse(fs.readFileSync('../../id3.json').toString())))
);
authorityWallet = Keypair.fromSecretKey(aw)

var cors = require('cors')

const app = express()
var corsOptions = {
  origin: 'https://autist.design',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
const port = 1234
app.use(express.json());
app.use(cors())
 
app.get('/auth',passport.authenticate('github', {scope: 'user profile', 
  failureRedirect: '/failure'
}))
app.post('/',

async function(req: any, res: any) {
  console.log(req.body)
  if (req.body.ghName){
    let name = req.body.ghName as string
 if (!Object.keys(users).includes(name)){
   // @ts-ignore
   users[name] = req.body.ghOwner
   console.log(users)

 }
  }

  res.send(200)
}  )
/*
var nameTx = new Transaction()
nameTx.instructions.push(
  await createNameRegistry(
    connection,
    req.body.ghName,
    NameRegistryState.HEADER_LEN,
    authorityWallet.publicKey, // payer
    authorityWallet.publicKey, // owner
    await connection.getMinimumBalanceForRentExemption(NameRegistryState.HEADER_LEN), // lamports
    undefined, // no class
    ghTld // parent
  )
)
*/

// Explicitly don't have the verifier sign this, it should fail
//  var txid = await connection.sendTransaction (nameTx, [authorityWallet])

//  await connection.sendTransaction (transaction, [authorityWallet])

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
