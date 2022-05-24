import "./TurnCounter.scss";

export default function TurnCounter({ turns }) {
  const record = localStorage.getItem("bestscore");

  return (
    <div className="turncounter-container">
      <div className="turncounter">
        <p>Turns :</p>
        <p>{turns}</p>
      </div>
      <div className="record">
        <p>Best Score :</p>
        <p>{record}</p>
      </div>
    </div>
  );
}
