import ServerStatus from '@/components/ServerStatus';
import { DownloadOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-layout';
import { Button, Card, Divider, Typography } from 'antd';
import React from 'react';
import { NavLink } from 'umi';

const { Title } = Typography;

export default (): React.ReactNode => {
  document.title = 'Home - Metal Gear Online';

  return (
    <PageContainer>
      <div className="row">
        <div className="col-md-12" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          <Card>
            <div>
              <img style={{ maxWidth: '100%' }} src={require('../assets/img/banner-200.jpg')} />
              <Divider />
              <Title>Version 2.10.3</Title>
              07/03/22
              <Title level={3}>New Features</Title>
              <ul>
                <li>- Further improvements to PS3 performance</li>
                <li>- The dust storm on CC has been removed</li>
                <li>- TSNE is now playable with Drebin Points (QQ only)</li>
                <li>- Added 10 new designs to the reward shop</li>
                <li>- The lighting has been improved on QQ</li>
              </ul>
              <Title level={3}>Fixes</Title>
              <ul>
                <li>- Reduced memory usage on custom maps in order to mitigate crashing</li>
              </ul>
              <Divider />
              <Title>Version 2.10.2</Title>
              06/30/22
              <Title level={3}>New Features</Title>
              <ul>
                <li>- Removed motion blur and improved performance on PS3</li>
              </ul>
              <Title level={3}>Fixes</Title>
              <ul>
                <li>- Added missing vehicle textures on JJ</li>
              </ul>
              <Divider />
              <Title>Version 2.10.1</Title>
              06/14/22
              <Title level={3}>Fixes</Title>
              <ul>
                <li>- Updated TSNE, SNE, BOMB, and CAP spawns in QQ</li>
                <li>- Updated TSNE, TDM, and CAP spawns in PP</li>
              </ul>
              <Divider />
              <Title>Version 2.10</Title>
              06/12/22
              <Title level={3}>New Features</Title>
              <ul>
                <li>- Added 3 new maps (JJ, QQ, and PP)</li>
              </ul>
              <Divider />
              <Title>Version 2.02</Title>
              05/25/2022
              <Title level={3}>New Features</Title>
              <ul>
                <li>
                  - The <NavLink to="/shop">reward shop</NavLink> has been expanded and redesigned.
                  There is now over 200 items available for purchase.
                </li>
                <li>
                  - The time to launch MGO2 has been reduced after removing the intro screens.
                </li>
                <li>
                  - A new emulator is available for download with many improvements. There are too
                  many to list, but some of the notable ones are:
                  <ul>
                    <li>* A significant boost in performance.</li>
                    <li>* You can now underhand nade with any controller.</li>
                    <li>* The ability to type with the on-screen keyboard.</li>
                    <li>* Audio stuttering is less common on lower end CPUs.</li>
                    <li>
                      * You can create a shortcut on your desktop that will instantly launch MGO2.
                    </li>
                  </ul>
                </li>
              </ul>
              <Title level={3}>Fixes</Title>
              <ul>
                <li>- Custom maps no longer reset to Forest Firefight.</li>
                <li>
                  - The network has been cancelled error has been resolved (New emulator only).
                </li>
              </ul>
              <Divider />
              <Title>Version 2.00</Title>
              10/17/2021
              <br />
              <br />
              <p>
                We're excited to bring you new content and features in the first official game
                update for MGO2PC!
              </p>
              <Title level={3}>New Features</Title>
              <ul>
                <li>
                  - The <NavLink to="/shop">reward shop</NavLink> is now open! Play and earn Reward
                  Points to unlock never before seen cosmetics.
                </li>
                <li>
                  - The minimum network upload speed has been increased from 96kbps to 256kbps.
                </li>
                <li>- Toggle shadows without restarting the game for improved performance.</li>
                <li>
                  - The introduction of our new launcher which makes setup and updating easier than
                  ever.
                </li>
              </ul>
              <Title level={3}>Changes</Title>
              <ul>
                <li>
                  - This update is based on patch 1.36 which was the last official patch. This means
                  missing graphical effects are back and all clothing items are back to their
                  originals.
                </li>
                <li>- The "Time as Dedicated Host" stat is now being tracked.</li>
              </ul>
              <Title level={3}>Fixes</Title>
              <ul>
                <li>- Water and ladders in Ravaged Riverfront now work properly.</li>
                <li>
                  - Fixed a bug where you might get stuck in a loading screen when switching levels.
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </PageContainer>
  );
};
