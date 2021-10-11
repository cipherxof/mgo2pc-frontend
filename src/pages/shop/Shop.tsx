import { PageContainer } from '@ant-design/pro-layout';
import React, { useEffect, useState } from 'react';
import API from '../../system/api';
import ShopItemCard from './ShopItemCard';

export default (): React.ReactNode => {
  const [data, setData] = useState({ items: [] as ShopItem[] });

  document.title = 'Reward Shop - Metal Gear Online';

  useEffect(() => {
    const fetchData = async () => {
      const response = await API.getShopItems();

      if (!response) {
        return;
      }

      setData({ items: response.data.items });
      console.log(response);
    };

    fetchData();
  }, []);

  const itemJsx = [];
  for (const item of data.items) {
    itemJsx.push(
      <div className="col-md-3">
        <ShopItemCard item={item} />
      </div>,
    );
  }

  return (
    <PageContainer>
      <div className="row">{itemJsx}</div>
    </PageContainer>
  );
};
