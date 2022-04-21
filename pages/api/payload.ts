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
        if (body.action == 'opened' && body.issue){ 
            if (body.issue.state == 'open' && !body.issue.locked && !body.issue.user.login.includes('[bot]') && body.issue.comments == 0){      
                
                  const appOctokit = new Octokit({
                    authStrategy: createAppAuth,
                    auth: {
                        appId: 193092,
                        privateKey:process.env.pem as string,
                        installationId:body.installation.id
                      },
                  });
                  appOctokit.auth({"type": "app"})
                  await appOctokit.request( 'POST ' + body.issue.comments_url, {
                    
                    privateKey: process.env.pem as string,
                    body: 'Gm! Get this assigned to you (or someone) and people can start funding their bounty :) YAGMI if you\'ve conneted your github to https://autist.design already!\nmaybe!\n'
                  })
                  
//                /repos/{owner}/{repo}/issues/{issue_number}/comments
//$ curl -X POST   -H "Authorization: Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTA1MzQ1MDYzNDgsImV4cCI6MTY1MDUzNTEzNjM0OSwiaXNzIjoiMTkzMDkyIn0.PYX_vTLU0An_dvT3X0Owi5hIwMAD9EKqcV_2qJnd9Bjf9k6fGdMAeu4fDARVgMC2NK-CGD8_QqTu46YsnOe4jAWeIpZvJCTxj9ECauAzTWPLKjiOumPVxrFdz0VrUvXy3OWUGZnUgehUXpx7U9iP2VtyGjlRLrCmQ72s2AkjpXqIqep1r4EnIy80uhyW-JokLMU1KLS-uO42XqWjPXTvWhOmeeei3-RXqNTEVOg1mtIUNIQkO5O6AF7VMn4hHVH15zr6y9jQsx0nymnIzyliDliuuNrySdQXPEndxDsmiqwNdwondUtnE5BsiE0NxulAhT6j45uMygymQYMGYjbwdQ" -H "Accept: application/vnd.github.v3+json" https://api.github.com/repos/staccDOTsol/strataGithubBounties/issues/2/comments -d '{"body": "why yes, indeed"}'

            }
        } 
        
        else 
        if (body.action == 'assigned' && body.issue){ 
            if (body.issue.state == 'open'){      
                
                  const appOctokit = new Octokit({
                    authStrategy: createAppAuth,
                    auth: {
                        appId: 193092,
                        privateKey:process.env.pem as string,
                        installationId:body.installation.id
                      },
                  });
                  appOctokit.auth({"type": "app"})
                  let image = body.issue.assignee.avatar_url
                  if (image.length <= 1){
                      image = body.issue.assignee.gravatar_url
                  }
                  await appOctokit.request( 'POST ' + body.issue.comments_url, {
                    
                    privateKey: process.env.pem as string,

                    body: 'Gm! Click this person-assignee: anywho, if you are indeed that cool then click here to start your bounty *which I belieb is permissionaless*: https://autist.design/launchpad/bounties/new?installationId=' +body.installation.id + '&image='+image+'&name='+body.issue.assignee.login+'&approver='+body.repository.owner.login + '&contact=https://github.com/'+body.issue.assignee.login + '&discussion=' + body.issue.comments_url
                  })
                }
                }else {

        /*
  //  console.log('I got some JSON: {}', (body))
    console.log('merge pusher: {}', (body['pusher']['name']))
   let commits = (body['commits'])
   let  changed = 0 
   let  added = 0 
   let  removed = 0
   let   emails: string[] = []
   let names: string[] = []
    for (var c in commits){
        let commit = commits[c]
        changed += (commit['modified']).length
        added += (commit['added']).length
        removed += (commit['removed']).length
        console.log(commit['author'])
        try{
            names.push(commit['author']['name'])
        }
        catch(err){
        }

        try{
            emails.push(commit['author']['email'])
        }
        catch(err){
        }
        
    }
    console.log('names:')
    console.log(names)
    console.log('emails:')
    console.log(emails)
    console.log(' {} commits', ((commits).length))
    console.log(' {} added', (added))
    console.log(' {} removed', (removed))
        }
    res.status(200).json({ name: 'John Doe' });
    /*
             const { access_token: accessToken } =
       (await auth0.oauth?.authorizationCodeGrant({
         code: req.query.code as string,
         redirect_uri: "https://auth.autist.design/login/callback"!,
       })) || {};
     const user = await auth0.users?.getInfo(accessToken!);
      
     console.log(user)
     res.status(200).json({ name: 'John Doe' });
     */
                }
    }
    catch(err){
        console.log(err)
    }
    res.status(200).json({ name: 'John Doe' });
}
