import Footer from '@/components/Footer';
import { login } from '@/services/mgo2pc/api';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import ProForm, { ProFormCheckbox, ProFormText } from '@ant-design/pro-form';
import { Card, Divider } from 'antd';
import React, { useState } from 'react';
import { history, Link, NavLink, useIntl } from 'umi';
import styles from './index.less';

type LoginFormData = {
  username: string;
  password: string;
};

const Login: React.FC = () => {
  const intl = useIntl();
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
                  submitText: intl.formatMessage({ id: 'navBar.login' }),
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
                placeholder={intl.formatMessage({ id: 'app.username' })}
                rules={[
                  {
                    required: true,
                    message: intl.formatMessage({ id: 'app.inputusername' }),
                  },
                ]}
              />
              <ProFormText.Password
                name="password"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={styles.prefixIcon} />,
                }}
                placeholder={intl.formatMessage({ id: 'app.password' })}
                rules={[
                  {
                    required: true,
                    message: intl.formatMessage({ id: 'app.inputpassword' }),
                  },
                ]}
              />

              <div
                style={{
                  marginBottom: 24,
                }}
              >
                <ProFormCheckbox noStyle name="autoLogin">
                  {intl.formatMessage({ id: 'app.rememberme' })}
                </ProFormCheckbox>

                <Divider />

                <p className="text-center">
                  <NavLink to="/register">{intl.formatMessage({ id: 'app.donthaveacc' })}</NavLink>
                </p>

                <p className="text-center">
                  <NavLink to="/recovery">{intl.formatMessage({ id: 'app.forgotpw' })}</NavLink>
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
