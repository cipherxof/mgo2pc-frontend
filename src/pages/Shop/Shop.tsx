import { equipItem, getShopItems, purchaseItem } from '@/services/mgo2pc/api';
import { getUserToken } from '@/system/utility';
import { ShoppingCartOutlined, UserAddOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-layout';
import { history } from '@umijs/max';
import {
  Alert,
  Button,
  Card,
  Carousel,
  Divider,
  Menu,
  Modal,
  notification,
  Select,
  Spin,
  Tag,
  Tooltip,
} from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import { NavLink, useIntl, useParams, useRequest } from 'umi';
import ShopItem from './ShopItem';
import ShopSlotCard from './ShopSlotCard';

/*
this turned into a mess lol
*/

const { Option } = Select;

type ShopParams = {
  id?: string;
};

const slotData: Record<string, number[]> = {};
slotData.head = [42];
slotData.upper = [11, 12, 14, 17];
slotData.lower = [22];
slotData.chest = [69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 192, 193, 194, 195, 196];
slotData.waist = [87, 88, 89, 90, 91, 92, 94, 95, 96, 97];
slotData.hands = [];
slotData.feet = [57, 58, 59, 60, 61, 62];

function getItemIcon(item: ShopItem) {
  let path = `/img/shop/items/icons/${item.gear_slot}_${item.color}.png`;
  if (item.icon > 0) {
    path = `/img/shop/items/icons/${item.icon}.png`;
  }
  return path;
}

function getSlotFromGearId(slots: ShopSlot[] | undefined, gearId: string | undefined) {
  if (!slots || slots.length === 0 || !gearId) return 'upper';

  for (const [key, value] of Object.entries(slotData)) {
    if (value.includes(parseInt(gearId))) {
      return key;
    }
  }

  return 'upper';
}

export default (): React.ReactNode => {
  const intl = useIntl();
  const params = useParams<ShopParams>();
  const isSlotParam = params.id && slotData[params.id] !== undefined;
  const { data, loading, refresh } = useRequest(getShopItems);
  const [menu, setMenu] = useState(isSlotParam ? params.id : 'upper');
  const [color, setColor] = useState(0);
  const [charaId, setCharaId] = useState(0);
  const [modal, contextHolder] = Modal.useModal();

  const menuLookup = getSlotFromGearId(data?.slots, params.id);
  if (!isSlotParam && menuLookup !== menu) {
    setMenu(menuLookup);
  }

  if (charaId === 0 && data && data.characters && data.characters.length > 0) {
    setCharaId(data.characters[0].id);
  }

  const onMenuClick = useCallback(
    (event) => {
      setColor(0);
      setMenu(event.key);
      history.push(`/shop/${event.key}`);
    },
    [menu, setMenu],
  );

  const onColorClick = useCallback(
    (e) => {
      setColor(e);
    },
    [color, setColor],
  );

  useEffect(() => {
    setColor(0);
  }, [params.id]);

  const coinIcon = <img style={{ width: '16px' }} src={require('../../assets/img/coin.png')} />;

  const onPurchase = async (item: ShopItem) => {
    const token = getUserToken();

    if (!token) {
      notification.error({
        message: `${intl.formatMessage({ id: 'app.error' })}`,
        description: intl.formatMessage({ id: 'app.mustlogin' }),
        placement: 'topRight',
      });
      return;
    }

    try {
      const response = await purchaseItem(item.id);

      if (response.success) {
        notification.success({
          message: `${intl.formatMessage({ id: 'app.Success' })}`,
          description: response.message,
          placement: 'topRight',
        });
        refresh();
      }
    } catch (e) {}
  };

  const onEquip = async (item: ShopItem) => {
    const token = getUserToken();

    if (!token) {
      notification.error({
        message: `${intl.formatMessage({ id: 'app.error' })}`,
        description: intl.formatMessage({ id: 'app.mustlogin2' }),
        placement: 'topRight',
      });
      return;
    }

    try {
      const response = await equipItem(item.id, charaId);

      if (response.success) {
        notification.success({
          message: `${intl.formatMessage({ id: 'app.success' })}`,
          description: response.message,
          placement: 'topRight',
        });
      }
    } catch (e) {}
  };

  function handlePurchase(item: ShopItem) {
    modal.confirm({
      title: (
        <>
          {intl.formatMessage({ id: 'app.purchase' })} {item.name}
        </>
      ),
      content: (
        <>
          <Divider />
          {intl.formatMessage({ id: 'app.areyousure' })} {item.cost}{' '}
          {intl.formatMessage({ id: 'app.rewardpoints?' })}
        </>
      ),
      okText: `${intl.formatMessage({ id: 'app.purchase' })}`,
      cancelText: `${intl.formatMessage({ id: 'app.cancel' })}`,
      onOk: async () => await onPurchase(item),
    });
  }

  function handleEquip(item: ShopItem) {
    const characters = [];
    let defaultName = '';

    for (const character of data?.characters) {
      if (character.name.includes('#')) continue;

      characters.push(<Option value={character.id}>{character.name}</Option>);
      if (defaultName === '') {
        defaultName = character.name;
        setCharaId(character.id);
      }
    }

    modal.confirm({
      title: <div className="text-center">{item.name}</div>,
      icon: (
        <div className="col-md-12 text-center mb-4">
          <img src={getItemIcon(item)} />
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
            placeholder={intl.formatMessage({ id: 'app.equipcharselect' })}
            optionFilterProp="children"
            defaultValue={defaultName}
            onChange={(e) => {
              setCharaId(parseInt(e));
            }}
            filterOption={(input, option) =>
              (option!.children as unknown as string).toLowerCase().includes(input.toLowerCase())
            }
          >
            {characters}
          </Select>
        </div>
      ),
      okText: `${intl.formatMessage({ id: 'app.equip' })}`,
      cancelText: `${intl.formatMessage({ id: 'app.cancel' })}`,
      onOk: async () => await onEquip(item),
    });
  }

  document.title = 'Reward Shop - Metal Gear Online';

  const itemJsx = [];

  let mainButton = <></>;

  if (data) {
    if ((!params.id || isSlotParam) && data.slots) {
      for (const slot of data.slots) {
        if (!slotData[menu].includes(slot.gear_slot)) continue;
        itemJsx.push(
          <div key={slot.id} className="col-md-4 mb-3">
            <ShopSlotCard
              item={{
                gear_slot: slot.gear_slot,
                id: slot.gearId,
                info: `${intl.formatMessage({ id: `app.gearslotdesc${slot.gear_slot}` })}`,
                name: `${intl.formatMessage({ id: `app.gearslotname${slot.gear_slot}` })}`,
              }}
            />
          </div>,
        );
      }

      if (itemJsx.length == 0) {
        itemJsx.push(
          <div className="col-md-12">
            <Alert
              message={intl.formatMessage({ id: 'app.information' })}
              description={intl.formatMessage({ id: 'app.nothingtobuy' })}
              type="info"
              showIcon
            />
          </div>,
        );
      }
    } else if (params.id !== undefined && data.items) {
      const colorIcons = [];
      let gearTitle = '';
      let gearCost = 0;
      let subText = <></>;
      let gearColor = '';

      for (const item of data.items) {
        if (item.cost === 9999999 && !item.owned) continue;
        if (item.gear_slot.toString() != params.id) continue;

        if (!slotData[menu].includes(item.gear_slot)) continue;

        const slotName = data.slots.find((slot) => slot.gear_slot === item.gear_slot).name;

        if (color === 0) setColor(item.color);

        if (item.color === color) {
          gearTitle = `${slotName}: ${item.name}`;
          gearCost = item.cost;
          gearColor = item.name;

          if (item.owned) {
            subText = <Tag color="green">{intl.formatMessage({ id: 'app.owned' })}</Tag>;

            mainButton = (
              <Button
                className="mb-4"
                icon={<UserAddOutlined />}
                size="large"
                onClick={() => handleEquip(item)}
              >
                {intl.formatMessage({ id: 'app.equip' })}
              </Button>
            );
          } else {
            subText = (
              <>
                {coinIcon} {gearCost}
              </>
            );

            mainButton = (
              <Button
                className="mb-4"
                icon={<ShoppingCartOutlined />}
                size="large"
                onClick={() => handlePurchase(item)}
              >
                {intl.formatMessage({ id: 'app.purchase' })}
              </Button>
            );
          }
        }

        const itemnamenoquote = item.name.replace("'", '');
        const itemnameforlocale = itemnamenoquote.replace(/ /g, '').toLowerCase();
        colorIcons.push(
          <a href={`#${item.color}`} onClick={() => onColorClick(item.color)}>
            <Tooltip
              placement="top"
              title={intl.formatMessage({
                id: `app.color${itemnameforlocale}`,
              })}
            >
              <img src={getItemIcon(item)} style={{ width: '48px' }} className="mr-2 mb-2" />
            </Tooltip>
          </a>,
        );
      }

      let gearImages = <></>;
      {
        if (params.id === '14' || params.id === '12') {
          gearImages = (
            <>
              <Carousel style={{ color: '#fff' }}>
                <div style={{ color: '#fff' }}>
                  <img
                    src={`/img/shop/items/previews/${params.id}_${color}_front.jpg`}
                    style={{ width: '100%', color: '#fff' }}
                  />
                </div>
                <div>
                  <img
                    src={`/img/shop/items/previews/${params.id}_${color}_side.jpg`}
                    style={{ width: '100%' }}
                  />
                </div>
                <div>
                  <img
                    src={`/img/shop/items/previews/${params.id}_${color}_back.jpg`}
                    style={{ width: '100%' }}
                  />
                </div>
              </Carousel>
              <Divider />
            </>
          );
        } else {
          gearImages = (
            <>
              <img
                src={`/img/shop/items/previews/${params.id}_${color}.jpg`}
                style={{ width: '100%', color: '#fff' }}
              />
              <Divider />
            </>
          );
        }
      }
      const gearamenoquote = gearColor.replace("'", '');
      const gearnameforlocale = gearamenoquote.replace(/ /g, '').toLowerCase();
      const cardTitle = `${intl.formatMessage({
        id: `app.gearslotname${params.id}`,
      })}: ${intl.formatMessage({ id: `app.color${gearnameforlocale}` })}`;
      const gearContent = (
        <div className="col-md-12">
          <Card title={cardTitle}>
            <div className="row">
              <div className="col-md-3 text-center">
                {gearImages}

                <div className="mb-4">{subText}</div>
                {mainButton}
              </div>
              <div className="col-md-8">{colorIcons}</div>
            </div>
          </Card>
        </div>
      );
      itemJsx.push(gearContent);
    }
  }

  return (
    <PageContainer>
      {contextHolder}
      <div className="row">
        <NavLink to="/shop" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          <img
            style={{ width: '512px', maxWidth: '100%' }}
            src={require('../../assets/img/rewardshop3.png')}
          />
        </NavLink>
      </div>
      <Divider />
      <Alert
        message={intl.formatMessage({ id: 'app.notice' })}
        description={intl.formatMessage({ id: 'app.rewardshopinfo' })}
        type="info"
        showIcon
      />
      <div className="row mt-4">
        <div className="col-md-2">
          <Menu defaultSelectedKeys={[menu]} mode="inline" onSelect={onMenuClick}>
            <Menu.Item key="head">{intl.formatMessage({ id: 'app.head' })}</Menu.Item>
            <Menu.Item key="upper">{intl.formatMessage({ id: 'app.upper' })}</Menu.Item>
            <Menu.Item key="lower">{intl.formatMessage({ id: 'app.lower' })}</Menu.Item>
            <Menu.Item key="chest">{intl.formatMessage({ id: 'app.chest' })}</Menu.Item>
            <Menu.Item key="waist">{intl.formatMessage({ id: 'app.waist' })}</Menu.Item>
            <Menu.Item key="hands">{intl.formatMessage({ id: 'app.hands' })}</Menu.Item>
            <Menu.Item key="feet">{intl.formatMessage({ id: 'app.feet' })}</Menu.Item>
          </Menu>
        </div>
        <div className="col-md-10">
          <div className="row">
            <Spin spinning={loading} size="large" />
            {itemJsx}
          </div>
        </div>
      </div>
    </PageContainer>
  );
};
