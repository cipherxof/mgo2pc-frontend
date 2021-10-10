import React from "react";

type RewardPointProps = {
  value: number;
}

export default (props: RewardPointProps) => {
  return (
    <React.Fragment>
      <img style={{width: "16px"}} src={require('../../assets/img/coins.png')} /> 0
    </React.Fragment>
  );
};
