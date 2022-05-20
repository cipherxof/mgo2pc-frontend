import { getShopItems } from '@/services/mgo2pc/api';
import { PageContainer } from '@ant-design/pro-layout';
import { Spin } from 'antd';
import React from 'react';
import { NavLink, useRequest } from 'umi';
import ShopItemCard from './ShopItemCard';

export default (): React.ReactNode => {
  const { data, loading } = useRequest(getShopItems);

  document.title = 'Reward Shop - Metal Gear Online';

  const itemJsx = [];

  if (data) {
    for (const item of data.items) {
      itemJsx.push(
        <div key={item.id} className="col-md-3">
          <ShopItemCard item={item} />
        </div>,
      );
    }
  }

  return (
    <PageContainer>
      <div className="row">
        <NavLink to="/shop" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          <img
            style={{ width: '512px', maxWidth: '100%' }}
            src={require('../../assets/img/rewardshop3.png')}
          />
        </NavLink>
      </div>
      <div className="row">
        <Spin spinning={loading} size="large" />
        {itemJsx}
      </div>
    </PageContainer>
  );
};
