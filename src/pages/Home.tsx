import ServerStatus from '@/components/ServerStatus';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Divider } from 'antd';
import React from 'react';
import { FormattedMessage, useIntl } from 'umi';

export default (): React.ReactNode => {
  const intl = useIntl();

  document.title = 'Home - Metal Gear Online';

  return (
    <PageContainer>
      <div className="row">
        <div className="col-md-12">

          <img style={{maxWidth: "100%"}} src={require('../assets/img/logo-full.png')} />
          
          <Divider />

          <Card>
            <ServerStatus />
            <p className="mt-3" style={{ whiteSpace: 'pre-line' }}>
              <FormattedMessage
                id="app.welcome"
                values={{
                  rpcs3: (
                    <a href="https://rpcs3.net/" target="_blank" rel="noreferrer">
                      RPCS3
                    </a>
                  ),
                  discord: (
                    <a href="https://discord.gg/MNqmzuW2wH" target="_blank" rel="noreferrer">
                      discord
                    </a>
                  ),
                  startvideo: (
                    <a
                      href="https://www.youtube.com/watch?v=7uHWGNLxmQI"
                      target="_blank"
                      rel="noreferrer"
                    >
                      getting started video
                    </a>
                  ),
                }}
              />
            </p>
          </Card>
        </div>
      </div>

      <Divider />

      <div className="row">
        <div className="col-md-6" style={{ marginBottom: '16px' }}>
          <Card>
            <div className="container-video">
              <iframe
                className="video"
                width="10000"
                height="10000"
                src={intl.formatMessage({ id: 'app.setupvideopc' })}
                title="PC Setup Guide"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </Card>
        </div>
        <div className="col-md-6" style={{ marginBottom: '16px' }}>
          <Card>
            <div className="container-video">
              <iframe
                className="video"
                width="10000"
                height="10000"
                src={intl.formatMessage({ id: 'app.setupvideops3' })}
                title="PS3 Setup Guide"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </Card>
        </div>
      </div>
    </PageContainer>
  );
};
