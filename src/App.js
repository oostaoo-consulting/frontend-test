import "./App.scss";
import { useState, useEffect } from "react";
import Card from "../src/components/Card";
import TimerBar from "./components/TimerBar";
import StartModal from "./components/StartModal";
import VictoryModal from "./components/VictoryModal";
import DefeatModal from "./components/DefeatModal";
import TurnCounter from "./components/TurnCounter";

const cardsSet = [
  { src: "/img/Boo-icon.png", isMatched: false },
  { src: "/img/Bullet-Bill-icon.png", isMatched: false },
  { src: "/img/Flower-Fire-icon.png", isMatched: false },
  { src: "/img/Mushroom-Super-icon.png", isMatched: false },
  { src: "/img/Paper-Bowser-icon.png", isMatched: false },
  { src: "/img/Paper-Mario-icon.png", isMatched: false },
  { src: "/img/Shell-Green-icon.png", isMatched: false },
  { src: "/img/Star-icon.png", isMatched: false },
];

function App() {
  const [cards, setCards] = useState();
  const [firstPick, setFirstPick] = useState(null);
  const [secondPick, setSecondPick] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [timerBar, setTimerBar] = useState(false);
  const [matchNumber, setMatchNumber] = useState(0);
  const [startModal, setStartModal] = useState("active");
  const [victoryModal, setVictoryModal] = useState("");
  const [defeatModal, setDefeatModal] = useState("");
  const [turns, setTurns] = useState(0);

  useEffect(() => {
    if (victoryModal === "") {
      const shuffledCards = [...cardsSet, ...cardsSet]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({ ...card, id: Math.random() }));
      setCards(shuffledCards);
    }
  }, [victoryModal]);

  useEffect(() => {
    if (firstPick && secondPick) {
      setDisabled(true);
      if (firstPick.src === secondPick.src) {
        // const newArray = [...cards];
        // newArray.forEach((card) => {
        //   if (card.src === firstPick.src) {
        //     card.isMatched = true;
        //     setCards(newArray);
        //   }
        // });
        // too many re-renders, needs new dependency for useEffect

        setCards((prevArray) => {
          return prevArray.map((card) => {
            if (card.src === firstPick.src) {
              return { ...card, isMatched: true };
            } else {
              return card;
            }
          });
        });
        setMatchNumber((match) => match + 2);
      }
      setTimeout(() => reset(), 1000);
    }
  }, [firstPick, secondPick]);

  useEffect(() => {
    if (matchNumber === 16) {
      setVictoryModal("active");
      setTimerBar(false);
    }
  }, [matchNumber, cards]);

  const reset = () => {
    setFirstPick(null);
    setSecondPick(null);
    setDisabled(false);
    setTurns((turns) => turns + 1);
  };

  const resetGame = () => {
    setVictoryModal("");
    setDefeatModal("");
    setMatchNumber(0);
    setDisabled(false);
    setTimerBar(true);
    setTurns(0);
  };

  const handleSelection = (card) => {
    firstPick ? setSecondPick(card) : setFirstPick(card);
  };

  return (
    <div className="memory-game-container">
      <div className="title">
        <img src="/img/title.png" alt="" />
      </div>
      <TurnCounter turns={turns} setTurns={setTurns} />
      <div className="cards-container">
        {cards?.map((card) => (
          <Card
            key={card.id}
            card={card}
            handleSelection={handleSelection}
            flipped={
              card === firstPick || card === secondPick || card.isMatched
            }
            matched={card.isMatched === true ? "matched" : ""}
            disabled={disabled}
          />
        ))}
      </div>
      <TimerBar
        timerBar={timerBar}
        setTimerBar={setTimerBar}
        setDefeatModal={setDefeatModal}
        victoryModal={victoryModal}
      />
      <StartModal
        startModal={startModal}
        setStartModal={setStartModal}
        setTimerBar={setTimerBar}
      />
      <VictoryModal
        victoryModal={victoryModal}
        resetGame={resetGame}
        turns={turns}
      />
      <DefeatModal defeatModal={defeatModal} resetGame={resetGame} />
    </div>
  );
}

export default App;
