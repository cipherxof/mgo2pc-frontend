import Footer from '@/components/Footer';
import { recoverPassword } from '@/services/mgo2pc/api';
import { MailOutlined } from '@ant-design/icons';
import ProForm, { ProFormText } from '@ant-design/pro-form';
import { Card, Form, notification } from 'antd';
import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { Link, useIntl } from 'umi';
import styles from './index.less';

type RecoveryFormData = {
  email: string;
};

let captcha: string = '';

const Recovery: React.FC = () => {
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
                  submitText: intl.formatMessage({ id: 'app.resetpw' }),
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
              onFinish={async (values: RecoveryFormData) => {
                setData({ loading: true });
                await onFinish(values);
                setData({ loading: false });
              }}
            >
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
            </ProForm>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Recovery;
