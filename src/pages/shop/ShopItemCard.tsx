import { ShoppingCartOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Table, Avatar, Divider } from 'antd';
import React from 'react';
import { NavLink } from 'umi';

const { Meta } = Card;

type ShopItemProps = {
  item: ShopItem;
}

export default (props: ShopItemProps) => {
  return (
    <NavLink to={`/shop/${props.item.id}`}>
      <Card
        hoverable={true}
        style={{ marginTop: 16 }}
        loading={false}
        actions={[<ShoppingCartOutlined key="buy" />]}
      >
        <Meta
          avatar={
            <Avatar shape="square" size="large" src={`/img/shop/items/${props.item.gear_slot}_${props.item.color}.png`} />
          }
          title={props.item.name}
          description={
            <React.Fragment>
              <img style={{ width: '16px' }} src={require('../../assets/img/coin.png')} /> {props.item.cost}
            </React.Fragment>
          }
        />
      </Card>
    </NavLink>
  );
};
