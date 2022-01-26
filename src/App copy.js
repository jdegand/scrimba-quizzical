import './App.css';
import React, { useEffect } from 'react';
import Start from "./components/Start/Start"
import QuestionList from './components/QuestionList/QuestionList';
import {nanoid} from 'nanoid';

function App() {

  const [startGame, setStartGame] = React.useState(false);
  const [data, setData] = React.useState([]); // save original data
  const [apiQuestions, setApiQuestions] = React.useState([]); // save shaped data

  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

  useEffect(()=> {
    fetch('https://opentdb.com/api.php?amount=5&category=18&difficulty=medium&type=multiple')
      .then(res => res.json())
      .then(data => setData(data.results))

      const combinedAnswers = data.map(q => {
        const answerArr = shuffle([
          ...q.incorrect_answers,
          q.correct_answer,
        ])

        const allAnswers = answerArr.map(answer => {
          return {
            id: nanoid(),
            answer: answer,
            isSelected: false,
          }
        })

        return {
          id: nanoid(),
          question: q.question,
          answers: allAnswers,
          correctAnswer: q.correct_answer,
          userAnswer: null,
        }
      })
      
      setApiQuestions(combinedAnswers)
    
  },[startGame])

  function toggleStart(){
    setStartGame(true);
  }

  return (
    <div className="App">
      {startGame ? <QuestionList apiQuestions={apiQuestions} /> : <Start toggleStart={toggleStart} />}
    </div>
  );
}

export default App;