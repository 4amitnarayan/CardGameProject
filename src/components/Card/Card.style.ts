import { Animated } from 'react-native';
import styled from 'styled-components/native';

export const HeroUnit = styled.TouchableOpacity`
  padding: 10px;
  align-items: center;
  justify-content: center;
`;
interface CardFaceProps {
  matched?: boolean;
}

export const CardFace = styled(Animated.View)<CardFaceProps>`
  min-width: 100px;
  min-height: 130px;
  background-color: #ffffff;
  backface-visibility: hidden;
  align-items: center;
  justify-content: center;
  border: 2px solid #fff;
  border-radius: 5px;
  opacity: ${(props) => (props.matched ? 0.8 : 1)};
`;

export const CardBack = styled(CardFace)`
  background-color: #1ea2f4;
  position: absolute;
`;

export const FaceText = styled.Text`
  font-size: 24px;
  font-weight: normal;
`;

export const BackText = styled.Text`
  font-size: 32px;
  font-weight: normal;
  color: #ffffff;
`;
