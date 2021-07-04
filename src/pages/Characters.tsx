import React, { useEffect, useState } from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert, Typography, Popover, Collapse, Divider, Tabs, Menu, Button, Form, Input, notification, Avatar, Tag } from 'antd';
import styles from './Home.less';
import API from '../system/api';
import { getExpLevel, getUserToken } from '@/system/utility';
import { NavLink, useHistory } from 'umi';
import { EditOutlined, SettingOutlined } from '@ant-design/icons';
import CharacterLevelTag from '@/components/CharacterLevelTag';

const { Meta } = Card;

export default (): React.ReactNode => {
  const [account, setAccount] = useState<UserAccount>({ username: '', displayName: '', email: '', banned: false, bannedReason: '', exp: 0, exp_alt: 0, main: 0, characters: [] });
  const history = useHistory();
  const token = sessionStorage.getItem('token');

  useEffect(() => {
    const fetchData = async () => {
      if (!token) return;

      const response = await API.getAccount(token);

      if (!response) {
        return;
      }

      console.log(response);

      setAccount(response.data);
    };

    fetchData();
  }, []);

  if (account.username === "") {
    return (<PageContainer></PageContainer>);
  }

  let characterCards: JSX.Element[] = [];

  for (const character of account.characters) {
    if (character.name.includes(":#")) continue;

    const xp = character.id === account.main ? account.exp : account.exp_alt;

    characterCards.push(
      <div className="col-md-3" key={character.id}>
        <NavLink to={`/profile/${character.name}`}>
          <Card hoverable={true} actions={[<EditOutlined key="edit" disabled={true} />]}>
            <Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title={character.name}
              description={<CharacterLevelTag xp={xp} />}
            />
          </Card>
        </NavLink>
      </div>
    );
  }

  return (
    <PageContainer>
      <div className="row">
        {characterCards}
      </div>
    </PageContainer>
  );
};
