import { getUserToken } from '@/system/utility';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Card, Form, Input, Menu, notification } from 'antd';
import React from 'react';
import API from '../system/api';

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 4, span: 16 },
};

const onUpdateAccount = async (e: any) => {
  const token = getUserToken();

  if (!token) {
    notification.error({ message: `Error`, description: "You are not logged in.", placement: "topRight" });
    return;
  }

  const data: UserAccount = {
    username: '',
    displayName: e.target[0].value,
    email: '',
    banned: false,
    bannedReason: '',
    exp: 0,
    exp_alt: 0,
    main: 0,
    characters: []
  }

  await API.updateAccount(token, data);
}

export default (): React.ReactNode => {
  return (
    <PageContainer>
      <Card>
        <div className="row">
          <div className="col-md-3">
            <Menu defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1">Basic Settings</Menu.Item>
            </Menu>
          </div>
          <div className="col-md-9">
            <Form {...layout} name="basic" initialValues={{ remember: true }} onSubmitCapture={onUpdateAccount}>
              <Form.Item label="Display Name" name="display_name">
                <Input placeholder="" />
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  Update Information
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Card>
    </PageContainer>
  );
};
