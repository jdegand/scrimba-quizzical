import './Start.css';

function Start(props) {
  return (
    <div className="Start">
        <h1>Quizzical</h1>
        <p>Click Start for a short 5 question quiz on computer science</p>
      <button onClick={props.toggleStart}>Start</button>
    </div>
  );
}

export default Start;