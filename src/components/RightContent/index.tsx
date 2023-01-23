import { getAccount } from '@/services/mgo2pc/api';
import { getUserToken, isLoggedIn } from '@/system/utility';
import { useEmotionCss } from '@ant-design/use-emotion-css';
import { SelectLang } from '@umijs/max';
import React, { useEffect, useState } from 'react';
import Avatar from './AvatarDropdown';
import RewardPoints from './RewardPoints';

const GlobalHeaderRight: React.FC = () => {
  const loggedIn = isLoggedIn();
  const [data, setData] = useState({ rp: 0 });

  useEffect(() => {
    const fetchData = async () => {
      if (!loggedIn) return;

      const token = getUserToken();

      if (!token) return;

      const response = await getAccount();

      if (!response) {
        return;
      }

      setData({ rp: response.data.rp });

      return () => {
        clearInterval(timeout);
      };
    };

    const timeout = setInterval(() => fetchData(), 1000 * 60); // refresh every 120 seconds

    fetchData();
  }, []);

  const className = useEmotionCss(() => {
    return {
      display: 'flex',
      height: '48px',
      marginLeft: 'auto',
      overflow: 'hidden',
      gap: 8,
    };
  });

  const actionClassName = useEmotionCss(({ token }) => {
    return {
      display: 'flex',
      float: 'right',
      height: '48px',
      marginLeft: 'auto',
      overflow: 'hidden',
      cursor: 'pointer',
      padding: '0 12px',
      borderRadius: token.borderRadius,
      '&:hover': {
        backgroundColor: token.colorBgTextHover,
      },
    };
  });

  return (
    <div className={className}>
      {loggedIn ? <RewardPoints value={data.rp} /> : <></>}
      <Avatar />
      <SelectLang className={actionClassName} />
    </div>
  );
};
export default GlobalHeaderRight;
