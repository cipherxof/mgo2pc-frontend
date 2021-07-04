import {
  AlipayCircleOutlined,
  LockOutlined,
  MobileOutlined,
  TaobaoCircleOutlined,
  UserOutlined,
  WeiboCircleOutlined,
} from '@ant-design/icons';
import { Alert, Space, message, Tabs, Card } from 'antd';
import React, { useState } from 'react';
import ProForm, { ProFormCaptcha, ProFormCheckbox, ProFormText } from '@ant-design/pro-form';
import { Link, history, useModel } from 'umi';
import Footer from '@/components/Footer';
import styles from './index.less';

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
/** 此方法会跳转到 redirect 参数所在的位置 */

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

  const fetchUserInfo = async () => {
  };

  const handleSubmit = async (values: any) => {
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

        <div className={styles.main}>
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
              onFinish={async (values) => {
                //handleSubmit();
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
                <a
                  style={{
                    float: 'right',
                  }}
                >
                  Forgot Password ?
                </a>
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
