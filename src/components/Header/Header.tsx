import React from 'react';
import { View } from 'react-native';
import { HeroUnit, RestartButton, Steps, Flips, FlipsText, RestartText } from './Header.style';

export interface Props {
  steps?: number;
  onRestart?: () => void;
}

const Header: React.FC<Props> = ({ steps = 0, onRestart }) => {
  return (
    <HeroUnit>
      <RestartButton onPress={onRestart}>
        <RestartText>Restart</RestartText>
      </RestartButton>
      <Steps>
        <FlipsText>STEPS: </FlipsText>
        <Flips>{steps}</Flips>
      </Steps>
    </HeroUnit>
  );
};
export default Header;
