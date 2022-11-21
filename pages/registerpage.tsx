import Router from 'next/router';
import { useEffect } from 'react';
import { Field, Form } from 'react-final-form';
import Page from '../components/layout/Page';
import { isUserLoggedIn } from '../utils/auth.util';

const RegisterPage = () => {
  useEffect(() => {
    if (isUserLoggedIn()) {
      Router.push('/');
    }
  }, []);

  const onSubmit = (e: any) => {
    console.log(e);
  };

  return (
    <Page title="Register" description="this is for register page">
      <div className="flex flex-col items-center">
        <div className="w-1/4 text-center text-5xl font-thin my-4 text-indigo-500">
          REGISTER
        </div>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-4 gap-4">
                <Field
                  name="salutation"
                  render={({ input }) => (
                    <>
                      <select
                        className="my-4 border-solid border-2 border-indigo-500 leading-loose tracking-wide p-2 rounded-md col-start-1"
                        placeholder="Salutation"
                      >
                        <option value="mr">Mr.</option>
                        <option value="mrs">Mrs.</option>
                        <option value="other">Others</option>
                      </select>
                    </>
                  )}
                />
                <Field
                  name="firstName"
                  render={({ input }) => (
                    <>
                      <input
                        className="my-4 border-solid border-2 border-indigo-500 leading-loose tracking-wide p-2 rounded-md"
                        placeholder="First Name"
                      />
                    </>
                  )}
                />
                <Field
                  name="middleName"
                  render={({ input }) => (
                    <input
                      className="my-4 border-solid border-2 border-indigo-500 leading-loose tracking-wide p-2 rounded-md"
                      placeholder="Middle Name"
                    />
                  )}
                />
                <Field
                  name="lastName"
                  render={({ input }) => (
                    <input
                      className="my-4 border-solid border-2 border-indigo-500 leading-loose tracking-wide p-2 rounded-md"
                      placeholder="Last Name"
                    />
                  )}
                />
                <Field
                  name="email"
                  render={({ input }) => (
                    <input
                      className="my-4 border-solid border-2 border-indigo-500 leading-loose tracking-wide p-2 rounded-md col-span-2"
                      type="email"
                      placeholder="Email"
                    />
                  )}
                />
                <Field
                  name="dob"
                  render={({ input }) => (
                    <input
                      className="my-4 border-solid border-2 border-indigo-500 leading-loose tracking-wide p-2 rounded-md col-span-2"
                      type="date"
                      placeholder="Select Date"
                    />
                  )}
                />
                <Field
                  name="secondary_email"
                  render={({ input }) => (
                    <input
                      className="my-4 border-solid border-2 border-indigo-500 leading-loose tracking-wide p-2 rounded-md col-span-2"
                      type="email"
                      placeholder="Secondary Email"
                    />
                  )}
                />
                <Field
                  name="contact_number"
                  render={({ input }) => (
                    <input
                      className="my-4 border-solid border-2 border-indigo-500 leading-loose tracking-wide p-2 rounded-md col-span-2"
                      placeholder="Contact Number"
                    />
                  )}
                />
                <button className="btn col-start-2 col-span-2" type="submit">
                  Create Account
                </button>
              </div>
            </form>
          )}
        />
        {/* <input
          className="w-1/4 my-4 border-solid border-2 border-indigo-500 leading-loose tracking-wide p-2 rounded-md"
          type="text"
          placeholder="Enter your username"
          name="username"
        />
        <input
          className="w-1/4 my-4 border-solid border-2 border-indigo-500 leading-loose tracking-wide p-2 rounded-md"
          type="password"
          placeholder="Enter your password"
          name="password"
        /> */}
      </div>
    </Page>
  );
};

export default RegisterPage;
