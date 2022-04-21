import { Swap, usePublicKey, useStrataSdks } from '@strata-foundation/react';
import type { InferGetServerSidePropsType, NextPage } from 'next';
import { GetServerSideProps } from 'next';
import { PublicKey, Transaction } from '@solana/web3.js'
import Head from 'next/head';

import Image from 'next/image';
import * as anchor from '@project-serum/anchor'
import { FormControl, Input, Button } from '@chakra-ui/react';
import { Numberu64, NAME_PROGRAM_ID, createInstruction, createNameRegistry, getNameAccountKey, getHashedName, NameRegistryState } from "@solana/spl-name-service";
import { Keypair, SystemProgram, sendAndConfirmRawTransaction } from "@solana/web3.js";

import { useRouter } from "next/router";
import axios from 'axios'
import React from 'react';
import { Header } from '../components/Header';
import { Container,  } from '@chakra-ui/react';
import { Toaster } from 'react-hot-toast';
import { CreateButton, ITokenState } from '../components/CreateButton';
import { TokenDisplay } from '../components/TokenDisplay';
import styles from '../styles/Home.module.css';

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      foo: "bar"
    }
  }
}
import { Component } from "react";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import { Uses } from '@metaplex-foundation/mpl-token-metadata';
import qs  from 'qs'
const CLIENT_ID = "Iv1.887d480d10d0bac6";
const REDIRECT_URI = "https://copeplex.art/auth";
const Home: NextPage = ({ foo }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const router = useRouter();
  const ghTld = usePublicKey("AWMBip38R6yQvyhZteSm5ezqLTFgWh6ajot1vupNPfmd")
const {connection} = useConnection()
  const { code, access_token } = router.query;
const [ghName, setGhName]  = React.useState("")
  const wallet = useAnchorWallet()
  const [step2, setStep2] = React.useState(false)
  const nameOwner = wallet?.publicKey.toBase58()
  const meOwnerName = usePublicKey("7L15s89MEW8T4GzjAn61mgMvcKy26N8s6PhHR4mDKd8e")
const collective = usePublicKey("71CoXXzcJaQJAaaduPf1ecdFGZjMCvy8hEZBsNyUfYCb")
const curve = usePublicKey("EJe3GAbFWczJwN1wQDBqGaJZEu6gbrgEWaDrJ1rXuBnh")
const { tokenCollectiveSdk } = useStrataSdks()
if (code){
  
}
if (false){
    var verifier = wallet
var name = "jaregh"
setTimeout(async function(){
var twitterTld = await getNameAccountKey(await getHashedName(name));

  const nameTx = new Transaction({
    recentBlockhash: (await connection.getRecentBlockhash()).blockhash
  })
  nameTx.instructions.push(
    await createNameRegistry(
      connection,
      name,
      NameRegistryState.HEADER_LEN,
      // @ts-ignore
     verifier.publicKey, // Payer
     // @ts-ignore
      verifier.publicKey // Owner
    )
  )
  console.log(twitterTld.toBase58())
// @ts-ignore
  const provider = new anchor.Provider(connection, wallet, {
    preflightCommitment: 'recent',
  });
  await provider.send(nameTx)
        })
      }
  function setChange(e: any){
try{
setGhName(e.target.value)
console.log(ghName)
}
catch(err){

}
  }

async function oulala(){
if (wallet){
  
   await  axios.post('https://copeplex.art', {ghName, ghOwner:wallet.publicKey.toBase58()})
   setStep2(true)
}
      /*
  if (wallet && tokenCollectiveSdk){
    var ghHandle = ghName
      var hashedghHandle = await getHashedName(ghHandle);

      const ghTld = new PublicKey("AWMBip38R6yQvyhZteSm5ezqLTFgWh6ajot1vupNPfmd")

      var ghName2 = await getNameAccountKey(
        hashedghHandle,
        undefined, // No class
        ghTld// Every gh handle is under our tld
      )
      var hashedghHandle = await getHashedName(ghHandle);
     console.log(collective?.toBase58())
      var { ownerTokenRef, tokenBonding } = await tokenCollectiveSdk.createSocialToken({
        collective,
        name: ghName2, // Associate the social token with the created name
        metadata: {
          name: ghName,
          symbol: ghName,
          uri: "https://strataprotocol.com/luvSTRAT.json",
        },
        ignoreIfExists: true, // If a Social Token already exists for this name, ignore.
        tokenBondingParams: {
          curve,
          buyBaseRoyaltyPercentage: 2,
          buyTargetRoyaltyPercentage: 2,
          sellBaseRoyaltyPercentage: 2,
          sellTargetRoyaltyPercentage: 2
        }
      });
      console.log(1)
     // Explicitly don't have the verifier sign this, it should fail
   //  var txid = await connection.sendTransaction (nameTx, [authorityWallet])
     console.log(ownerTokenRef.toBase58())
     var ghName2 = await getNameAccountKey(
       hashedghHandle,
       undefined, // No class
       ghTld// Every gh handle is under our tld
     )
     var space = 1000; // Extra space to store things on the name
     var instructions = [createInstruction(
       NAME_PROGRAM_ID, // name program id
       SystemProgram.programId, // system program id
       ghName2, // name to create
       wallet.publicKey, // name owner
       wallet.publicKey, // Fee payer, normally we'd make the person claiming the handle pay
       hashedghHandle,
       new Numberu64(await connection.getMinimumBalanceForRentExemption(space)), // lamports
       new Numberu64(space), // Space for extra data on the name service name
       undefined, // Name class, there is none here
       ghTld, // Name parent.
       new PublicKey("Hi7SsErCaeTNZfr7TBXhmuNVTucmk7sfzJUh1JXdMfAg")// Name owner. gh verifier acts as owner of the parent
     )];
     var transaction = new Transaction({ 
       recentBlockhash: (await connection.getRecentBlockhash()).blockhash,
       feePayer: wallet.publicKey 
     });
     transaction.add(...instructions);
    // transaction.partialSign(authorityWallet)
     var presignedTransaction = transaction.serialize({ requireAllSignatures: false, verifySignatures: false }).toJSON()
  
     const provider = new anchor.Provider(connection, wallet, {
      preflightCommitment: 'recent',
    });
     await provider.send(transaction)
  
    //await  axios('https://copeplex.art', {ghName, nameOwner})
     var nameTx = new Transaction()
      nameTx.instructions.push(
        await createNameRegistry(
          connection,
         ghName,
          NameRegistryState.HEADER_LEN,
          wallet.publicKey, // payer
          meOwnerName as PublicKey, // owner
          await connection.getMinimumBalanceForRentExemption(NameRegistryState.HEADER_LEN), // lamports
          undefined, // no class
          ghTld // parent
        )
      )
      
      // Explicitly don't have the verifier sign this, it should fail
      var txid = await provider.send (nameTx)
      
  }
  */
} 
  return (
    <Container>
       <div>
          <FormControl> 
Hi what is your gh username? b honest
       <Input type="text" onChange={setChange}>
       
       </Input>
       <Button type="submit" onClick={oulala}>step 1. Submit Magik</Button>
          </FormControl> 
            mmm, ghbo.. wait and approve tx, we making a strata github social token for u :) bounties r cool :) 
          </div>

            {wallet && step2 &&
      <a
            href={`https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&wallie=`+wallet.publicKey.toBase58()+`&scope=user&redirect_uri=${REDIRECT_URI}`}
          >
            Step 2. Execute Magik
          </a>
          }
       
          
      </Container>
  );
};

export default Home;
