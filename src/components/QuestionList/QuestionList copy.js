import React from 'react';
import './QuestionList.css';
import Question from '../Question/Question';

function QuestionList(props) {

  const [answers, setAnswers] = React.useState({})

  function handleChange(event){
    setAnswers(prevState => {
      const {name, value} = event.target;
      return {
        ...prevState,
        [name]: value
      }
    })
  }

  React.useEffect(()=> {

    let a = props.apiQuestions.map(x => x.answers)
    console.log({a}) //need index to get just that question's answers 
    
  }, [answers])

  return (
    <div className="QuestionList">
        {props.apiQuestions.map(question => {
            return (
                <div key={question.id}>
                  <Question choices={answers} id={question.id} answers={question.answers} question={question.question} handleChange={handleChange} />
                </div>
            )
        })}
    </div>
  );
}

export default QuestionList;