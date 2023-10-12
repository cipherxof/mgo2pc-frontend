import { login } from '@/services/mgo2pc/api';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { LoginFormPage, ProFormText } from '@ant-design/pro-components';
import { history, NavLink, useIntl } from '@umijs/max';
import { Button, Space } from 'antd';

type LoginFormData = {
  username: string;
  password: string;
};

export default () => {
  const intl = useIntl();

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
    <div style={{ backgroundColor: '#141414', height: '100%' }}>
      <LoginFormPage
        backgroundImageUrl={require(`../../../assets/img/background-1.jpg`)}
        logo={require(`../../../assets/img/logo.png`)}
        title=""
        subTitle={intl.formatMessage({ id: 'app.fillform' })}
        submitter={{
          searchConfig: {
            submitText: intl.formatMessage({ id: 'navBar.login' }),
          },
        }}
        onFinish={async (values: LoginFormData) => {
          await onFinish(values);
        }}
        activityConfig={{
          style: {
            boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.2)',
            color: '#fff',
            borderRadius: 8,
            backgroundColor: '#141414',
          },
          title: intl.formatMessage({ id: 'app.needanaccount' }),
          subTitle: '',
          action: (
            <NavLink to="/register">
              <Button
                size="large"
                style={{
                  borderRadius: 20,
                  background: '#fff',
                  color: '#1677FF',
                  width: 120,
                }}
              >
                {intl.formatMessage({ id: 'app.register' })}
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
        </>
        <Space
          style={{
            marginBlockEnd: 24,
          }}
        >
          <NavLink
            to="/recovery"
            style={{
              float: 'right',
            }}
          >
            {intl.formatMessage({ id: 'app.forgotpw' })}
          </NavLink>
        </Space>
      </LoginFormPage>
    </div>
  );
};
