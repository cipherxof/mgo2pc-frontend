import { ShoppingCartOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Table, Avatar, Divider  } from 'antd';
import React, { useEffect, useState } from 'react';
import ShopItemCard from './ShopItemCard';
import API from '../../system/api';

const { Meta } = Card;

export default (): React.ReactNode => {
  const [data, setData] = useState({items: [] as ShopItem[]});
  document.title = "Reward Shop - Metal Gear Online";

  useEffect(() => {
    const fetchData = async () => {
      const response = await API.getShopItems();

      if (!response) {
        return;
      }

      setData({items: response.data.items});
      console.log(response);
    };

    fetchData();

    const timeout = setInterval(() => fetchData(), 10000); // refresh every 10 seconds

    return () => {
      clearInterval(timeout);
    };
  }, []);

  const itemJsx = [];
  for (const item of data.items) {
    itemJsx.push( 
      <div className="col-md-3">
        <ShopItemCard item={item} />
      </div>
    );
  }

  return (
    <PageContainer>
      <div className="row">
        {itemJsx}
      </div>
    </PageContainer>
  );
};
