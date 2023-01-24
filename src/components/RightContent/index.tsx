import { getAccount } from '@/services/mgo2pc/api';
import { getUserToken, isLoggedIn } from '@/system/utility';
import { useEmotionCss } from '@ant-design/use-emotion-css';
import { SelectLang, useRequest } from '@umijs/max';
import React from 'react';
import Avatar from './AvatarDropdown';
import RewardPoints from './RewardPoints';

const GlobalHeaderRight: React.FC = () => {
  const loggedIn = isLoggedIn();
  const { data } = useRequest(getAccount, {
    pollingInterval: 60000 * 2,
    manual: getUserToken() === null,
  });

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
      {loggedIn ? <RewardPoints value={data?.rp ?? 0} /> : <></>}
      <Avatar />
      <SelectLang className={actionClassName} />
    </div>
  );
};
export default GlobalHeaderRight;
