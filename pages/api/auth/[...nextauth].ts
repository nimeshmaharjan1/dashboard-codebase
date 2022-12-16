import { ILogin } from '@shared/interfaces/shared.interface';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.

      credentials: {
        // username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        // password: { label: 'Password', type: 'password' },
      },

      async authorize(credentials, req) {
        // You need to provide your own logic here that takes the credentials
        // submitted and returns either a object representing a user or value
        // that is false/null if the credentials are invalid.
        // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
        // You can also use the `req` object to obtain additional parameters
        // (i.e., the request IP address)
        // const res = await fetch('/your/endpoint', {
        //   method: 'POST',
        //   body: JSON.stringify(credentials),
        //   headers: { 'Content-Type': 'application/json' },
        // });
        // const user = await res.json();

        const { username, password } = credentials as ILogin;

        // If no error and we have user data, return it
        // if (res.ok && user) {
        //   return user;
        // }

        if (username !== 'admin' || password !== 'admin') {
          throw new Error('Invalid credentials!');
        }

        // Return null if user data could not be retrieved
        return {
          email: 'admin@gmail.com',
          name: 'Admin User',
          id: '01',
          role: 'admin',
        };
      },
    }),
    // ...add more providers here
  ],
  pages: {
    signIn: '/auth/login',
  },
  callbacks: {
    jwt(params: any) {
      if (params.user?.role) {
        params.token.role = params.user.role;
      }
      return params.token;
    },
    session(params: any) {
      if (params.token?.role) {
        params.session.user.role = params.token?.role;
      }
      return params.session;
    },
  },
};
export default NextAuth(authOptions);
