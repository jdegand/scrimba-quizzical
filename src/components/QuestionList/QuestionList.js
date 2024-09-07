import React from 'react';
import './QuestionList.css';
import Question from '../Question/Question';

function QuestionList(props) {

  function scoreElement() {
    return (
      <>
        <div>You got {props.score} / 5 questions correct!</div>
        <button onClick={props.replay}>Play Again</button>
      </>
    )
  }

  return (
    <>
      <div className="QuestionList">
        {props.questions.map(question => {
          return (
            <>
              <div key={question.id}>
                <Question question={question} showAnswers={props.showAnswers} handleChoice={props.handleChoice} />
              </div>
              <br />
            </>
          )
        })}
      </div>
      {props.showAnswers ? null : <button onClick={props.handleScore}>Check</button>}
      {props.showAnswers && scoreElement()}
    </>
  );
}

export default QuestionList;