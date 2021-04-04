import styled from 'styled-components/native';

export const HeroUnit = styled.View`
  padding: 10px;
  align-items: center;
  justify-content: space-between;
  align-content: center;
  display: flex;
  flex-direction: row;
  flex: 1;
  max-height: 100px;
`;

export const RestartButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: #413d45;
  border: 1px solid #413d45;
  padding: 5px;
`;

export const RestartText = styled.Text`
  font-size: 16px;
  font-weight: normal;
  color: #ffffff;
`;

export const Steps = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
`;

export const FlipsText = styled.Text`
  font-size: 18px;
  font-weight: normal;
  color: #ffffff;
`;

export const Flips = styled.Text`
  font-size: 20px;
  font-weight: normal;
  color: #1ea2f4;
`;
