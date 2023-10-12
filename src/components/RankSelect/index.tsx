import { updateCharacter } from '@/services/mgo2pc/api';
import { getRankPreview } from '@/system/utility';
import { useIntl } from '@umijs/max';
import { notification, Select } from 'antd';

type RankSelectProps = {
  rank: number;
  character: number;
  allowed: number[];
};

export default (props: RankSelectProps) => {
  const intl = useIntl();
  async function updateRank(id: number) {
    try {
      console.log(id);
      await updateCharacter(props.character, { rank: id });
      notification.success({
        message: `Success`,
        description: `${intl.formatMessage({ id: 'app.activerank' })}`,
        placement: 'topRight',
      });
    } catch (err) {}
  }

  return (
    <Select
      defaultValue={props.allowed.find((r) => r == props.rank)}
      style={{ width: '80%' }}
      disabled={props.allowed.length <= 0}
      options={props.allowed.map((rankId) => {
        return {
          value: rankId,
          label: <img src={getRankPreview(rankId)} style={{ width: '32px', padding: '2px' }} />,
        };
      })}
      onSelect={(e) => updateRank(e)}
    />
  );
};
