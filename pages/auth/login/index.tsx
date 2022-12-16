import { EyeInvisibleOutlined, EyeTwoTone, GithubOutlined, GoogleOutlined, TwitterOutlined, UserOutlined } from '@ant-design/icons';
import { authOptions } from '@pages/api/auth/[...nextauth]';
import { ILogin } from '@shared/interfaces/shared.interface';
import { showToast, Types } from '@shared/utils/toast.util';
import { Button, Card, Col, Form, Input, Layout, Row } from 'antd';
import { unstable_getServerSession } from 'next-auth';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';

import styles from './login.module.scss';

const { Content } = Layout;

export const getServerSideProps = async (context: any) => {
    const session = await unstable_getServerSession(context.req, context.res, authOptions)
    if (!session) {
        return {
            props: {
            }
        }
    }
    return {
        redirect: {
            destination: '/',
            permanent: true
        }
    }
}

const Login = () => {
    const { status } = useSession()
    const router = useRouter()
    const defaultValues = {
        username: '',
        password: ''
    } as ILogin
    const { formState: { errors }, handleSubmit, control } = useForm({ defaultValues, mode: 'onChange' })

    const [isLoading, setIsLoading] = React.useState(false)

    const login = async (values: ILogin) => {
        setIsLoading(true)
        try {
            const res = await signIn('credentials', { ...values, redirect: false })
            if (res?.error) {
                return showToast(Types.error, res.error)
            }
            showToast(Types.success, 'Successfully logged in.')
        } catch (error) {
            showToast(Types.error, 'Something went wrong while trying to login please try again.')
        } finally {
            setIsLoading(false)
        }
    }

    React.useEffect(() => {
        if (status === 'authenticated') {
            router.push('/')
        }
    }, [router, status])

    return (
        <Layout>
            <Content className={styles.content}>
                <Card title={<h2 style={{ textAlign: 'center' }}>LOGIN</h2>} style={{ width: 400 }}>
                    <Form layout='vertical' autoComplete={'off'} disabled={isLoading}>
                        <Controller
                            control={control}
                            name="username"
                            rules={{ required: 'This is required.' }}
                            render={({
                                field: { onChange, value, name, ref },
                                fieldState: { error },
                            }) => (
                                <Form.Item label='Username'
                                    hasFeedback={error ? true : false}
                                    validateStatus={error && 'error'}
                                    help={error?.message}>
                                    <Input status={error && 'error'} onChange={onChange} value={value} ref={ref} name={name} placeholder="Enter username here..." suffix={<UserOutlined />} />
                                </Form.Item>

                            )}
                        />
                        <Controller
                            control={control}
                            name="password"
                            rules={{ required: 'This is required.' }}
                            render={({
                                field: { onChange, value, name, ref },
                                fieldState: { error },
                            }) => (
                                <Form.Item label='Password'
                                    hasFeedback={error ? true : false}
                                    validateStatus={error && 'error'}
                                    help={error?.message}>
                                    <Input.Password {...{ onChange, value, name, ref }} placeholder="Enter password here..." iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
                                </Form.Item>

                            )}
                        />
                        <Form.Item style={{ marginTop: 30 }}>
                            <Button loading={isLoading} block type="primary" htmlType='button' onClick={async (e) => {
                                e.preventDefault()
                                await handleSubmit(login)()
                            }}>
                                LOGIN
                            </Button>
                        </Form.Item>
                        <Form.Item className={styles.or_line}>
                            or login with
                        </Form.Item>
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
                </Card>
            </Content>
        </Layout>
    )
}

export default Login