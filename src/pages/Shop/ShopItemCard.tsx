import { purchaseItem } from '@/services/mgo2pc/api';
import { getUserToken } from '@/system/utility';
import { ShoppingCartOutlined, UserAddOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Divider, Modal, notification, Select, Tag } from 'antd';
import React, { useState } from 'react';
import { NavLink, useIntl } from 'umi';

const { Meta } = Card;

type ShopItemProps = {
  item: ShopItem;
  showButton?: boolean;
};

export default (props: ShopItemProps) => {
  const intl = useIntl();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [owned, setOwned] = useState(props.item.owned);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = async () => {
    const token = getUserToken();

    setIsModalVisible(false);

    if (!token) {
      notification.error({
        message: `${intl.formatMessage({ id: 'app.error' })}`,
        description: `${intl.formatMessage({ id: 'app.mustlogin' })}`,
        placement: 'topRight',
      });
      return;
    }

    try {
      const response = await purchaseItem(props.item.id);

      if (response && response.success) {
        setOwned(true);
      }
    } catch (e) {}
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const icon = `/img/shop/items/icons/${props.item.gear_slot}_${props.item.color}.png`;

  function handleEquip() {
    Modal.confirm({
      title: <div className="text-center">{props.item.name}</div>,
      icon: (
        <div className="text-center">
          <img src={icon} />
        </div>
      ),
      content: (
        <div>
          <Divider />
          {intl.formatMessage({ id: 'app.equipcharselect' })}
          <Divider />
          <Select
            style={{ width: '100%' }}
            showSearch
            placeholder="Select a person"
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option!.children as unknown as string).toLowerCase().includes(input.toLowerCase())
            }
          ></Select>
        </div>
      ),
      okText: `${intl.formatMessage({ id: 'app.equip' })}`,
      cancelText: `${intl.formatMessage({ id: 'app.camcel' })}`,
      onOk: () => () => {},
    });
  }

  const coinIcon = <img style={{ width: '16px' }} src={require('../../assets/img/coin.png')} />;
  const modalTitle = (
    <>
      <img style={{ width: '32px' }} src={icon} /> Purchase {props.item.name}
    </>
  );

  let buyButton = (
    <Button icon={<ShoppingCartOutlined />} size="large" onClick={() => showModal()}>
      Purchase
    </Button>
  );

  const equipButton = (
    <Button icon={<UserAddOutlined />} size="small" onClick={() => handleEquip()}>
      Equip
    </Button>
  );

  if (props.showButton !== true) {
    buyButton = (
      <Button icon={<ShoppingCartOutlined />} size="small" onClick={() => showModal()}>
        Purchase
      </Button>
    );
  }

  const actions =
    props.item.owned || owned
      ? [
          <Tag key={props.item.id} color="green">
            Owned
          </Tag>,
          equipButton,
        ]
      : [buyButton];

  return (
    <>
      <Card hoverable={props.showButton !== true} loading={false} actions={actions}>
        <NavLink to={`/shop/${props.item.id}`}>
          <Meta
            avatar={<Avatar shape="square" size="large" src={icon} />}
            title={<>{props.item.name} </>}
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
        cancelText="Cancel"
      >
        {intl.formatMessage({ id: 'app.areyousure' })} {props.item.cost}{' '}
        {intl.formatMessage({ id: 'app.rewardpoints?' })}
      </Modal>
    </>
  );
};
