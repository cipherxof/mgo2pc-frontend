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

  //Checks the current locale
  const currentLocale = intl.locale;

  //This variable object contains information for ranks snake, kertan, ga-ko, and Chameleon.
  // The word order changed depending on the locale. The below code deals with that
  const englishLocale = [
    {
      id: 14,
      name: 'Snake',
      description: (
        <>
          <p>
            <Text type="warning">{intl.formatMessage({ id: 'app.sne' })} </Text>{' '}
            {intl.formatMessage({ id: 'app.moderoundsplayedratio' })} {`>=`}{' '}
            <Text type="success">0.60</Text>
          </p>
          <p>
            {intl.formatMessage({ id: 'app.weeklyrounds' })}{' '}
            <Text type="warning">{intl.formatMessage({ id: 'app.sne' })}</Text> {`>=`}{' '}
            <Text type="success">30</Text>
          </p>
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
        </>
      ),
    },
  ];

  //This sentence structure works for both spanish and ita
  const itaspanishLocale = [
    {
      id: 14,
      name: 'Snake',
      description: (
        <>
          <p>
            {intl.formatMessage({ id: 'app.rounds2' })}{' '}
            <Text type="warning">{intl.formatMessage({ id: 'app.sne' })}</Text>{' '}
            {intl.formatMessage({ id: 'app.totalrounds2' })} {` `}
            {`>=`} <Text type="success">0.60</Text>
          </p>
          <p>
            {intl.formatMessage({ id: 'app.weeklyrounds' })}{' '}
            <Text type="warning">{intl.formatMessage({ id: 'app.sne' })}</Text> {`>=`}{' '}
            <Text type="success">30</Text>
          </p>
        </>
      ),
    },
    {
      id: 15,
      name: 'Kerotan',
      description: (
        <>
          <p>
            {intl.formatMessage({ id: 'app.rounds2' })}{' '}
            <Text type="warning">{intl.formatMessage({ id: 'app.cap' })}</Text>{' '}
            {intl.formatMessage({ id: 'app.totalrounds2' })} {` `}
            {`>=`} <Text type="success">0.60</Text>
          </p>
          <p>
            {intl.formatMessage({ id: 'app.weeklyrounds' })}{' '}
            <Text type="warning">{intl.formatMessage({ id: 'app.cap' })}</Text> {`>=`}{' '}
            <Text type="success">30</Text>
          </p>
        </>
      ),
    },
    {
      id: 16,
      name: 'GA-KO',
      description: (
        <>
          <p>
            {intl.formatMessage({ id: 'app.rounds2' })}{' '}
            <Text type="warning">{intl.formatMessage({ id: 'app.res' })}</Text>{' '}
            {intl.formatMessage({ id: 'app.totalrounds2' })} {` `}
            {`>=`} <Text type="success">0.60</Text>
          </p>
          <p>
            {intl.formatMessage({ id: 'app.weeklyrounds' })}{' '}
            <Text type="warning">{intl.formatMessage({ id: 'app.res' })}</Text> {`>=`}{' '}
            <Text type="success">30</Text>
          </p>
        </>
      ),
    },
    {
      id: 17,
      name: 'Chameleon',
      description: (
        <>
          <p>
            {intl.formatMessage({ id: 'app.rounds2' })}{' '}
            <Text type="warning">{intl.formatMessage({ id: 'app.tsne' })}</Text>{' '}
            {intl.formatMessage({ id: 'app.totalrounds2' })} {` `}
            {`>=`} <Text type="success">0.60</Text>
          </p>
          <p>
            {intl.formatMessage({ id: 'app.weeklyrounds' })}{' '}
            <Text type="warning">{intl.formatMessage({ id: 'app.tsne' })}</Text> {`>=`}{' '}
            <Text type="success">30</Text>
          </p>
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
        </>
      ),
    },
    {
      id: 23,
      name: 'Fighting Fish',
      description: (
        <>
          <p>
            {intl.formatMessage({ id: 'app.rounds2' })}{' '}
            <Text type="warning">{intl.formatMessage({ id: 'app.dm' })}</Text>{' '}
            {intl.formatMessage({ id: 'app.totalrounds2' })} {` `}
            {`>=`} <Text type="success">0.60</Text>
          </p>
          <p>
            {intl.formatMessage({ id: 'app.weeklyrounds' })}{' '}
            <Text type="warning">{intl.formatMessage({ id: 'app.dm' })}</Text> {`>=`}{' '}
            <Text type="success">30</Text>
          </p>
        </>
      ),
    },
    {
      id: 24,
      name: 'Komodo Dragon',
      description: (
        <>
          <p>
            {intl.formatMessage({ id: 'app.rounds2' })}{' '}
            <Text type="warning">{intl.formatMessage({ id: 'app.sdm' })}</Text>{' '}
            {intl.formatMessage({ id: 'app.totalrounds2' })} {` `} {`>=`}{' '}
            <Text type="success">0.60</Text>
          </p>
          <p>
            {intl.formatMessage({ id: 'app.weeklyrounds' })}{' '}
            <Text type="warning">{intl.formatMessage({ id: 'app.sdm' })}</Text> {`>=`}{' '}
            <Text type="success">30</Text>
          </p>
        </>
      ),
    },
    {
      id: 26,
      name: 'Killer Whale',
      description: (
        <>
          <p>
            {intl.formatMessage({ id: 'app.rounds2' })}{' '}
            <Text type="warning">{intl.formatMessage({ id: 'app.tdm' })}</Text>{' '}
            {intl.formatMessage({ id: 'app.totalrounds2' })} {` `} {`>=`}{' '}
            <Text type="success">0.60</Text>
          </p>
          <p>
            {intl.formatMessage({ id: 'app.weeklyrounds' })}{' '}
            <Text type="warning">{intl.formatMessage({ id: 'app.tdm' })}</Text> {`>=`}{' '}
            <Text type="success">30</Text>
          </p>
        </>
      ),
    },
    {
      id: 27,
      name: 'Elephant',
      description: (
        <>
          <p>
            {intl.formatMessage({ id: 'app.rounds2' })}{' '}
            <Text type="warning">{intl.formatMessage({ id: 'app.base' })} </Text>
            {intl.formatMessage({ id: 'app.totalrounds2' })} {` `} {`>=`}{' '}
            <Text type="success">0.60</Text>
          </p>
          <p>
            {intl.formatMessage({ id: 'app.weeklyrounds' })}{' '}
            <Text type="warning">{intl.formatMessage({ id: 'app.base' })}</Text> {`>=`}{' '}
            <Text type="success">30</Text>
          </p>
        </>
      ),
    },
    {
      id: 28,
      name: 'Cuckoo',
      description: (
        <>
          <p>
            {intl.formatMessage({ id: 'app.rounds2' })}{' '}
            <Text type="warning">{intl.formatMessage({ id: 'app.bomb' })}</Text>{' '}
            {intl.formatMessage({ id: 'app.totalrounds2' })} {` `} {`>=`}{' '}
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
            {intl.formatMessage({ id: 'app.rounds2' })}{' '}
            <Text type="warning">{intl.formatMessage({ id: 'app.race' })}</Text>{' '}
            {intl.formatMessage({ id: 'app.totalrounds2' })} {`>=`} <Text type="success">0.60</Text>
          </p>
          <p>
            {intl.formatMessage({ id: 'app.weeklyrounds' })}{' '}
            <Text type="warning">{intl.formatMessage({ id: 'app.race' })}</Text> {`>=`}{' '}
            <Text type="success">30</Text>
          </p>
        </>
      ),
    },
  ];

  //chescks if locale is spanish or italian. If so loads the relevant locale content
  const contentForLocale =
    currentLocale === 'es-ES' || currentLocale === 'it-IT' ? itaspanishLocale : englishLocale;

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
              {intl.formatMessage({ id: 'app.gramaticalcomma' })}{' '}
              {intl.formatMessage({ id: 'app.andfoxhound' })}{' '}
              {intl.formatMessage({ id: 'app.sne' })}
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
              {intl.formatMessage({ id: 'app.gramaticalcomma' })}{' '}
              {intl.formatMessage({ id: 'app.andfoxhound' })}{' '}
              {intl.formatMessage({ id: 'app.tsne' })}
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
              {intl.formatMessage({ id: 'app.gramaticalcomma' })}{' '}
              {intl.formatMessage({ id: 'app.andfox' })} {intl.formatMessage({ id: 'app.sne' })}
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
              {intl.formatMessage({ id: 'app.gramaticalcomma' })}{' '}
              {intl.formatMessage({ id: 'app.andfox' })} {intl.formatMessage({ id: 'app.tsne' })}
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
              {intl.formatMessage({ id: 'app.gramaticalcomma' })}{' '}
              {intl.formatMessage({ id: 'app.anddoberman' })}{' '}
              {intl.formatMessage({ id: 'app.sne' })}
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
              {intl.formatMessage({ id: 'app.gramaticalcomma' })}{' '}
              {intl.formatMessage({ id: 'app.anddoberman' })}{' '}
              {intl.formatMessage({ id: 'app.tsne' })}
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
              {intl.formatMessage({ id: 'app.gramaticalcomma' })}{' '}
              {intl.formatMessage({ id: 'app.andhound' })} {intl.formatMessage({ id: 'app.sne' })}
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
              {intl.formatMessage({ id: 'app.gramaticalcomma' })}{' '}
              {intl.formatMessage({ id: 'app.andhound' })} {intl.formatMessage({ id: 'app.tsne' })}
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
            <Text type="warning">
              {intl.formatMessage({ id: 'app.res' })}{' '}
              {intl.formatMessage({ id: 'app.andwaterbear' })}{' '}
              {intl.formatMessage({ id: 'app.tsne' })}
            </Text>{' '}
            {`<=`} <Text type="success">0.50</Text>
          </p>
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
        </>
      ),
    },
    ...contentForLocale,
  ];
  const cards: JSX.Element[] = [];

  for (const rank of ranks) {
  const pathToImgAndShowRankEmblem = `/static/media/emblem/${rank.id}.png`;

    cards.push(
      <div className="col-md-3 text-center">
        <Card hoverable style={{  margin: '15px 0', height: '90%' }}>
          <img src={`${pathToImgAndShowRankEmblem}`} alt={rank.name} 
           style={{  height: '128px', objectFit: 'cover' }
          }/>
          <Card.Meta title={rank.name} description={rank.description} style={{ marginBottom: '4px' }} />
        </Card>
      </div>
    );
  }

  return (
    <PageContainer>
      <div className="row">{cards}</div>
    </PageContainer>
  );
};



