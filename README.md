## Frontend NextJS BaseCode

## Getting Started

First, run the development server:

```bash
npm istall
# or 
yarn install

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
```

Then on your JS file you can access it as such:

```bash
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
publicRuntimeConfig.testenv_var;
```

Finally, add that variable into your .env.local file and restart the server.
