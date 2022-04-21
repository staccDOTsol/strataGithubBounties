import { BountyForm } from "@/components/form/BountyForm";
import { FormContainer } from "@/components/FormContainer";
import { routes, route } from "@/utils/routes";
import { NextPage } from "next";
import { useState } from "react";
import { useRouter } from "next/router";
import { v4 as uuidv4 } from 'uuid';
import {  useClaimedTokenRefKeyForName, usePublicKey } from '@strata-foundation/react'
import axios from "axios";
const getFileFromUrl = async (
  url: string | undefined,
  name: string,
  defaultType: string = "image/jpeg"
): Promise<File | undefined> => {
  if (!url) {
    return undefined;
  }

  const data = await fetch(url, { cache: "no-cache" });
  const blob = await data.blob();
  const fileName = `${name}${blob.type === defaultType ? ".jpeg" : "png"}`;
  const file = new File([blob], fileName, { type: blob.type || defaultType });

  return file;
};
export const NewBounty: NextPage = (req:any) => {
  const router = useRouter();
  const [stuff, setStuff] = useState<File>()
  if (!stuff){
try {

    setTimeout(async function(){
    
       setStuff( await getFileFromUrl(router.query.image as string, '22843601'))
},1)
}
catch(err){
console.log(err)
}

  }
  let arandom = uuidv4().replace('-','').substring(0,9 ) as string

  return (
    <FormContainer title="New Bounty">
      {stuff && 
      <BountyForm
      defaultValues={{
        description:(router.query.discussion as string).replace('api.','').replace('/repos','').replace('/comments','') || "test",
        discussion:(router.query.discussion as string).replace('api.','').replace('/repos','').replace('/comments','') || "test",
        contact:"https://github.com/" + router.query.name as string || 'test',
        authority:router.query.approver as string || "test",
        shortName: arandom  || "test",
      name:router.query.name as string || "test",
      image:stuff 
      }}
        onComplete={(mintKey) => {
          axios.post("/api/new", { mintKey: mintKey.toBase58(), discussion: (router.query.discussion as string), installationId :router.query.installationId as string })
          router.push(
            route(routes.bountyeh, { mintKey: mintKey.toBase58(), discussion: encodeURIComponent(router.query.discussion as string).replace('api.','').replace('repos','').replace('comments','') }),
            undefined,
            { shallow: true }
          );
        }}
      />
}
    </FormContainer>
  );
};

export default NewBounty;
