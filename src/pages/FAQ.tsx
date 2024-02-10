import { PageContainer } from '@ant-design/pro-layout';
import { Collapse, Divider } from 'antd';
import React from 'react';
import { useIntl } from 'umi';
const { Panel } = Collapse;

export default (): React.ReactNode => {
  const intl = useIntl();

  document.title = 'FAQ - Metal Gear Online 2 Fan Revival';
  return (
    <PageContainer>
      <Collapse defaultActiveKey={['8']}>
      <Panel header={intl.formatMessage({ id: 'app.requirements' })} key="8">
          <div>
              <h3>{intl.formatMessage({ id: 'app.minrequirements' })}</h3>
              <p><em>{intl.formatMessage({ id: 'app.minrequirementsdesc1' })}</em></p>
              <strong>{intl.formatMessage({ id: 'app.cpu' })}:</strong> {intl.formatMessage({ id: 'app.minrequirementsdesc2' })}<br/>
              <strong>{intl.formatMessage({ id: 'app.gpu' })}:</strong> {intl.formatMessage({ id: 'app.minrequirementsdesc3' })}
              <Divider/>
              <h3>{intl.formatMessage({ id: 'app.recommendedrequirements' })}</h3>
              <p><em>{intl.formatMessage({ id: 'app.recommendedrequirementsdesc1' })}</em></p>
              <strong>{intl.formatMessage({ id: 'app.cpu' })}:</strong> {intl.formatMessage({ id: 'app.recommendedrequirementsdesc2' })}<br/>
              <strong>{intl.formatMessage({ id: 'app.gpu' })}:</strong> {intl.formatMessage({ id: 'app.recommendedrequirementsdesc3' })}
          </div>
        </Panel>

        <Panel header={intl.formatMessage({ id: 'app.pwreset' })} key="3">
          <div>
            <p>{intl.formatMessage({ id: 'app.pwresetdesc1' })} <a href="https://mgo2pc.com/recovery">{intl.formatMessage({ id: 'app.here' })}</a>. {intl.formatMessage({ id: 'app.pwresetdesc2' })}</p>
          </div>
        </Panel>

        <Panel header={intl.formatMessage({ id: 'app.gamelanguage' })} key="4">
          <div>
            <p>
            <strong>{intl.formatMessage({ id: 'app.ps3' })} </strong>{intl.formatMessage({ id: 'app.gamelanguagedesc1' })}
            <br></br>
            <strong>{intl.formatMessage({ id: 'app.pc' })} </strong>{intl.formatMessage({ id: 'app.gamelanguagedesc2' })}
            <br></br>
            <br></br>
            <strong>*{intl.formatMessage({ id: 'app.gamelanguagedesc3' })}</strong>
            </p>
          </div>
        </Panel>

        <Panel header={intl.formatMessage({ id: 'app.purchcosmetics' })} key="5">
          <div>
            <p>{intl.formatMessage({ id: 'app.purchcosmeticsdesc1' })} <a href="https://mgo2pc.com/login">{intl.formatMessage({ id: 'app.mgo2pcwebsite' })}</a>, 
              {" "}{intl.formatMessage({ id: 'app.purchcosmeticsdesc2' })} <a href="https://mgo2pc.com/shop">{intl.formatMessage({ id: 'app.rwdshop' })}</a>. 
              {" "}{intl.formatMessage({ id: 'app.purchcosmeticsdesc3' })}
              <br></br><br></br>
              {intl.formatMessage({ id: 'app.purchcosmeticsdesc4' })}
              <br></br><br></br>
              {intl.formatMessage({ id: 'app.purchcosmeticsdesc5' })}</p>
          </div>
        </Panel>

        <Panel header={intl.formatMessage({ id: 'app.moderation' })} key="7">
          <div>
            <p>{intl.formatMessage({ id: 'app.moderationdesc' })} <a href="https://discord.com/invite/MNqmzuW2wH">{intl.formatMessage({ id: 'app.discord' })}</a>.</p>
          </div>
        </Panel>

        <Panel header={intl.formatMessage({ id: 'app.linux' })} key="9">
          <div>
            <p>{intl.formatMessage({ id: 'app.linuxdesc1' })}<br></br>{intl.formatMessage({ id: 'app.linuxdesc2' })}</p>
          </div>
        </Panel>

        <Panel header={intl.formatMessage({ id: 'app.mnk' })} key="10">
          <div>
            <p>{intl.formatMessage({ id: 'app.mnkdesc' })}</p>
          </div>
        </Panel>

        <Panel header={intl.formatMessage({ id: 'app.donation' })} key="11">
          <div>
            <p>
            {intl.formatMessage({ id: 'app.donationdesc' })}
            </p>
          </div>
        </Panel>

        <Panel header={intl.formatMessage({ id: 'app.sound' })} key="12">
          <div>
            <p>{intl.formatMessage({ id: 'app.sounddesc1' })}<br></br>{intl.formatMessage({ id: 'app.sounddesc2' })}</p>
          </div>
        </Panel>

        <Panel header={intl.formatMessage({ id: 'app.fullscreen' })} key="13">
          <div>
            <p>{intl.formatMessage({ id: 'app.fullscreendesc1' })} <a href="https://youtu.be/eCBp_D7koWs">{intl.formatMessage({ id: 'app.fullscreendesc2' })}</a>.</p>
          </div>
        </Panel>

        <Panel header={intl.formatMessage({ id: 'app.resolution' })} key="14">
          <div>
            <p>{intl.formatMessage({ id: 'app.resolutiondesc' })}</p>
          </div>
        </Panel>

        <Panel header={intl.formatMessage({ id: 'app.host' })} key="15">
          <div>
            <p>{intl.formatMessage({ id: 'app.hostdesc' })}</p>
            <Divider></Divider>
            <p><strong>{intl.formatMessage({ id: 'app.upnp' })}:</strong> {intl.formatMessage({ id: 'app.upnpdesc' })} <a href="https://media.discordapp.net/attachments/817184487061454928/1182987635078217738/image.png?ex=6586b217&is=65743d17&hm=08545b81bdd3bf5ddfed5f0c9ea49c789558837ae3581a534639d9fb71289e68&=&format=webp&quality=lossless">{intl.formatMessage({ id: 'app.guide' })}</a>.</p>
            <p><strong>{intl.formatMessage({ id: 'app.portforward' })}:</strong> {intl.formatMessage({ id: 'app.portforwarddesc' })} <a href="https://www.youtube.com/watch?v=8G4Clb8uQ2g">{intl.formatMessage({ id: 'app.here' })}</a>.</p>
            <p><strong>{intl.formatMessage({ id: 'app.portmapper' })}:</strong> {intl.formatMessage({ id: 'app.portmapperdesc1' })} <a href="https://www.youtube.com/watch?v=eENjFkI7Zts">{intl.formatMessage({ id: 'app.portmapperdesc2' })}</a>, {intl.formatMessage({ id: 'app.portmapperdesc3' })}</p>
          </div>
        </Panel>

        <Panel header={intl.formatMessage({ id: 'app.shadows' })} key="16">
          <div>
            <p>{intl.formatMessage({ id: 'app.shadowsdesc1' })} <a href="https://youtu.be/o1QT6okFVr8">{intl.formatMessage({ id: 'app.shadowsdesc2' })}</a>.</p>
          </div>
        </Panel>
      </Collapse>
    </PageContainer>
  );
};
