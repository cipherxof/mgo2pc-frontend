import CharacterLevelTag from '@/components/CharacterLevelTag';
import RankSelect from '@/components/RankSelect';
import { getAccount, updateAccount } from '@/services/mgo2pc/api';
import { getExpLevel, getLevelReq, isLoggedIn } from '@/system/utility';
import { PageContainer } from '@ant-design/pro-layout';
import { history } from '@umijs/max';
import { Avatar, Button, Card, notification, Popover, Progress } from 'antd';
import React from 'react';
import { NavLink, useRequest } from 'umi';

const { Meta } = Card;

export default (): React.ReactNode => {
  const { data, refresh } = useRequest(getAccount);

  if (!isLoggedIn()) {
    history.push('/');
  }

  if (!data || data.username === '') {
    return <PageContainer></PageContainer>;
  }

  const characterCards: JSX.Element[] = [];

  async function updateMain(id: number) {
    try {
      await updateAccount({ main: id });
      notification.success({
        message: `Success`,
        description: 'Your main character has been updated.',
        placement: 'topRight',
      });
      refresh();
    } catch (err) {}
  }

  for (const character of data.characters) {
    const isMain = character.id === data.main;

    if (!character.name.includes(':#')) {
      const xp = character.id === data.main ? data.exp : data.exp_alt;
      const level = getExpLevel(xp);
      const progress =
        ((xp - getLevelReq(level)) / (getLevelReq(level + 1) - getLevelReq(level))) * 100;

      const title = isMain ? `${character.name} *` : character.name;
      const availRanks = character.available_ranks === '' ? [] : character.available_ranks.split(',');

      if (availRanks[0] === '') { // woops
        availRanks.shift();
      }

      characterCards.push(
        <div className="col-md-3" key={character.id} style={{ marginBottom: '16px' }}>
          <Card
            hoverable={true}
            actions={[
              <Button
                disabled={data.main === character.id}
                onClick={() => updateMain(character.id)}
              >
                Set as main
              </Button>,
              <RankSelect
                character={character.id}
                allowed={availRanks}
                rank={character.rank}
              />,
            ]}
          >
            <NavLink to={`/profile/${encodeURIComponent(character.name)}`}>
              <Meta
                avatar={<Avatar src={require('../assets/img/oldsnake.png')} />}
                title={title}
                description={<CharacterLevelTag xp={xp} />}
              />
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
            </NavLink>
          </Card>
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
