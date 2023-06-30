import PeakPlayerLine from '@/components/Charts/PeakPlayerLine';
import { getServerStats } from '@/services/mgo2pc/api';
import { PageContainer } from '@ant-design/pro-layout';
import { useRequest } from '@umijs/max';
import { Card, Col, Divider, Row, Spin, Statistic } from 'antd';
import React from 'react';

export default (): React.ReactNode => {
  document.title = 'Stats - Metal Gear Online';

  const { data, loading, refresh } = useRequest(() => getServerStats());

  return (
    <PageContainer>
      <Spin spinning={loading}>
        <div className="row">
          <div className="col-md-12 text-center mb-2">
            <Card loading={loading}>
              <Row gutter={16}>
                <Col span={4}></Col>
                <Col span={8}>
                  <Statistic
                    title="Peak Players (Today)"
                    value={data ? data.static.peak_players_today : 0}
                  />
                </Col>
                <Col span={8}>
                  <Statistic
                    title="Peak Players (All time)"
                    value={data ? data.static.peak_players : 0}
                  />
                </Col>
                <Col span={4}></Col>
              </Row>

              <Divider />

              <div className="text-center">Player Count (Last 60 days)</div>
              <PeakPlayerLine stats={data ? data.stats.reverse() : []} />
            </Card>
          </div>
        </div>
      </Spin>
    </PageContainer>
  );
};
