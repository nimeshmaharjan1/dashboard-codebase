import NextAuth from 'next-auth';
import FacebookProvider from 'next-auth/providers/facebook';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';


const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET
    }),
    GitHubProvider({
      clientId: process.env.GITHUBID,
      clientSecret: process.env.GITHUB_SECRET
    })
  ],
}

export default (req: any, res: any) => NextAuth(req, res, options)