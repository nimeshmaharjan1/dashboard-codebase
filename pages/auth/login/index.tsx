import { authOptions } from '@pages/api/auth/[...nextauth]';
import { ILogin } from '@shared/interfaces/shared.interface';
import { Button, Card, Checkbox, Form, Input, Layout, message } from 'antd';
import { unstable_getServerSession } from 'next-auth';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';
import styles from './login.module.scss';

const { Content } = Layout;

export const getServerSideProps = async (context: any) => {
    const session = await unstable_getServerSession(context.req, context.res, authOptions);
    if (!session) {
        return {
            props: {
            }
        };
    }
    return {
        redirect: {
            destination: '/',
            permanent: true
        }
    };
};

const Login = () => {
    const { status } = useSession();
    const router = useRouter();
    const defaultValues = {
        username: '',
        password: ''
    } as ILogin;
    const [form] = Form.useForm();

    const [isLoading, setIsLoading] = React.useState(false);
    const [isFormDisabled, setIsFormDisabled] = React.useState(false);

    const onFinish = async (values: ILogin) => {
        setIsLoading(true);
        setIsFormDisabled(true);
        try {
            const res = await signIn('credentials', { ...values, redirect: false });
            if (res?.error) {
                setIsFormDisabled(false);
                message.error("Error message");
            }
            message.success("Success message");
        } catch (error) {
            message.error("Error message");
            setIsFormDisabled(false);
        } finally {
            setIsLoading(false);
        }
    };

    React.useEffect(() => {
        if (status === 'authenticated') {
            router.push('/');
        }
    }, [router, status]);

    return (
        <Layout>
            <Content className={styles.content}>
                <Card title={<h2 style={{ textAlign: 'center' }}>LOGIN</h2>} style={{ width: 400 }}>
                    <Form
                        disabled={isFormDisabled}
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button loading={isLoading} type="primary" htmlType="submit">
                                Login
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </Content>
        </Layout>
    );
};

export default Login;