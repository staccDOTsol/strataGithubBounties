// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { auth0 } from '../../components/authSetup'
type Data = {
    name: string;
};
export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  
  setTimeout(async function(){
    console.log(req.query)
             const { access_token: accessToken } =
       (await auth0.oauth?.authorizationCodeGrant({
         code: req.query.code as string,
         redirect_uri: "https://auth.autist.design/login/callback"!,
       })) || {};
     const user = await auth0.users?.getInfo(accessToken!);
      
     console.log(user)
     res.status(200).json({ name: 'John Doe' });
      }, 1)
}
