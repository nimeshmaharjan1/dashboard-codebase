import { ILogin } from '@shared/interfaces/shared.interface';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: 'Credentials',

      credentials: {
        // username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        // password: { label: 'Password', type: 'password' },
      },

      async authorize(credentials, req) {
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
