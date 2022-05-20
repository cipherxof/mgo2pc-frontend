import CharacterLevelTag from '@/components/CharacterLevelTag';
import { getAccount } from '@/services/mgo2pc/api';
import { getExpLevel, getLevelReq, getUserToken, isLoggedIn } from '@/system/utility';
import { EditOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-layout';
import { Popover } from 'antd';
import { Avatar, Card, Progress } from 'antd';
import React, { useEffect, useState } from 'react';
import { NavLink, useHistory, useRequest } from 'umi';
import API from '../system/api';

const { Meta } = Card;

export default (): React.ReactNode => {
  const { data, loading } = useRequest(getAccount);

  const history = useHistory();

  if (!isLoggedIn()) {
    history.push('/');
  }

  if (!data || data.username === '') {
    return <PageContainer></PageContainer>;
  }

  const characterCards: JSX.Element[] = [];

  for (const character of data.characters) {
    if (!character.name.includes(':#')) {
      const xp = character.id === data.main ? data.exp : data.exp_alt;
      const level = getExpLevel(xp);
      const progress =
        ((xp - getLevelReq(level)) / (getLevelReq(level + 1) - getLevelReq(level))) * 100;

      characterCards.push(
        <div className="col-md-3" key={character.id} style={{ marginBottom: '16px' }}>
          <NavLink to={`/profile/${character.name}`}>
            <Card hoverable={true} actions={[<EditOutlined key="edit" disabled={true} />]}>
              <Meta
                avatar={<Avatar src={require('../assets/img/oldsnake.png')} />}
                title={character.name}
                description={<CharacterLevelTag xp={xp} />}
              />
              <br />
              <div className="row">
                <div className="col-md-12">
                  <Popover content={`${Math.floor(progress)}%`}>
                    <Progress
                      strokeColor={{
                        '0%': '#108ee9',
                        '100%': '#87d068',
                      }}
                      percent={progress}
                      format={() => `lvl ${level + 1}`}
                    />
                  </Popover>
                </div>
              </div>
            </Card>
          </NavLink>
        </div>,
      );
    }
  }

  return (
    <PageContainer>
      <div className="row">{characterCards}</div>
    </PageContainer>
  );
};
