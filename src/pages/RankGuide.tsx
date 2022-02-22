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
      description: (<>					
        <p>Kills + Stuns ÷ Deaths + Stuns Received in <Text type="warning">DM, TDM, SDM, and SNE</Text> at least <Text type="success">1.45</Text></p>
        <p>Win % in <Text type="warning">CAP, BASE, BOMB, RACE, RES, TSNE</Text> at least <Text type="success">55%</Text></p>
        <p>Bases capped ÷ Total Base Rounds = higher than <Text type="success">1.60</Text></p>
        <p>Withdrawal % = <Text type="success">≤2%</Text></p>
        <p><Text type="success">100</Text> rounds in all previously mentioned modes.</p>					
      </>),
    },
    {
      name: 'Fox',
      description: (<>					
        <p>Kills + Stuns ÷ Deaths + Stuns Received in <Text type="warning">DM, TDM, SDM, and SNE</Text> at least <Text type="success">1.40</Text></p>
        <p>Win % in <Text type="warning">CAP, BASE, BOMB, RACE, RES, TSNE</Text> at least <Text type="success">50%</Text></p>
        <p>Bases capped ÷ Total Base Rounds = higher than <Text type="success">1.40</Text></p>
        <p>Withdrawal % = <Text type="success">≤2%</Text></p>
        <p><Text type="success">50</Text> rounds in all previously mentioned modes.</p>					
      </>)
    },
    {
      name: 'Doberman',
      description: (<>					
        <p>Kills + Stuns ÷ Deaths + Stuns Received in <Text type="warning">DM, TDM, SDM, and SNE</Text> at least <Text type="success">1.35</Text></p>
        <p>Win % in <Text type="warning">CAP, BASE, BOMB, RACE, RES, TSNE</Text> at least <Text type="success">47.5%</Text></p>
        <p>Bases capped ÷ Total Base Rounds = higher than <Text type="success">1.20</Text></p>
        <p>Withdrawal % = <Text type="success">≤4%</Text></p>
        <p><Text type="success">50</Text> rounds in all previously mentioned modes.</p>					
      </>)
    },
    {
      name: 'Hound',
      description: (<>					
        <p>Kills + Stuns ÷ Deaths + Stuns Received in <Text type="warning">DM, TDM, SDM, and SNE</Text> at least <Text type="success">1.30</Text></p>
        <p>Win % in <Text type="warning">CAP, BASE, BOMB, RACE, RES, TSNE</Text> at least <Text type="success">45%</Text></p>
        <p>Bases capped ÷ Total Base Rounds = higher than <Text type="success">1.00</Text></p>
        <p>Withdrawal % = <Text type="success">≤4%</Text></p>
        <p><Text type="success">5</Text> rounds in all previously mentioned modes.</p>					
      </>)
    },
    {
      name: 'Eagle',
      description: (<>
        <p>Kills + Stuns ÷ Deaths + Stuns Received {`>=`} <Text type="success">1.30</Text></p>
        <p>Headshot Kills + Headshot Stuns ÷ Kills + Stuns {`>=`} <Text type="success">0.50</Text></p>	
      </>),
    },
    {
      name: 'Pigeon',
      description: (<>
        <p>Stuns ÷ Kills	{`>=`} <Text type="success">1.20</Text></p>
        <p>Stuns ÷ Stuns Received {`>=`} <Text type="success">1.20</Text></p>	
        <br/><br/>
      </>),
    },
    {
      name: 'Jaws',
      description: (<>
        <p>Kills + Stuns ÷ Deaths + Stuns Received {`>=`} <Text type="success">1.25</Text></p>
        <p>Knife kills ÷ Total Kills {`>=`} <Text type="success">0.075</Text></p>	
        <br/>
      </>),
    },
    {
      name: 'Crocodile',
      description: (<>
        <p>Kills + Stuns ÷ Deaths + Stuns Received {`>=`} <Text type="success">1.50</Text></p>
        <p>.</p>
        <br/>
      </>),
    }
  ];

  const cards: JSX.Element[] = [];

  for (const rank of ranks) {
    cards.push(
      <div className="col-md-3 text-center">
        <Card hoverable style={{marginBottom: "16px"}}>
          <img src={`${getRankPreview(getRankId(rank.name))}`} />
          <Meta
            title={rank.name}
            description={rank.description}
          />
        </Card>
      </div>,
    );
  }

  return (
    <PageContainer>
      <div className="row">
        <div className="col-md-12">
        <Alert
          message="Information"
          description={<>This guide is incomplete. You can see the full guide <a target="_blank" href="https://mgo2pc.com/MGO2PC_Emblem_Guide-1.pdf">here</a></>}
          type="warning"
          showIcon
        />
        </div>
      </div>

      <Divider/>

      <div className="row">
        {cards}
      </div>
    </PageContainer>
  );
};
