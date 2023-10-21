import { PageContainer } from '@ant-design/pro-layout';
import { Card, Typography } from 'antd';
import React from 'react';
import { useIntl } from 'umi';

const { Meta } = Card;
const { Text } = Typography;

type RankInfo = {
  id: number;
  name: string;
  description: JSX.Element;
};

export default (): React.ReactNode => {
  document.title = 'Ranking Guide - Metal Gear Online';
  const intl = useIntl();

  const ranks: RankInfo[] = [
    {
      id: 1,
      name: 'Foxhound',
      description: (
        <>
          <p>
            {intl.formatMessage({ id: 'app.kdrsrr' })}{' '}
            <Text type="warning">
              {intl.formatMessage({ id: 'app.dm' })}
              {', '}
              {intl.formatMessage({ id: 'app.tdm' })}
              {', '}
              {intl.formatMessage({ id: 'app.and' })} {intl.formatMessage({ id: 'app.sne' })}
            </Text>{' '}
            {intl.formatMessage({ id: 'app.atleast' })} <Text type="success">1.45</Text>
          </p>
          <p>
            {intl.formatMessage({ id: 'app.win%in' })}{' '}
            <Text type="warning">
              {intl.formatMessage({ id: 'app.cap' })}
              {', '}
              {intl.formatMessage({ id: 'app.base' })}
              {', '}
              {intl.formatMessage({ id: 'app.bomb' })}
              {', '}
              {intl.formatMessage({ id: 'app.res' })}
              {', '}
              {intl.formatMessage({ id: 'app.and' })} {intl.formatMessage({ id: 'app.tsne' })}
            </Text>{' '}
            {intl.formatMessage({ id: 'app.atleast' })} <Text type="success">52.5%</Text>
          </p>
          <p>
            {intl.formatMessage({ id: 'app.win%in' })}{' '}
            <Text type="warning">{intl.formatMessage({ id: 'app.race' })}</Text>{' '}
            {intl.formatMessage({ id: 'app.atleast' })} <Text type="success">50%</Text>
          </p>
          <p>
            {intl.formatMessage({ id: 'app.basecapratio' })} <Text type="success">1.60</Text>
          </p>
          <p>
            {intl.formatMessage({ id: 'app.withdrawel' })} <Text type="success">≤2%</Text>
          </p>
          <p>
            <Text type="success">100</Text> {intl.formatMessage({ id: 'app.totalrounds' })}
          </p>
        </>
      ),
    },

    {
      id: 2,
      name: 'Fox',
      description: (
        <>
          <p>
            {intl.formatMessage({ id: 'app.kdrsrr' })}{' '}
            <Text type="warning">
              {intl.formatMessage({ id: 'app.dm' })}
              {', '}
              {intl.formatMessage({ id: 'app.tdm' })}
              {', '}
              {intl.formatMessage({ id: 'app.and' })} {intl.formatMessage({ id: 'app.sne' })}
            </Text>{' '}
            {intl.formatMessage({ id: 'app.atleast' })} <Text type="success">1.40</Text>
          </p>
          <p>
            {intl.formatMessage({ id: 'app.win%in' })}{' '}
            <Text type="warning">
              {intl.formatMessage({ id: 'app.cap' })}
              {', '}
              {intl.formatMessage({ id: 'app.base' })}
              {', '}
              {intl.formatMessage({ id: 'app.bomb' })}
              {', '}
              {intl.formatMessage({ id: 'app.res' })}
              {', '}
              {intl.formatMessage({ id: 'app.and' })} {intl.formatMessage({ id: 'app.tsne' })}
            </Text>{' '}
            {intl.formatMessage({ id: 'app.atleast' })}
            <Text type="success"> 47.5%</Text>
          </p>
          <p>
            {intl.formatMessage({ id: 'app.win%in' })}{' '}
            <Text type="warning">{intl.formatMessage({ id: 'app.race' })}</Text>{' '}
            {intl.formatMessage({ id: 'app.atleast' })} <Text type="success">45%</Text>
          </p>
          <p>
            {intl.formatMessage({ id: 'app.basecapratio' })} <Text type="success">1.40</Text>
          </p>
          <p>
            {intl.formatMessage({ id: 'app.withdrawel' })} <Text type="success">≤2%</Text>
          </p>
          <p>
            <Text type="success">50</Text> {intl.formatMessage({ id: 'app.totalrounds' })}
          </p>
        </>
      ),
    },
    {
      id: 3,
      name: 'Doberman',
      description: (
        <>
          <p>
            {intl.formatMessage({ id: 'app.kdrsrr' })}{' '}
            <Text type="warning">
              {intl.formatMessage({ id: 'app.dm' })}
              {', '}
              {intl.formatMessage({ id: 'app.tdm' })}
              {', '}
              {intl.formatMessage({ id: 'app.and' })} {intl.formatMessage({ id: 'app.sne' })}
            </Text>{' '}
            {intl.formatMessage({ id: 'app.atleast' })}
            <Text type="success"> 1.35</Text>
          </p>
          <p>
            {intl.formatMessage({ id: 'app.win%in' })}{' '}
            <Text type="warning">
              {intl.formatMessage({ id: 'app.cap' })}
              {', '}
              {intl.formatMessage({ id: 'app.base' })}
              {', '}
              {intl.formatMessage({ id: 'app.bomb' })}
              {', '}
              {intl.formatMessage({ id: 'app.res' })}
              {', '}
              {intl.formatMessage({ id: 'app.and' })} {intl.formatMessage({ id: 'app.tsne' })}
            </Text>{' '}
            {intl.formatMessage({ id: 'app.atleast' })} <Text type="success">45%</Text>
          </p>
          <p>
            {intl.formatMessage({ id: 'app.win%in' })}{' '}
            <Text type="warning">{intl.formatMessage({ id: 'app.race' })}</Text>{' '}
            {intl.formatMessage({ id: 'app.atleast' })} <Text type="success">42.5%</Text>
          </p>
          <p>
            {intl.formatMessage({ id: 'app.basecapratio' })} <Text type="success">1.20</Text>
          </p>
          <p>
            {intl.formatMessage({ id: 'app.withdrawel' })}
            <Text type="success"> ≤4%</Text>
          </p>
          <p>
            <Text type="success">25 </Text>
            {intl.formatMessage({ id: 'app.totalrounds' })}
          </p>
        </>
      ),
    },
    {
      id: 4,
      name: 'Hound',
      description: (
        <>
          <p>
            {intl.formatMessage({ id: 'app.kdrsrr' })}{' '}
            <Text type="warning">
              {intl.formatMessage({ id: 'app.dm' })}
              {', '}
              {intl.formatMessage({ id: 'app.tdm' })}
              {', '}
              {intl.formatMessage({ id: 'app.and' })} {intl.formatMessage({ id: 'app.sne' })}
            </Text>{' '}
            {intl.formatMessage({ id: 'app.atleast' })}
            <Text type="success"> 1.30</Text>
          </p>
          <p>
            {intl.formatMessage({ id: 'app.win%in' })}{' '}
            <Text type="warning">
              {intl.formatMessage({ id: 'app.cap' })}
              {', '}
              {intl.formatMessage({ id: 'app.base' })}
              {', '}
              {intl.formatMessage({ id: 'app.bomb' })}
              {', '}
              {intl.formatMessage({ id: 'app.res' })}
              {', '}
              {intl.formatMessage({ id: 'app.and' })} {intl.formatMessage({ id: 'app.tsne' })}
            </Text>{' '}
            {intl.formatMessage({ id: 'app.atleast' })} <Text type="success">42.5%</Text>
          </p>
          <p>
            {intl.formatMessage({ id: 'app.win%in' })}{' '}
            <Text type="warning">{intl.formatMessage({ id: 'app.race' })}</Text>{' '}
            {intl.formatMessage({ id: 'app.atleast' })}
            <Text type="success"> 40%</Text>
          </p>
          <p>
            {intl.formatMessage({ id: 'app.basecapratio' })} <Text type="success">1.00</Text>
          </p>
          <p>
            {intl.formatMessage({ id: 'app.withdrawel' })} <Text type="success">≤4%</Text>
          </p>
          <p>
            <Text type="success">5 </Text>
            {intl.formatMessage({ id: 'app.totalrounds' })}
          </p>
        </>
      ),
    },
    {
      id: 5,
      name: 'Crocodile',
      description: (
        <>
          <p>
            {intl.formatMessage({ id: 'app.kdrsrr' })} {`>=`} <Text type="success">1.50</Text>
          </p>
          <br />
        </>
      ),
    },
    {
      id: 6,
      name: 'Eagle',
      description: (
        <>
          <p>
            {intl.formatMessage({ id: 'app.kdrsrr' })} {`>=`} <Text type="success">1.30</Text>
          </p>
          <p>
            {intl.formatMessage({ id: 'app.headbodyratio' })} {`>=`}{' '}
            <Text type="success">0.50</Text>
          </p>
        </>
      ),
    },
    {
      id: 7,
      name: 'Jaws',
      description: (
        <>
          <p>
            {intl.formatMessage({ id: 'app.kdrsrr' })} {`>=`} <Text type="success">1.25</Text>
          </p>
          <p>
            {intl.formatMessage({ id: 'app.knifekillratio' })} {`>=`}{' '}
            <Text type="success">0.075</Text>
          </p>
          <br />
        </>
      ),
    },
    {
      id: 8,
      name: 'Water Bear',
      description: (
        <>
          <p>
            {intl.formatMessage({ id: 'app.survivalratio' })}{' '}
            <Text type="warning">{intl.formatMessage({ id: 'app.res' })}</Text> and{' '}
            <Text type="warning">{intl.formatMessage({ id: 'app.tsne' })}</Text> {`<=`}{' '}
            <Text type="success">0.50</Text>
          </p>
          <br />
        </>
      ),
    },
    {
      id: 9,
      name: 'Sloth',
      description: (
        <>
          <p>
            {intl.formatMessage({ id: 'app.kdrrank' })} {`<=`} <Text type="success">0.85</Text>
          </p>
          <p>
            {intl.formatMessage({ id: 'app.headshotdeathratio' })} {`>=`}{' '}
            <Text type="success">0.60</Text>
          </p>
          <p>
            {intl.formatMessage({ id: 'app.stunratio' })} {`<=`} <Text type="success">0.85</Text>
          </p>
          <br />
        </>
      ),
    },
    {
      id: 10,
      name: 'Flying Squirrel',
      description: (
        <>
          <p>
            {intl.formatMessage({ id: 'app.rollratio' })} {`>=`} <Text type="success">15</Text>
          </p>
          <br />
        </>
      ),
    },
    {
      id: 11,
      name: 'Pigeon',
      description: (
        <>
          <p>
            {intl.formatMessage({ id: 'app.stunkillratio' })} {`>=`}{' '}
            <Text type="success">1.20</Text>
          </p>
          <p>
            {intl.formatMessage({ id: 'app.stunratio' })} {`>=`} <Text type="success">1.20</Text>
          </p>
          <br />
          <br />
        </>
      ),
    },
    {
      id: 12,
      name: 'Owl',
      description: (
        <>
          <p>
            {intl.formatMessage({ id: 'app.envg' })} {`>=`} <Text type="success">0.05</Text>
          </p>
          <br />
        </>
      ),
    },
    {
      id: 13,
      name: 'Tsuchinoko',
      description: (
        <>
          <p>
            {intl.formatMessage({ id: 'app.lastlogin' })} {`>=`} <Text type="success">30</Text>{' '}
            {intl.formatMessage({ id: 'app.dayssincelastplay' })}
          </p>
          <br />
        </>
      ),
    },
    {
      id: 14,
      name: 'Snake',
      description: (
        <>
          <p>
            {intl.formatMessage({ id: 'app.sneratio' })} {`>=`} <Text type="success">0.60</Text>
          </p>
          <p>
            {intl.formatMessage({ id: 'app.sneweeklyrounds' })} {`>=`}{' '}
            <Text type="success">30</Text>
          </p>
          <br />
        </>
      ),
    },
    {
      id: 15,
      name: 'Kerotan',
      description: (
        <>
          <p>
            <Text type="warning">{intl.formatMessage({ id: 'app.cap' })}</Text>{' '}
            {intl.formatMessage({ id: 'app.moderoundsplayedratio' })} {`>=`}{' '}
            <Text type="success">0.60</Text>
          </p>
          <p>
            {intl.formatMessage({ id: 'app.weeklyrounds' })}{' '}
            <Text type="warning">{intl.formatMessage({ id: 'app.cap' })}</Text> {`>=`}{' '}
            <Text type="success">30</Text>
          </p>
          <br />
        </>
      ),
    },
    {
      id: 16,
      name: 'GA-KO',
      description: (
        <>
          <p>
            <Text type="warning">{intl.formatMessage({ id: 'app.res' })}</Text>{' '}
            {intl.formatMessage({ id: 'app.moderoundsplayedratio' })} {`>=`}{' '}
            <Text type="success">0.60</Text>
          </p>
          <p>
            {intl.formatMessage({ id: 'app.weeklyrounds' })}{' '}
            <Text type="warning">{intl.formatMessage({ id: 'app.res' })}</Text> {`>=`}{' '}
            <Text type="success">30</Text>
          </p>
          <br />
        </>
      ),
    },
    {
      id: 17,
      name: 'Chameleon',
      description: (
        <>
          <p>
            <Text type="warning">{intl.formatMessage({ id: 'app.tsne' })}</Text>{' '}
            {intl.formatMessage({ id: 'app.moderoundsplayedratio' })} {`>=`}{' '}
            <Text type="success">0.60</Text>
          </p>
          <p>
            {intl.formatMessage({ id: 'app.weeklyrounds' })}{' '}
            <Text type="warning">{intl.formatMessage({ id: 'app.tsne' })}</Text> {`>=`}{' '}
            <Text type="success">30</Text>
          </p>
          <br />
        </>
      ),
    },
    {
      id: 18,
      name: 'Chicken',
      description: (
        <>
          <p>
            {intl.formatMessage({ id: 'app.killsperround' })} {`<=`}{' '}
            <Text type="success">0.30</Text>
          </p>
          <p>
            {intl.formatMessage({ id: 'app.stunsperround' })} {`<=`}{' '}
            <Text type="success">0.30</Text>
          </p>
          <p>
            {intl.formatMessage({ id: 'app.stunsreceivedperround' })} {`<=`}{' '}
            <Text type="success">0.50</Text>
          </p>
          <p>
            {intl.formatMessage({ id: 'app.deathsperround' })} {`<=`}{' '}
            <Text type="success">0.50</Text>
          </p>
          <br />
        </>
      ),
    },
    {
      id: 19,
      name: 'Bear',
      description: (
        <>
          <p>
            {intl.formatMessage({ id: 'app.cqcperround' })} {`>=`} <Text type="success">5</Text>
          </p>
          <br />
        </>
      ),
    },
    {
      id: 20,
      name: 'Tortoise',
      description: (
        <>
          <p>
            {intl.formatMessage({ id: 'app.boxperround' })} {`>=`} <Text type="success">15</Text>
          </p>
          <br />
        </>
      ),
    },
    {
      id: 21,
      name: 'Bee',
      description: (
        <>
          <p>
            {intl.formatMessage({ id: 'app.scansperround' })} {`>=`}{' '}
            <Text type="success">0.30</Text>
          </p>
          <br />
        </>
      ),
    },
    {
      id: 22,
      name: 'Rat',
      description: (
        <>
          <p>
            {intl.formatMessage({ id: 'app.trapcaughtperround' })} {`>=`}{' '}
            <Text type="success">0.30</Text>
          </p>
          <br />
        </>
      ),
    },
    {
      id: 23,
      name: 'Fighting Fish',
      description: (
        <>
          <p>
            <Text type="warning">{intl.formatMessage({ id: 'app.dm' })}</Text>{' '}
            {intl.formatMessage({ id: 'app.moderoundsplayedratio' })} {`>=`}{' '}
            <Text type="success">0.60</Text>
          </p>
          <p>
            {intl.formatMessage({ id: 'app.weeklyrounds' })}{' '}
            <Text type="warning">{intl.formatMessage({ id: 'app.dm' })}</Text> {`>=`}{' '}
            <Text type="success">30</Text>
          </p>
          <br />
        </>
      ),
    },
    {
      id: 24,
      name: 'Komodo Dragon',
      description: (
        <>
          <p>
            <Text type="warning">{intl.formatMessage({ id: 'app.sdm' })}</Text>{' '}
            {intl.formatMessage({ id: 'app.moderoundsplayedratio' })} {`>=`}{' '}
            <Text type="success">0.60</Text>
          </p>
          <p>
            {intl.formatMessage({ id: 'app.weeklyrounds' })}{' '}
            <Text type="warning">{intl.formatMessage({ id: 'app.sdm' })}</Text> {`>=`}{' '}
            <Text type="success">30</Text>
          </p>
          <br />
        </>
      ),
    },
    {
      id: 26,
      name: 'Killer Whale',
      description: (
        <>
          <p>
            <Text type="warning">{intl.formatMessage({ id: 'app.tdm' })}</Text>{' '}
            {intl.formatMessage({ id: 'app.moderoundsplayedratio' })} {`>=`}{' '}
            <Text type="success">0.60</Text>
          </p>
          <p>
            {intl.formatMessage({ id: 'app.weeklyrounds' })}{' '}
            <Text type="warning">{intl.formatMessage({ id: 'app.tdm' })}</Text> {`>=`}{' '}
            <Text type="success">30</Text>
          </p>
          <br />
        </>
      ),
    },
    {
      id: 27,
      name: 'Elephant',
      description: (
        <>
          <p>
            <Text type="warning">{intl.formatMessage({ id: 'app.base' })} </Text>
            {intl.formatMessage({ id: 'app.moderoundsplayedratio' })} {`>=`}{' '}
            <Text type="success">0.60</Text>
          </p>
          <p>
            {intl.formatMessage({ id: 'app.weeklyrounds' })}{' '}
            <Text type="warning">{intl.formatMessage({ id: 'app.base' })}</Text> {`>=`}{' '}
            <Text type="success">30</Text>
          </p>
          <br />
        </>
      ),
    },
    {
      id: 28,
      name: 'Cuckoo',
      description: (
        <>
          <p>
            <Text type="warning">{intl.formatMessage({ id: 'app.bomb' })}</Text>{' '}
            {intl.formatMessage({ id: 'app.moderoundsplayedratio' })} {`>=`}{' '}
            <Text type="success">0.60</Text>
          </p>
          <p>
            {intl.formatMessage({ id: 'app.weeklyrounds' })}{' '}
            <Text type="warning">{intl.formatMessage({ id: 'app.bomb' })}</Text> {`>=`}{' '}
            <Text type="success">30</Text>
          </p>

          <br />
        </>
      ),
    },
    {
      id: 29,
      name: 'Hog',
      description: (
        <>
          <p>
            <Text type="warning">{intl.formatMessage({ id: 'app.race' })}</Text>{' '}
            {intl.formatMessage({ id: 'app.moderoundsplayedratio' })} {`>=`}{' '}
            <Text type="success">0.60</Text>
          </p>
          <p>
            {intl.formatMessage({ id: 'app.weeklyrounds' })}{' '}
            <Text type="warning">{intl.formatMessage({ id: 'app.race' })}</Text> {`>=`}{' '}
            <Text type="success">30</Text>
          </p>
          <br />
        </>
      ),
    },
  ];
  const cards: JSX.Element[] = [];

  let countArrayAnimalRanks = 1;

  for (const rank of ranks) {
    const pathToImgAndShowRankEmblem = `/static/media/emblem/${rank.id}.png`;

    let currentNumber = rank.id;
    cards.push(
      <div className="col-md-3 text-center">
        <Card hoverable style={{ marginBottom: '16px', minHeight: '375px' }}>
          <img src={`${pathToImgAndShowRankEmblem}`} />
          <Meta title={rank.name} description={rank.description} />
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
