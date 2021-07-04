import { Alert } from "antd";
import { useState } from "react";
import { useEffect } from "react";
import API from '../../system/api';

export default () => {
  const [data, setData] = useState({ status: 1 });

  const message = `The server is currently ${data.status === 1 ? "online" : "offline"}.`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await API.getStatus();

      if (!response) {
        setData({ status: 0 });
        return;
      }

      setData({ status: response.data.status });
    };

    fetchData();
  }, []);

  return (
    <Alert message={message} type={data.status === 1 ? "success" : "error"} showIcon banner />
  );
};
