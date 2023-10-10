import { Card, Select } from 'antd';
import React from 'react';
import { NavLink } from 'umi';

const { Meta } = Card;
const { Option } = Select;

type ShopSlotProps = {
  item: ShopSlot;
  showButton?: boolean;
};

export default (props: ShopSlotProps) => {
  const previewImage = `/img/shop/slots/${props.item.gear_slot}.jpg`;
  return (
    <>
      <NavLink to={`/shop/${props.item.gear_slot}`}>
        <Card hoverable={true} loading={false} style={{ height: '100%' }}>
          <Meta
            avatar={<img src={previewImage} style={{ width: '64px' }} />}
            title={<>{props.item.name} </>}
            description={<React.Fragment>{props.item.info}</React.Fragment>}
          />
        </Card>
      </NavLink>
    </>
  );
};
