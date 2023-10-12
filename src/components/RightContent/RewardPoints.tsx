import { ShoppingOutlined } from '@ant-design/icons';
import { Popover, Space } from 'antd';
import { NavLink, useIntl } from 'umi';

type RewardPointProps = {
  value: number;
};

export default (props: RewardPointProps) => {
  const intl = useIntl();
  return (
    <Space>
      <NavLink to="/shop" style={{ color: 'inherit' }}>
        <Popover content={intl.formatMessage({ id: 'navBar.rewardpoints' })}>
          <ShoppingOutlined /> {props.value}
        </Popover>
      </NavLink>
    </Space>
  );
};
