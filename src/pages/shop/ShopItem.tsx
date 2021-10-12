import { PageContainer } from '@ant-design/pro-layout';
import { Card, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import ShopItemCard from './ShopItemCard';
import API from '../../system/api';
import { useParams } from 'umi';
import { getUserToken } from '@/system/utility';

const { Meta } = Card;

type ShopItemParams = {
  id: string;
};

export default (): React.ReactNode => {
  const [data, setData] = useState({
    loading: true,
    item: { id: 1, name: '', cost: 0, gear_slot: 14, color: 13, owned: false },
  });
  const path = `/img/shop/items/previews/${data.item.gear_slot}_${data.item.color}`;
  const params = useParams<ShopItemParams>();

  document.title = 'Shop Item - Metal Gear Online';

  useEffect(() => {
    const fetchData = async () => {
      const token = getUserToken();
      const response = await API.getShopItems(token ? token : '', params.id);

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
        <Spin spinning={data.loading} size="large"></Spin>
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
          <Card style={{ marginTop: 16 }} hoverable  cover={<img src={`${path}_front.jpg`} />} loading={data.loading}  >
            <Meta title="Front" />
          </Card>
        </div>

        <div className="col-md-2">
          <Card style={{ marginTop: 16 }} hoverable  cover={<img src={`${path}_side.jpg`} />} loading={data.loading}  >
            <Meta title="Side" />
          </Card>
        </div>

        <div className="col-md-2">
        <Card style={{ marginTop: 16 }} hoverable  cover={<img src={`${path}_back.jpg`} />} loading={data.loading}  >
            <Meta title="Back" />
          </Card>
        </div>
        <div className="col-md-1"></div>
      </div>

      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-2">
          <Card style={{ marginTop: 16 }} hoverable  cover={<img src={`${path}_front_f.jpg`} />} loading={data.loading}  >
            <Meta title="Front" />
          </Card>
        </div>

        <div className="col-md-2">
          <Card style={{ marginTop: 16 }} hoverable  cover={<img src={`${path}_side_f.jpg`} />} loading={data.loading}  >
            <Meta title="Side" />
          </Card>
        </div>

        <div className="col-md-2">
        <Card style={{ marginTop: 16 }} hoverable  cover={<img src={`${path}_back_f.jpg`} />} loading={data.loading}  >
            <Meta title="Back" />
          </Card>
        </div>
        <div className="col-md-1"></div>
      </div>
    </PageContainer>
  );
};
