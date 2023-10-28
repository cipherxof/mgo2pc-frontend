import { getShopItems } from '@/services/mgo2pc/api';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Image, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { useParams } from 'umi';
import ShopItemCard from './ShopItemCard';

const { Meta } = Card;

type ShopItemParams = {
  id: string;
};

export default (): React.ReactNode => {
  const [data, setData] = useState({
    loading: true,
    item: { id: 1, name: '', cost: 0, gear_slot: 14, color: 13, owned: false, icon: 0 },
  });
  let path = `/img/shop/items/previews/${data.item.gear_slot}_${data.item.color}`;
  if (data.item.icon > 0) {
    path = `/img/shop/items/previews/${data.item.icon}`;
  }
  const params = useParams<ShopItemParams>();

  document.title = 'Shop Item - Metal Gear Online';

  useEffect(() => {
    const fetchData = async () => {
      const response = await getShopItems(params.id);

      if (!response) {
        return;
      }

      setData({ loading: false, item: response.data.items[0] });
    };

    fetchData();
  }, []);

  if (data.loading) {
    return (
      <PageContainer>
        <Spin spinning={data.loading} size="large" />
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-3">
          <ShopItemCard item={data.item} showButton={true} />
        </div>
        <div className="col-md-2">
          <Card
            style={{ marginTop: 16 }}
            hoverable
            cover={<Image src={`${path}_front.jpg`} />}
            loading={data.loading}
          >
            <Meta title="Front" />
          </Card>
        </div>
        <div className="col-md-1"></div>
      </div>
    </PageContainer>
  );
};
