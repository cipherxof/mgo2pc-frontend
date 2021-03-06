import Footer from '@/components/Footer';
import { login } from '@/services/mgo2pc/api';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import ProForm, { ProFormCheckbox, ProFormText } from '@ant-design/pro-form';
import { Card } from 'antd';
import React, { useState } from 'react';
import { history, Link, NavLink } from 'umi';
import styles from './index.less';

type LoginFormData = {
  username: string;
  password: string;
};

const Login: React.FC = () => {
  const [data, setData] = useState({ loading: false });

  document.title = 'Login - Metal Gear Online';

  const onFinish = async (values: LoginFormData) => {
    try {
      const result = await login(values.username, values.password);

      if (!result) {
        return;
      }

      const account = JSON.stringify(result.account);

      localStorage.setItem('token', result.data);
      localStorage.setItem('account', account);
      localStorage.setItem('expiry', `${new Date(Date.now() + 12096e5)}`); // two weeks

      history.push('/account');
    } catch (e) {}
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.header}>
            <Link to="/">
              <img alt="logo" className={styles.logo} src="/icons/icon-192x192.png" />
              <span className={styles.title}>Metal Gear Online</span>
            </Link>
          </div>
          <div className={styles.desc}></div>
        </div>

        <div
          className={styles.main}
          style={{
            position: 'absolute',
            left: '50%',
            top: '40%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Card>
            <ProForm
              initialValues={{
                autoLogin: true,
              }}
              isKeyPressSubmit={true}
              submitter={{
                searchConfig: {
                  submitText: 'Login',
                },
                render: (_, dom) => dom.pop(),
                submitButtonProps: {
                  loading: data.loading,
                  size: 'large',
                  style: {
                    width: '100%',
                  },
                },
              }}
              onFinish={async (values: LoginFormData) => {
                setData({ loading: true });
                await onFinish(values);
                setData({ loading: false });
              }}
            >
              <ProFormText
                name="username"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined className={styles.prefixIcon} />,
                }}
                placeholder={'Username'}
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}
              />
              <ProFormText.Password
                name="password"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={styles.prefixIcon} />,
                }}
                placeholder={'Password'}
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              />

              <div
                style={{
                  marginBottom: 24,
                }}
              >
                <ProFormCheckbox noStyle name="autoLogin">
                  Remember me
                </ProFormCheckbox>

                <p className="text-center">
                  <br />
                  <NavLink to="/register">Don&#39;t have an account?</NavLink>
                </p>
              </div>
            </ProForm>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
