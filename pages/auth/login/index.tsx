import { EyeInvisibleOutlined, EyeTwoTone, GithubOutlined, GoogleOutlined, TwitterOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Col, Form, Input, Layout, Row } from 'antd';
import { Controller, useForm } from 'react-hook-form';

import styles from './login.module.scss';

const { Content } = Layout;

interface ILogin {
    username: string,
    password: string
}

const Login = () => {
    const defaultValues = {
        username: '',
        password: ''
    } as ILogin
    const { register, formState: { errors }, handleSubmit, watch, control } = useForm({ defaultValues, mode: 'onChange' })

    const login = (values: ILogin) => {
        console.log(values)
    }


    return (
        <Layout>
            <Content className={styles.content}>
                <Card title={<h2 style={{ textAlign: 'center' }}>LOGIN</h2>} style={{ width: 400 }}>
                    <Form layout='vertical' onFinish={handleSubmit(login)} autoComplete={'off'}>
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
                            <Button block type="primary" htmlType="submit">
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