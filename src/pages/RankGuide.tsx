import { getRankId, getRankPreview } from '@/system/utility';
import { PageContainer } from '@ant-design/pro-layout';
import { Alert, Card, Divider, Typography } from 'antd';
import React from 'react';

const { Meta } = Card;
const { Text } = Typography;

type RankInfo = {
  name: string;
  description: JSX.Element;
};
export default (): React.ReactNode => {
  document.title = 'Ranking Guide - Metal Gear Online';

  const ranks: RankInfo[] = [
    {
      name: 'Foxhound',
      description: (
        <>
          <p>
            Kills + Stuns ÷ Deaths + Stuns Received in <Text type="warning">DM, TDM, and SNE</Text>{' '}
            at least <Text type="success">1.45</Text>
          </p>
          <p>
            Win % in <Text type="warning">CAP, BASE, BOMB, RES, TSNE</Text> at least{' '}
            <Text type="success">52.5%</Text>
          </p>
          <p>
            Win % in <Text type="warning">RACE</Text> at least <Text type="success">50%</Text>
          </p>
          <p>
            Bases capped ÷ Total Base Rounds = higher than <Text type="success">1.60</Text>
          </p>
          <p>
            Withdrawal % = <Text type="success">≤2%</Text>
          </p>
          <p>
            <Text type="success">100</Text> rounds in all previously mentioned modes.
          </p>
        </>
      ),
    },
    {
      name: 'Fox',
      description: (
        <>
          <p>
            Kills + Stuns ÷ Deaths + Stuns Received in <Text type="warning">DM, TDM, and SNE</Text>{' '}
            at least <Text type="success">1.40</Text>
          </p>
          <p>
            Win % in <Text type="warning">CAP, BASE, BOMB, RES, TSNE</Text> at least{' '}
            <Text type="success">47.5%</Text>
          </p>
          <p>
            Win % in <Text type="warning">RACE</Text> at least <Text type="success">45%</Text>
          </p>
          <p>
            Bases capped ÷ Total Base Rounds = higher than <Text type="success">1.40</Text>
          </p>
          <p>
            Withdrawal % = <Text type="success">≤2%</Text>
          </p>
          <p>
            <Text type="success">50</Text> rounds in all previously mentioned modes.
          </p>
        </>
      ),
    },
    {
      name: 'Doberman',
      description: (
        <>
          <p>
            Kills + Stuns ÷ Deaths + Stuns Received in <Text type="warning">DM, TDM, and SNE</Text>{' '}
            at least <Text type="success">1.35</Text>
          </p>
          <p>
            Win % in <Text type="warning">CAP, BASE, BOMB, RES, TSNE</Text> at least{' '}
            <Text type="success">45%</Text>
          </p>
          <p>
            Win % in <Text type="warning">RACE</Text> at least <Text type="success">42.5%</Text>
          </p>
          <p>
            Bases capped ÷ Total Base Rounds = higher than <Text type="success">1.20</Text>
          </p>
          <p>
            Withdrawal % = <Text type="success">≤4%</Text>
          </p>
          <p>
            <Text type="success">25</Text> rounds in all previously mentioned modes.
          </p>
        </>
      ),
    },
    {
      name: 'Hound',
      description: (
        <>
          <p>
            Kills + Stuns ÷ Deaths + Stuns Received in <Text type="warning">DM, TDM, and SNE</Text>{' '}
            at least <Text type="success">1.30</Text>
          </p>
          <p>
            Win % in <Text type="warning">CAP, BASE, BOMB, RES, TSNE</Text> at least{' '}
            <Text type="success">42.5%</Text>
          </p>
          <p>
            Win % in <Text type="warning">RACE</Text> at least <Text type="success">40%</Text>
          </p>
          <p>
            Bases capped ÷ Total Base Rounds = higher than <Text type="success">1.00</Text>
          </p>
          <p>
            Withdrawal % = <Text type="success">≤4%</Text>
          </p>
          <p>
            <Text type="success">5</Text> rounds in all previously mentioned modes.
          </p>
        </>
      ),
    },
    {
      name: 'Eagle',
      description: (
        <>
          <p>
            Kills + Stuns ÷ Deaths + Stuns Received {`>=`} <Text type="success">1.30</Text>
          </p>
          <p>
            Headshot Kills + Headshot Stuns ÷ Kills + Stuns {`>=`} <Text type="success">0.50</Text>
          </p>
        </>
      ),
    },
    {
      name: 'Pigeon',
      description: (
        <>
          <p>
            Stuns ÷ Kills {`>=`} <Text type="success">1.20</Text>
          </p>
          <p>
            Stuns ÷ Stuns Received {`>=`} <Text type="success">1.20</Text>
          </p>
          <br />
          <br />
        </>
      ),
    },
    {
      name: 'Jaws',
      description: (
        <>
          <p>
            Kills + Stuns ÷ Deaths + Stuns Received {`>=`} <Text type="success">1.25</Text>
          </p>
          <p>
            Knife kills ÷ Total Kills {`>=`} <Text type="success">0.075</Text>
          </p>
          <br />
        </>
      ),
    },
    {
      name: 'Crocodile',
      description: (
        <>
          <p>
            Kills + Stuns ÷ Deaths + Stuns Received {`>=`} <Text type="success">1.50</Text>
          </p>
          <p>.</p>
          <br />
        </>
      ),
    },
    {
      name: 'Bee',
      description: (
        <>
          <p>
            Scans ÷ Rounds {`>=`} <Text type="success">0.3</Text>
          </p>
          <br />
        </>
      ),
    },
    {
      name: 'Chameleon',
      description: (
        <>
          <p>
            Team Sneaking Rounds ÷ Overall Rounds {`>=`} <Text type="success">0.6</Text>
          </p>
          <p>
            Weekly Rounds of Team Sneaking {`>=`} <Text type="success">30</Text>
          </p>
          <br />
        </>
      ),
    },
    {
      name: 'Chicken',
      description: (
        <>
          <p>
            Kills ÷ Rounds {`<=`} <Text type="success">0.3</Text>
          </p>
          <p>
            Stuns ÷ Rounds {`<=`} <Text type="success">0.3</Text>
          </p>
          <p>
            Stuns Received ÷ Rounds {`<=`} <Text type="success">0.5</Text>
          </p>
          <p>
            Deaths ÷ Rounds {`<=`} <Text type="success">0.5</Text>
          </p>
          <br />
        </>
      ),
    },
    {
      name: 'Cuckoo',
      description: (
        <>
          <p>
            Bomb Rounds ÷ Overall Rounds {`>=`} <Text type="success">0.6</Text>
          </p>
          <p>
            Weekly Rounds of Bomb Mission {`>=`} <Text type="success">30</Text>
          </p>

          <br />
        </>
      ),
    },
    {
      name: 'Elephant',
      description: (
        <>
          <p>
            Base Rounds ÷ Overall Rounds {`>=`} <Text type="success">0.6</Text>
          </p>
          <p>
            Weekly Rounds of Base Mission {`>=`} <Text type="success">30</Text>
          </p>
          <br />
        </>
      ),
    },
    {
      name: 'Fish',
      description: (
        <>
          <p>
            Deathmatch Rounds ÷ Overall Rounds {`>=`} <Text type="success">0.6</Text>
          </p>
          <p>
            Weekly Rounds of Deathmatch Mission {`>=`} <Text type="success">30</Text>
          </p>
          <br />
        </>
      ),
    },
    {
      name: 'Squirrel',
      description: (
        <>
          <p>
            Rolls ÷ Rounds {`>=`} <Text type="success">15.0</Text>
          </p>
          <br />
        </>
      ),
    },
    {
      name: 'GaKo',
      description: (
        <>
          <p>
            Rescue Rounds ÷ Overall Rounds {`>=`} <Text type="success">0.6</Text>
          </p>
          <p>
            Weekly Rounds of Rescue Mission {`>=`} <Text type="success">30</Text>
          </p>
          <br />
        </>
      ),
    },
    {
      name: 'Kerotan',
      description: (
        <>
          <p>
            Capture Rounds ÷ Overall Rounds {`>=`} <Text type="success">0.6</Text>
          </p>
          <p>
            Weekly Rounds of Capture Mission {`>=`} <Text type="success">30</Text>
          </p>
          <br />
        </>
      ),
    },
    {
      name: 'Whale',
      description: (
        <>
          <p>
            Team Deathmatch Rounds ÷ Overall Rounds {`>=`} <Text type="success">0.6</Text>
          </p>
          <p>
            Weekly Rounds of Team Deathmatch Mission {`>=`} <Text type="success">30</Text>
          </p>
          <br />
        </>
      ),
    },
    {
      name: 'Hog',
      description: (
        <>
          <p>
            Race Rounds ÷ Overall Rounds {`>=`} <Text type="success">0.6</Text>
          </p>
          <p>
            Weekly Rounds of Race Mission {`>=`} <Text type="success">30</Text>
          </p>
          <br />
        </>
      ),
    },
    {
      name: 'Komodo',
      description: (
        <>
          <p>
            Stealth Deathmatch Rounds ÷ Overall Rounds {`>=`} <Text type="success">0.6</Text>
          </p>
          <p>
            Weekly Rounds of Stealth Deathmatch Mission {`>=`} <Text type="success">30</Text>
          </p>
          <br />
        </>
      ),
    },
    {
      name: 'Owl',
      description: (
        <>
          <p>
            Time Using ENVG Goggles ÷ Play Time {`>=`} <Text type="success">0.05</Text>
          </p>
          <br />
        </>
      ),
    },
    {
      name: 'Pigeon',
      description: (
        <>
          <p>
            Stuns ÷ Kills {`<=`} <Text type="success">1.2</Text>
          </p>
          <p>
            Stuns ÷ Stuns Received {`<=`} <Text type="success">1.2</Text>
          </p>
          <br />
        </>
      ),
    },
    {
      name: 'Rat',
      description: (
        <>
          <p>
            Stuck In Trap ÷ Rounds {`>=`} <Text type="success">0.3</Text>
          </p>
          <br />
        </>
      ),
    },
    {
      name: 'Bear',
      description: (
        <>
          <p>
            CQC Attacks ÷ Rounds {`>=`} <Text type="success">5.0</Text>
          </p>
          <br />
        </>
      ),
    },
    {
      name: 'Sloth',
      description: (
        <>
          <p>
            Kills ÷ Deaths {`<=`} <Text type="success">0.85</Text>
          </p>
          <p>
            Headshot Deaths ÷ Deaths {`>=`} <Text type="success">0.60</Text>
          </p>
          <p>
            Stuns ÷ Stuns Received {`<=`} <Text type="success">0.85</Text>
          </p>
          <br />
        </>
      ),
    },
    {
      name: 'Snake',
      description: (
        <>
          <p>
            Sneaking Rounds ÷ Overall Rounds {`>=`} <Text type="success">0.6</Text>
          </p>
          <p>
            Weekly Rounds of Sneaking Mission {`>=`} <Text type="success">30</Text>
          </p>
          <br />
        </>
      ),
    },
    {
      name: 'Tortoise',
      description: (
        <>
          <p>
            Box Uses ÷ Overall Rounds {`>=`} <Text type="success">15.0</Text>
          </p>
          <br />
        </>
      ),
    },
    {
      name: 'Tsuchinoko',
      description: (
        <>
          <p>
            Last Login {`>=`} <Text type="success">30.0</Text> Days
          </p>
          <br />
        </>
      ),
    },
    {
      name: 'Waterbear',
      description: (
        <>
          <p>
            Deaths ÷ Rounds Played in RES and TSNE {`<=`} <Text type="success">0.5</Text>
          </p>
          <br />
        </>
      ),
    },
  ];

  const cards: JSX.Element[] = [];

  for (const rank of ranks) {
    cards.push(
      <div className="col-md-3 text-center">
        <Card hoverable style={{ marginBottom: '16px', minHeight: '400px' }}>
          <img src={`${getRankPreview(getRankId(rank.name))}`} />
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
