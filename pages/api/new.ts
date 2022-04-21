// @ts-nocheck

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { Octokit } from '@octokit/core'
import { createAppAuth, createOAuthUserAuth } from "@octokit/auth-app";
type Data = {
    name: string;
};
export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    //console.log(req.body)
        console.log(123)
    try {
        console.log(123)
    const body = (req.body)
console.log(123)

if (req.body.mintKey && req.body.discussion){


                  const appOctokit = new Octokit({
                    authStrategy: createAppAuth,
                    auth: {
                        appId: 193092,
                        privateKey:process.env.pem as string,
                        installationId:parseInt(req.body.installationId)
                      },
                  });
                  appOctokit.auth({"type": "app"})
                  await appOctokit.request( 'POST ' + req.body.discussion, {
                    
                    privateKey: process.env.pem as string,
                    body: 'well now, ain\'t this the good stuff?! New bounty for this issue lives here, fill ur boots: https://autist.design//bounties/' + req.body.mintKey + '/' +  encodeURIComponent(req.body.discussion.replace('https://','/').replace('/repos','').replace('/comments','')).replace('api.','')// ? * 10 ** 138
                  })
                  
//                /repos/{owner}/{repo}/issues/{issue_number}/comments
//$ curl -X POST   -H "Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTA1MzQ1MDYzNDgsImV4cCI6MTY1MDUzNTEzNjM0OSwiaXNzIjoiMTkzMDkyIn0.PYX_vTLU0An_dvT3X0Owi5hIwMAD9EKqcV_2qJnd9Bjf9k6fGdMAeu4fDARVgMC2NK-CGD8_QqTu46YsnOe4jAWeIpZvJCTxj9ECauAzTWPLKjiOumPVxrFdz0VrUvXy3OWUGZnUgehUXpx7U9iP2VtyGjlRLrCmQ72s2AkjpXqIqep1r4EnIy80uhyW-JokLMU1KLS-uO42XqWjPXTvWhOmeeei3-RXqNTEVOg1mtIUNIQkO5O6AF7VMn4hHVH15zr6y9jQsx0nymnIzyliDliuuNrySdQXPEndxDsmiqwNdwondUtnE5BsiE0NxulAhT6j45uMygymQYMGYjbwdQ" -H "Accept: application/vnd.github.v3+json" https://api.github.com/repos/staccDOTsol/strataGithubBounties/issues/2/comments -d '{"body": "why yes, indeed"}'

            }
    }
    catch(err){
        console.log(err)
    }
    res.status(200).json({ name: 'John Doe' });
}
