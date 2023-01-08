Please follow the following steps to clone and setup all prerequisites:

- ## Prerequisites

1. **Nodejs**

Make sure to have the Node.js installed & running on your machine. If you already have installed Node on your computer, you can skip this step if your existing node version is greater than equal to 16.

2. **Yarn**

Followed by yarn which is necessary to install, update or delete the needed node packages for the specific projects.

3. **React/Nextjs**

As this codebase uses the Next Js framework, proper understanding and prior knowledge of _ **React** _ basics and fundamentals are required and also NextJs' routing and server components. For better understanding of React and NextJs we suggest you to once go through official documentation of React from [ReactJS.org](https://reactjs.org/docs/getting-started.html) along with NextJs from [NextJS.org](https://nextjs.org/).

4. **Ant Design 4/5**

For this codebase we chose Ant Design 5 to be its CSS framework. So prior knowledge of antd and its components followed by how the design and layouts pattern works is necessary.

5. **Redux Toolkit**

As for the global state management tool we have chosen the newly introduced redux toolkit which hugely decreases the boilerplate necessary to implement redux into a project. So prior knowledge of redux and its flow structure is necessary.

6. **React Query**

Followed by the data fetching tool we chose react query as it can be implemented with any other state management library. It is often described as the missing data-fetching library for React, but in more technical terms, it makes **fetching, caching, synchronizing and updating server state** in our React applications a breeze.

7. **React Hook Form**

As for building forms and validations we chose React Hook Form which is a library that helps you build forms with React and can be integrated with any other CSS libraries and performs validation with ease. It is designed to be lightweight, efficient, and easy to use. With React Hook Form, wecan create custom React hooks to manage our form state and validations. This library could be a bit confusing but the documentation is really helpful [react-hook-form.com](https://react-hook-form.com/).

- ## Folder Structure

- [**features**](features)
  - [**home**](features/home)
    - [**components**](features/home/components)
      - [**chart**](features/home/components/chart)
      - [**stats-card**](features/home/components/stats-card)
      - [**user-table**](features/home/components/user-table)
  - [**users**](features/users)
    - [**components**](features/users/components)
      - [**user-list**](features/users/components/user-list)
- [**pages**](pages)
  - [**api**](pages/api)
    - [**auth**](pages/api/auth)
  - [**auth**](pages/auth)
    - [**login**](pages/auth/login)
  - [**settings**](pages/settings)
  - [**users**](pages/users)
    - [**\[userId\]**](pages/users/[userId])
    - [**create**](pages/users/create)
- [**public**](public)
- [**shared**](shared)
  - [**components**](shared/components)
    - [**buttons**](shared/components/buttons)
      - [**primary-button**](shared/components/buttons/primary-button)
      - [**secondary-button**](shared/components/buttons/secondary-button)
    - [**spinner**](shared/components/spinner)
    - [**upload-file**](shared/components/upload-file)
  - [**hooks**](shared/hooks)
  - [**interfaces**](shared/interfaces)
  - [**layouts**](shared/layouts)
    - [**main**](shared/layouts/main)
      - [**header**](shared/layouts/main/header)
      - [**side-bar**](shared/layouts/main/side-bar)
  - [**utils**](shared/utils)
- [**store**](store)
  - [**slices**](store/slices)
    - [**user-slice**](store/slices/user-slice)
- [**styles**](styles)

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
