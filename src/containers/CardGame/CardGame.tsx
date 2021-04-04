import React, { useEffect } from 'react';
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import { GameUnit, CardUnit } from './CardGame.style';
import Header from '../../components/Header';
import { Card as CardType, StateOfGame } from '../../types/Card';
import { CardAction } from '../../reducers/CardReducer';

const renderCards = (cards: CardType[], onFlipOfCard: (id: string) => void) => {
  return cards.map(card => <Card key={card.id} data={card} onFlipOfCard={onFlipOfCard} />);
};

export interface Props {
  records: StateOfGame;
  cards: CardType[];
  isCard: (id: string) => CardAction;
  refreshCard: () => CardAction;
  restartGame: () => CardAction;
}

const CardGame: React.FC<Props> = ({ records, cards, isCard, refreshCard, restartGame }) => {
  const onRestart = () => {
    restartGame();
  };

  const onFlipOfCard = (id: string) => {
    isCard(id);
  };

  useEffect(() => {
    const timer = setTimeout(() => refreshCard(), 800);
    return () => clearTimeout(timer);
  }, [cards, refreshCard]);

  const cardsToRender = renderCards(cards, onFlipOfCard);

  return (
    <GameUnit>
      <Header onRestart={onRestart} steps={records.steps} />
      {records.gameFinish ? <Banner isWin={records.isWin} /> : <CardUnit>{cardsToRender}</CardUnit>}
    </GameUnit>
  );
};

export default CardGame;
