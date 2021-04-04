import React from 'react';
import { Card as CardType } from '../../types/Card';
import { useFlipAnimation } from './Animation';
import { HeroUnit, CardFace, CardBack, FaceText, BackText } from './Card.style';

export interface Props {
  data: CardType;
  onFlipOfCard?: (id: string) => void;
}

const Card: React.FC<Props> = ({ data, onFlipOfCard }) => {
  const { id, value, flipped, matched } = data;
  const [frontAnimationStyle, backAnimationStyle] = useFlipAnimation(flipped);

  const onCardFlip = () => {
    if (!matched && onFlipOfCard) {
      onFlipOfCard(id);
    }
  };

  return (
    <HeroUnit onPress={onCardFlip} disabled={matched}>
      <CardFace style={frontAnimationStyle} matched={matched}>
        <FaceText>{value}</FaceText>
      </CardFace>
      <CardBack style={backAnimationStyle}>
        <BackText>?</BackText>
      </CardBack>
    </HeroUnit>
  );
};

export default Card;
