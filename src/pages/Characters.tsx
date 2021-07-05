import CharacterLevelTag from '@/components/CharacterLevelTag';
import { getExpLevel, getLevelReq, getUserToken, isLoggedIn } from '@/system/utility';
import { EditOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-layout';
import { Popover } from 'antd';
import { Avatar, Card, Progress } from 'antd';
import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'umi';
import API from '../system/api';

const { Meta } = Card;

export default (): React.ReactNode => {
  const [account, setAccount] = useState<UserAccount>({
    username: '',
    displayName: '',
    email: '',
    banned: false,
    bannedReason: '',
    exp: 0,
    exp_alt: 0,
    main: 0,
    characters: [],
  });

  const history = useHistory();

  if (!isLoggedIn()) {
    history.push("/");
  }

  useEffect(() => {
    const fetchData = async () => {
      const token = getUserToken();
      
      if (!token) return;

      const response = await API.getAccount(token);

      if (!response) {
        return;
      }

      setAccount(response.data);
    };

    fetchData();
  }, []);

  if (account.username === '') {
    return <PageContainer></PageContainer>;
  }

  const characterCards: JSX.Element[] = [];

  for (const character of account.characters) {
    if (!character.name.includes(':#')) {
      const xp = character.id === account.main ? account.exp : account.exp_alt;
      const level = getExpLevel(xp);
      const levelReq = getLevelReq(level + 1);
      const progress = (xp / levelReq) * 100;

      characterCards.push(
        <div className="col-md-3" key={character.id} style={{ marginBottom: '16px' }}>
          <NavLink to={`/profile/${character.name}`}>
            <Card hoverable={true} actions={[<EditOutlined key="edit" disabled={true} />]}>
              <Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
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
                      format={(e) => `lvl ${level + 1}`}
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
