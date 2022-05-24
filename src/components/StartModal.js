import "./StartModal.scss";

export default function StartModal({ startModal, setStartModal, setTimerBar }) {
  const handleClick = () => {
    setStartModal("");
    setTimerBar(true);
  };

  return (
    <div className={`startmodal-container ${startModal}`}>
      <div className="introduction">
        <div className="welcome">
          <img src="/img/welcome.png" alt="" />
        </div>
        <p className="description">The Mario themed memory game</p>
        <div className="rules">
          <p>
            Usual rules : 16 cards, you need to find the 8 pairs before time
            runs out !
          </p>
          <p>Time limit : 2 minutes</p>
        </div>
        <div className="button" onClick={handleClick}>
          <img src="/img/lets-a-go.png" alt="" />
        </div>
      </div>
    </div>
  );
}
