import React from "react";
import { NavLink } from 'umi';

type RewardPointProps = {
  value: number;
}

export default (props: RewardPointProps) => {
  return (
    <React.Fragment>
      <NavLink to="/shop"><img style={{width: "16px"}} src={require('../../assets/img/coins.png')} /></NavLink> 0
    </React.Fragment>
  );
};
