## Frontend NextJS BaseCode

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Setting environment variable for client side

Add publicRuntimeConfig in your next.config.js:

```bash
 publicRuntimeConfig: {
   testenv_var: process.env.testenv_var
 }
