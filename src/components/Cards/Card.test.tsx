import { render } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  const card = {
    id: 1,
    imagePath: 'image.png',
    cardBackPath: 'card-back.png',
    isFlipped: false,
    isMatched: false,
  };
  const handleClick = vi.fn();
  const index = 0;
  const flippedCardIndexes: number[] = [1, 2, 3];
  const matchedCardIndexes: number[] = [2];

  it('should render the front and back card images', () => {
    const { getByAltText } = render(
      <Card
        index={index}
        card={card}
        handleClick={handleClick}
        flippedCardIndexes={flippedCardIndexes}
        matchedCardIndexes={matchedCardIndexes}
        isFlipped={false}
        isMatched={false}
      />
    );

    const frontImage = getByAltText('card-front') as HTMLImageElement;
    expect(frontImage.src).toContain(card.imagePath);

    const backImage = getByAltText('card-back') as HTMLImageElement;
    expect(backImage.src).toContain(card.cardBackPath);
  });

  it('should call the handleClick function when clicked', () => {
    const { getByAltText } = render(
      <Card
        index={index}
        card={card}
        handleClick={handleClick}
        flippedCardIndexes={flippedCardIndexes}
        matchedCardIndexes={matchedCardIndexes}
        isFlipped={false}
        isMatched={false}
      />
    );

    const cardElement = getByAltText('card-front');
    cardElement.click();
    expect(handleClick).toHaveBeenCalledWith(index);
  });
});
