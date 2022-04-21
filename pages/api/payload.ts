// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { auth0 } from '../../components/authSetup'
type Data = {
    name: string;
};
export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    console.log(req.body)
    try {
    const body = JSON.parse(req.body)


    console.log('I got some JSON: {}', (body))
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
    catch(err){
        res.status(200).json({ name: 'John Doe' });
    }
}
