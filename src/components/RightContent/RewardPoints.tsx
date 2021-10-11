import { Popover, Typography } from 'antd';
import React from 'react';
import { NavLink } from 'umi';

const { Text } = Typography;

type RewardPointProps = {
  value: number;
};

export default (props: RewardPointProps) => {
  return (
    <React.Fragment>
      <NavLink to="/shop">
        <Popover content={`Reward Points`}>
          <img style={{ width: '16px' }} src={require('../../assets/img/coins.png')} />{' '}
          <Text> {props.value}</Text>
        </Popover>
      </NavLink>
    </React.Fragment>
  );
};
