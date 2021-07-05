import { PageContainer } from '@ant-design/pro-layout';
import { Button, Card, Result, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, useParams } from 'umi';
import API from '../system/api';

type ActivateParams = {
  user: string;
  key: string;
}

export default (): React.ReactNode => {
  const [data, setData] = useState({ loading: true, message: "", success: false });
  const location = useLocation();
  const params = useParams<ActivateParams>();
  
  document.title = "Activate - Metal Gear Online";

  useEffect(() => {
    const fetchData = async () => {
      const response = await API.activateAccount(params.user, params.key);
      
      if (!response) {
        setData({ loading: false, message: "There was an error activating your account.", success: false });
        return;
      }

      setData({ loading: false, message: "You may now use your account.", success: true });
    };
    fetchData();
  }, []);
  
  if (data.loading) {
    return (
      <PageContainer>
        <Spin spinning={data.loading} size="large"></Spin>
      </PageContainer>
    ); 
  } else {
    const extra = [];

    if (data.success) {
      extra.push(<NavLink to="/account"><Button type="primary" key="console">View Account</Button></NavLink>);
    }

    return (
      <Result
      status={data.success ? "success" : "error"}
      title={data.success ? "Account Activated!" : "Error"}
      subTitle={data.message}
      extra={extra}/>
    )
  }
};
