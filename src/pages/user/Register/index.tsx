import Footer from '@/components/Footer';
import {
  LockOutlined, MailOutlined, UserOutlined
} from '@ant-design/icons';
import ProForm, { ProFormCheckbox, ProFormText } from '@ant-design/pro-form';
import { Alert, Card, Form, notification } from 'antd';
import React, { useState } from 'react';
import { history, Link, NavLink } from 'umi';
import API from '../../../system/api';
import styles from './index.less';
import ReCAPTCHA from "react-google-recaptcha";

type RegisterFormData = {
  username: string;
  password: string;
  email: string;
  display_name: string;
}

let captcha: string = "";

const Register: React.FC = () => {
  const [submitting, setSubmitting] = useState(false);
  const [userLoginState, setUserLoginState] = useState<any>({});
  const [type, setType] = useState<string>('account');

  document.title = "Create Account - Metal Gear Online";

  const onFinish = async (values: RegisterFormData) => {
    const result = await API.createAccount(values.username, values.password, values.email, captcha, values.display_name);

    if (!result) {
      return;
    }
    else if (!result.data.success) {
      notification.error({
        message: `Error`,
        description: result.data.message,
        placement: "topRight",
      });
      return;
    }

    notification.success({
      message: `Success`,
      description: "Please check your email to activate your account.",
      placement: "topRight",
      duration: 30
    });

    history.push("/");
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
                  submitText: 'Create Account',
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
              onFinish={async (values: RegisterFormData) => {
                onFinish(values);
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
              <ProFormText
                name="email"
                fieldProps={{
                  size: 'large',
                  prefix: <MailOutlined className={styles.prefixIcon} />,
                }}
                placeholder={'Email'}
                rules={[
                  {
                    required: true,
                    message: 'Please input your email!',
                  },
                ]}
              />
              <div style={{ marginBottom: 24 }}>
                <Form.Item label="Captcha" name="captcha" rules={[{ required: false, message: 'Please fill out the bot check' }]}>
                  <ReCAPTCHA sitekey="6LfBUQgbAAAAANCZREFyAbp5TSZ_hBe1aa3Zlz0V" onChange={(value: string) => { captcha = value ? value : "" }} />
                </Form.Item>
              </div>

              <p className="text-center">
                <br />
                <NavLink to="/login">
                  Already have an account?
                </NavLink>
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
