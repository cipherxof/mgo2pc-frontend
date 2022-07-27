import Footer from '@/components/Footer';
import { createAccount } from '@/services/mgo2pc/api';
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import ProForm, { ProFormText } from '@ant-design/pro-form';
import { Card, Form, notification } from 'antd';
import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { history, Link, NavLink, useIntl } from 'umi';
import styles from './index.less';

type RegisterFormData = {
  username: string;
  password: string;
  email: string;
  display_name: string;
};

let captcha: string = '';

const Register: React.FC = () => {
  const intl = useIntl();
  const [data, setData] = useState({ loading: false });

  document.title = 'Create Account - Metal Gear Online';

  const onFinish = async (values: RegisterFormData) => {
    try {
      const result = await createAccount(
        values.username,
        values.password,
        values.email,
        captcha,
        values.display_name,
      );

      if (!result) {
        return;
      } else if (!result.success) {
        notification.error({
          message: `Error`,
          description: result.data.message,
          placement: 'topRight',
        });
        return;
      }

      notification.success({
        message: `Success`,
        description: 'Your account has been created!',
        placement: 'topRight',
        duration: 30,
      });

      history.push('/');
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

        <div className={styles.main} style={{ marginTop: '5%' }}>
          <Card>
            <ProForm
              initialValues={{
                autoLogin: true,
              }}
              isKeyPressSubmit={true}
              submitter={{
                searchConfig: {
                  submitText: intl.formatMessage({ id: 'navBar.register' }),
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
              onFinish={async (values: RegisterFormData) => {
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
              <ProFormText
                name="email"
                fieldProps={{
                  size: 'large',
                  prefix: <MailOutlined className={styles.prefixIcon} />,
                }}
                placeholder={intl.formatMessage({ id: 'app.email' })}
                rules={[
                  {
                    required: true,
                    message: intl.formatMessage({ id: 'app.inputemail' }),
                  },
                ]}
              />
              <Form.Item
                label="Captcha"
                name="captcha"
                rules={[{ required: false, message: 'Please fill out the bot check' }]}
              >
                <ReCAPTCHA
                  sitekey="6LfBUQgbAAAAANCZREFyAbp5TSZ_hBe1aa3Zlz0V"
                  size="compact"
                  theme="dark"
                  onChange={(value: string | null) => {
                    captcha = value ? value : '';
                  }}
                />
              </Form.Item>

              <p className="text-center">
                <NavLink to="/login">{intl.formatMessage({ id: 'app.alreadyhaveacc' })}</NavLink>
              </p>
            </ProForm>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
