import React from 'react';
import { HeroUnit, WinnerLabel, LoserLabel } from './Banner.style';

export interface Props {
  isWin: boolean;
}

const Header: React.FC<Props> = ({ isWin }) => {
  return <HeroUnit>{isWin ? <WinnerLabel>YOU WON</WinnerLabel> : <LoserLabel>TRY AGAIN</LoserLabel>}</HeroUnit>;
};
export default Header;
