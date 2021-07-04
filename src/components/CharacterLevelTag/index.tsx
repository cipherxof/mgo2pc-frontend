import { getExpLevel } from "@/system/utility";
import { Popover, Tag } from "antd";

type CharacterLevelTagProps = {
  xp: number;
}

export default (props: CharacterLevelTagProps) => {
  return (
    <Popover content={`${props.xp} Experience`}><Tag color="blue">Level {getExpLevel(props.xp)}</Tag></Popover>
  );
};
