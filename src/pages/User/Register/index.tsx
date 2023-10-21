import { createAccount } from '@/services/mgo2pc/api';
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import { LoginFormPage, ProFormText } from '@ant-design/pro-components';
import { history, NavLink, useIntl } from '@umijs/max';
import { Button, Form, notification, Space } from 'antd';
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

type RegisterFormData = {
  username: string;
  password: string;
  email: string;
  display_name: string;
};

let captcha: string = '';

export default () => {
  const intl = useIntl();
  const [data, setData] = useState({ loading: false });

  const onFinish = async (values: RegisterFormData) => {
    try {
      await createAccount(
        values.username,
        values.password,
        values.email,
        captcha,
        values.display_name,
      );

      notification.success({
        message: `${intl.formatMessage({ id: 'app.success' })}`,
        description: `${intl.formatMessage({ id: 'app.accountcreated' })}`,
        placement: 'topRight',
        duration: 30,
      });

      history.push(`/register-result/${values.email}`);

      return true;
    } catch (e) {
      console.error(e);
    }
    return false;
  };

  return (
    <div style={{ backgroundColor: '#141414', height: '100%' }}>
      <LoginFormPage
        backgroundImageUrl={require(`../../../assets/img/background-1.jpg`)}
        logo={require(`../../../assets/img/logo.png`)}
        title=""
        subTitle={intl.formatMessage({ id: 'app.fillform3' })}
        disabled={data.loading}
        submitter={{
          searchConfig: {
            submitText: intl.formatMessage({ id: 'navBar.register' }),
          },
        }}
        onFinish={async (values: RegisterFormData) => {
          setData({ loading: true });
          await onFinish(values);
          setData({ loading: false });
        }}
        activityConfig={{
          style: {
            boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.2)',
            color: '#fff',
            borderRadius: 8,
            backgroundColor: '#141414',
          },
          title: intl.formatMessage({ id: 'app.haveacc?' }),
          subTitle: '',
          action: (
            <NavLink to="/login">
              <Button
                size="large"
                style={{
                  borderRadius: 20,
                  background: '#fff',
                  color: '#1677FF',
                  width: 120,
                }}
              >
                {intl.formatMessage({ id: 'app.login' })}
              </Button>
            </NavLink>
          ),
        }}
      >
        <>
          <ProFormText
            name="username"
            fieldProps={{
              size: 'large',
              prefix: <UserOutlined className={'prefixIcon'} />,
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
              prefix: <LockOutlined className={'prefixIcon'} />,
            }}
            placeholder={intl.formatMessage({ id: 'app.password' })}
            rules={[
              {
                required: true,
                message: intl.formatMessage({ id: 'app.inputpass' }),
              },
            ]}
          />
          <ProFormText
            name="email"
            fieldProps={{
              size: 'large',
              prefix: <MailOutlined className={'prefixIcon'} />,
            }}
            placeholder={intl.formatMessage({ id: 'app.email' })}
            rules={[
              {
                type: 'email',
                required: true,
                message: intl.formatMessage({ id: 'app.inputemail' }),
              },
            ]}
          />
          <Form.Item
            label="Captcha"
            name="captcha"
            rules={[{ required: false, message: intl.formatMessage({ id: 'app.botcheck' }) }]}
          >
            <ReCAPTCHA
              sitekey="6LfBUQgbAAAAANCZREFyAbp5TSZ_hBe1aa3Zlz0V"
              theme="dark"
              onChange={(value: string | null) => {
                captcha = value ? value : '';
              }}
            />
          </Form.Item>
        </>
        <Space
          style={{
            marginBlockEnd: 24,
          }}
        >
          <NavLink
            to="/login"
            style={{
              float: 'right',
            }}
          >
            {intl.formatMessage({ id: 'app.alreadyac?' })}
          </NavLink>
        </Space>
      </LoginFormPage>
    </div>
  );
};
