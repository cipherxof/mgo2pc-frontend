import { CheckCircleOutlined, StopOutlined } from '@ant-design/icons';
import { Tag } from 'antd';

type SettingTagProps = {
  name: string;
  enabled: boolean;
};

export default (props: SettingTagProps) => {
  return (
    <Tag className="mr-2 mb-2" color={props.enabled ? 'green' : 'red'}>
      {props.enabled ? <CheckCircleOutlined /> : <StopOutlined />} {props.name}
    </Tag>
  );
};
