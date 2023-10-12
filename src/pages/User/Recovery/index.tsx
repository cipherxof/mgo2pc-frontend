import { recoverPassword } from '@/services/mgo2pc/api';
import { MailOutlined } from '@ant-design/icons';
import { LoginFormPage, ProFormText } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import { Form, notification } from 'antd';
import { useState } from 'react';

import ReCAPTCHA from 'react-google-recaptcha';

type RecoveryFormData = {
  email: string;
};

let captcha: string = '';

export default () => {
  const intl = useIntl();
  const [data, setData] = useState({ loading: false });

  document.title = 'Recover Account - Metal Gear Online';

  const onFinish = async (values: RecoveryFormData) => {
    try {
      const result = await recoverPassword(values.email, captcha);

      if (!result || !result.success) {
        return;
      }

      notification.success({
        message: `Success`,
        description: result.message,
        placement: 'topRight',
      });
      //history.push('/');
    } catch (e) {}
  };

  return (
    <div style={{ backgroundColor: '#141414', height: '100%' }}>
      <LoginFormPage
        backgroundImageUrl={require(`../../../assets/img/background-1.jpg`)}
        logo={require(`../../../assets/img/logo.png`)}
        title=""
        subTitle={intl.formatMessage({ id: 'app.fillform2' })}
        submitter={{
          searchConfig: {
            submitText: intl.formatMessage({ id: 'app.resetpw' }),
          },
        }}
        onFinish={async (values: RecoveryFormData) => {
          setData({ loading: true });
          await onFinish(values);
          setData({ loading: false });
        }}
      >
        <>
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
            rules={[{ required: false, message: 'Please fill out the bot check' }]}
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
      </LoginFormPage>
    </div>
  );
};
