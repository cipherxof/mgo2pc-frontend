import ServerStatus from '@/components/ServerStatus';
import { DownloadOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Card, Divider, Typography } from 'antd';
import React from 'react';
import { NavLink } from 'umi';

const { Title } = Typography;

export default (): React.ReactNode => {
  document.title = "Home - Metal Gear Online";

  return (
    <PageContainer>
      <div className="row">
        <div className="col-md-12" style={{marginLeft: "auto", marginRight: "auto"}}>
          <Card>
            <div>
              <img style={{maxWidth: "100%"}} src={require('../assets/img/banner-200.jpg')} />
              <Divider/>
              <Title>Version 2.00</Title>
              
              <p>
                <a href="/emu/rpcs3-9823.7z">
                  <Button type="ghost" icon={<DownloadOutlined />} size="large">Download</Button>
                </a>
              </p>

              <p>We're excited to bring you new content and features in the first official game update for MGO2PC!</p>
              <Title level={3}>New Features</Title>
              <ul>
                <li>- The <NavLink to="/shop">reward shop</NavLink> is now open! Play and earn Reward Points to unlock never before seen cosmetics.</li>
                <li>- The minimum network upload speed has been increased from 96kbps to 256kbps.</li>
                <li>- Toggle shadows without restarting the game for improved performance.</li>
                <li>- The introduction of our new launcher which makes setup and updating easier than ever.</li>
              </ul>

              <Title level={3}>Changes</Title>
              <ul>
                <li>- This update is based on patch 1.36 which was the last official patch. This means missing graphical effects are back and all clothing items are back to their originals.</li>
                <li>- The "Time as Dedicated Host" stat is now being tracked.</li>
              </ul>

              <Title level={3}>Fixes</Title>
              <ul>
                <li>- Water and ladders in Ravaged Riverfront now work properly.</li>
                <li>- Fixed a bug where you might get stuck in a loading screen when switching levels.</li>
              </ul>

              <Title level={3}>Credits</Title>
              <div className="row">
                <div className="col-md-4">
                  <ul>
                    <li>TriggerHappy</li>
                    <li>GHzGangster</li>
                    <li>Jayveer</li>
                    <li>PX_Machida</li>
                    <li>Dormant Hero</li>
                    <li>Freddy</li>
                    <li>Ezail (Tomoka)</li>
                    <li>Nishi</li>
                    <li>Solid-Freeman</li>
                    <li>Zero-Sum</li>
                    <li>jrizzy</li>
                    <li>Solid-Fat (Ada)</li>
                    <li>Luigi</li>
                    <li>Zoft</li>
                    <li>CaptnJackSparo</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

    </PageContainer>
  );
};
