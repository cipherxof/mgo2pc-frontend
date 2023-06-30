import { updateCharacter } from '@/services/mgo2pc/api';
import { getRankPreview } from '@/system/utility';
import { Alert, Select, notification } from 'antd';

type RankSelectProps = {
  character: number;
  allowed: number[];
};

export default (props: RankSelectProps) => {
  async function updateRank(id: number) {
    try {
      console.log(id);
      await updateCharacter(props.character, { rank: id });
      notification.success({
        message: `Success`,
        description: 'Your active rank has been updated.',
        placement: 'topRight',
      });
    } catch (err) {}
  }

  return (
    <Select
      style={{width: "80%"}}
      disabled={props.allowed.length <= 0}
      options={props.allowed.map(rankId => {
        return { value: rankId, label: <img src={getRankPreview(rankId)} style={{width: "32px", padding: "2px"}} /> }
      })}
      onSelect={(e) => updateRank(e)}
    />
  );
};
