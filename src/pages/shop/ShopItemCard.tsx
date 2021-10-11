import { getUserToken } from '@/system/utility';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Avatar, Card, Modal, notification, Tag } from 'antd';
import React, { useState } from 'react';
import { NavLink } from 'umi';
import API from '../../system/api';

const { Meta } = Card;

type ShopItemProps = {
  item: ShopItem;
};

export default (props: ShopItemProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [owned, setOwned] = useState(props.item.owned);
  
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = async () => {
    const token = getUserToken();
    
    setIsModalVisible(false);

    if (!token) {
      notification.error({ message: `Error`, description: "You must be logged in to make purchases.", placement: "topRight" });
      return;
    }

    const response = await API.purchaseItem(props.item.id.toString(), token);

    console.log(response);

    if (response.data.success) {
      setOwned(true);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const icon = `/img/shop/items/${props.item.gear_slot}_${props.item.color}.png`;
  const coinIcon = <img style={{ width: '16px' }} src={require('../../assets/img/coin.png')} />;
  const modalTitle = (
    <>
      <img style={{ width: '32px' }} src={icon} /> Purchase {props.item.name}
    </>
  );

  const actions = props.item.owned || owned ? [<Tag color="green">Owned</Tag>] : [<ShoppingCartOutlined onClick={() => showModal()} key="buy" />];

  return (
    <>
      <Card
        hoverable={true}
        style={{ marginTop: 16 }}
        loading={false}
        actions={actions}
      >
        <NavLink to={`/shop/${props.item.id}`}>
          <Meta
            avatar={<Avatar shape="square" size="large" src={icon} />}
            title={props.item.name}
            description={
              <React.Fragment>
                {coinIcon} {props.item.cost}
              </React.Fragment>
            }
          />
        </NavLink>
      </Card>
      <Modal
        title={modalTitle}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={'Purchase'}
        okType="ghost"
        cancelText="Cancel"
      >
        Are you sure you want to purchase this item for {props.item.cost} reward points?
      </Modal>
    </>
  );
};
