import Footer from '@/components/Footer';
import {
  LockOutlined, UserOutlined
} from '@ant-design/icons';
import ProForm, { ProFormCheckbox, ProFormText } from '@ant-design/pro-form';
import { Alert, Card } from 'antd';
import React, { useState } from 'react';
import { history, Link, NavLink } from 'umi';
import API from '../../../system/api';
import styles from './index.less';

type LoginFormData = {
  username: string;
  password: string;
}

const LoginMessage: React.FC<{
  content: string;
}> = ({ content }) => (
  <Alert
    style={{
      marginBottom: 24,
    }}
    message={content}
    type="error"
    showIcon
  />
);

const goto = () => {
  if (!history) return;
  setTimeout(() => {
    const { query } = history.location;
    const { redirect } = query as {
      redirect: string;
    };
    history.push(redirect || '/');
  }, 10);
};

const Login: React.FC = () => {
  const [submitting, setSubmitting] = useState(false);
  const [userLoginState, setUserLoginState] = useState<any>({});
  const [type, setType] = useState<string>('account');

  document.title = "Login - Metal Gear Online";

  const onFinish = async (values: LoginFormData) => {
    const result = await API.login(values.username, values.password);

    if (!result) {
      return;
    }

    sessionStorage.setItem('token', result.data.data);
    sessionStorage.setItem('username', result.data.username);

    history.push("/account");
  };

  const { status, type: loginType } = userLoginState;
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
          <div className={styles.desc}>
          </div>
        </div>

        <div className={styles.main} style={{ position: "absolute", left: "50%", top: "40%", transform: "translate(-50%, -50%)" }}>
          <Card>
            <ProForm
              initialValues={{
                autoLogin: true,
              }}
              submitter={{
                searchConfig: {
                  submitText: 'Login',
                },
                render: (_, dom) => dom.pop(),
                submitButtonProps: {
                  loading: submitting,
                  size: 'large',
                  style: {
                    width: '100%',
                  },
                },
              }}
              onFinish={async (values: LoginFormData) => {
                onFinish(values);
              }}
            >
              {status === 'error' && loginType === 'account' && (
                <LoginMessage content={'Incorrect username/password（admin/ant.design)'} />
              )}
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
                  <NavLink to="/register">
                    Don't have an account?
                  </NavLink>
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
