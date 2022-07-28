import { PageContainer } from '@ant-design/pro-layout';
import { Card, Divider } from 'antd';
import React from 'react';

const { Meta } = Card;

const tutorialData = [
  { embed: 'TYi9oyWTqaM', desc: '[1] Enable Auto Aim [Beginner]' },
  { embed: 'o1QT6okFVr8', desc: '[2] Turn off Shadow [Beginner]' },
  { embed: 'wlgg97BtINo', desc: '[3] Run properly [Beginner]' },
  { embed: 'n9mDcF1P-UQ', desc: '[4] Mark Enemies [Beginner]' },
  { embed: '5WbZ_sd80WY', desc: '[5] Item/Weapon Switch [Beginner]' },
  { embed: 'URs1DVA4prg', desc: '[6] Reload [Beginner]' },
  { embed: 'kJt7YqtUmh4', desc: '[7] Recover Stamina [Beginner]' },
  { embed: 'CURmU81edEA', desc: '[8] Underhand Grenade [Beginner]' },
  { embed: 'UDrRDOI79bA', desc: 'BEGINNERS GUIDE' },
  { embed: 'X7fz7GR5qs0', desc: 'Tips For New Players' },
  { embed: 'wWJSdpPfEm0', desc: 'Tips and Tricks from Solid007 for Beginners' },
  { embed: 'zIU5GIjtZ8E', desc: 'Advanced Knife Tutorial (6 Ways)' },
  { embed: 'Ac9QTCj5_4g', desc: 'Tips for New players! No Fall Damage' },
  { embed: '_QtFbcBYqaE', desc: 'TSNE Skills Overview & MGO2PC Camera Settings' },
  { embed: 'lZLCWcIUBv8', desc: 'Tips To Be Better' },
];

export default (): React.ReactNode => {
  document.title = 'Guides - Metal Gear Online';

  const cards = [];

  for (const data of tutorialData) {
    cards.push(
      <div key={data.embed} className="col-md-4 mb-3">
        <Card>
          <Meta description={data.desc} />
          <Divider />
          <div className="container-video">
            <iframe
              className="video"
              width="10000"
              height="10000"
              src={`https://www.youtube.com/embed/${data.embed}`}
              title="PC Setup Guide"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </Card>
      </div>,
    );
  }

  return (
    <PageContainer>
      <div className="row">{cards}</div>
    </PageContainer>
  );
};
