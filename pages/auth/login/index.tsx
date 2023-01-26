import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  GithubOutlined,
  GoogleOutlined,
  TwitterOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { ILogin } from '@features/auth/interfaces/shared.interface';
import { TOAST_TYPES, showToast } from '@shared/utils/toast.util';
import { Button, Col, Form, Input, Row } from 'antd';
import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';
import { Controller, useForm } from 'react-hook-form';

import AuthLayout from '@features/auth/layout';
import { NextPageWithLayout } from '@pages/_app';
import axios from 'axios';
import { setCookie } from 'cookies-next';
import styles from './login.module.scss';

const Login: NextPageWithLayout = () => {
  const router = useRouter();
  const defaultValues = {
    username: '',
    password: '',
  } as ILogin;
  const { handleSubmit, control } = useForm({
    defaultValues,
    mode: 'onChange',
  });

  const [isLoading, setIsLoading] = React.useState(false);
  const [isFormDisabled, setIsFormDisabled] = React.useState(false);

  const handleLogin = async (values: ILogin) => {
    const { username, password } = values;
    setIsLoading(true);
    setIsFormDisabled(true);
    try {
      const res = await axios.post('/api/auth/login', {
        username,
        password,
      });
      setCookie('_token', res.data.token);
      router.push('/');
      showToast(TOAST_TYPES.success, 'Successfully logged in.');
    } catch (error: any) {
      showToast(
        TOAST_TYPES.error,
        error?.response?.data?.message ||
          'Something went wrong while trying to log in please try again.'
      );
      setIsFormDisabled(false);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form layout="vertical" autoComplete={'off'} disabled={isFormDisabled}>
      <Controller
        control={control}
        name="username"
        rules={{ required: 'Username is required.' }}
        render={({
          field: { onChange, value, name, ref },
          fieldState: { error },
        }) => (
          <Form.Item
            label="Username"
            hasFeedback={error ? true : false}
            validateStatus={error && 'error'}
            help={error?.message}
          >
            <Input
              status={error && 'error'}
              onChange={onChange}
              value={value}
              ref={ref}
              name={name}
              placeholder="admin"
              suffix={<UserOutlined />}
            />
          </Form.Item>
        )}
      />
      <Controller
        control={control}
        name="password"
        rules={{ required: 'Password is required.' }}
        render={({
          field: { onChange, value, name, ref },
          fieldState: { error },
        }) => (
          <Form.Item
            label="Password"
            hasFeedback={error ? true : false}
            validateStatus={error && 'error'}
            help={error?.message}
          >
            <Input.Password
              {...{ onChange, value, name, ref }}
              placeholder="admin"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>
        )}
      />
      <Form.Item style={{ marginTop: 30 }}>
        <Button
          loading={isLoading}
          block
          type="primary"
          htmlType="button"
          onClick={async (e) => {
            e.preventDefault();
            await handleSubmit(handleLogin)();
          }}
        >
          LOGIN
        </Button>
      </Form.Item>
      <Form.Item className={styles.or_line}>or login with</Form.Item>
      <Row gutter={12}>
        <Col xs={8} className={'flex-center'}>
          <Button block icon={<GoogleOutlined />}></Button>
        </Col>
        <Col xs={8} className={'flex-center'}>
          <Button block icon={<GithubOutlined />}></Button>
        </Col>
        <Col xs={8} className={'flex-center'}>
          <Button block icon={<TwitterOutlined />}></Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Login;

Login.getLayout = (page: ReactNode) => {
  return <AuthLayout title={'Login'}>{page}</AuthLayout>;
};
