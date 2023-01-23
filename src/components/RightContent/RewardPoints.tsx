import { ShoppingOutlined } from '@ant-design/icons';
import { Popover, Space } from 'antd';
import { NavLink } from 'umi';

type RewardPointProps = {
  value: number;
};

export default (props: RewardPointProps) => {
  return (
    <Space>
      <NavLink to="/shop" style={{ color: 'inherit' }}>
        <Popover content={`Reward Points`}>
          <ShoppingOutlined /> {props.value}
        </Popover>
      </NavLink>
    </Space>
  );
};
