import './App.css';
import React, { useEffect } from 'react';
import Start from "./components/Start/Start"
import QuestionList from './components/QuestionList/QuestionList';
import {nanoid} from 'nanoid';

function App() {

  const [startGame, setStartGame] = React.useState(false);
  const [formData, setFormData] = React.useState({
    category: '9',
    difficulty: 'easy',
  })
  const [questions, setQuestions]= React.useState([])

  
  useEffect(()=> {
    fetch(`https://opentdb.com/api.php?amount=5&category=${formData.category}&difficulty=${formData.difficulty}&type=multiple`)
      .then(res => res.json())
      .then(data => {

        const combinedAnswers = data.results.map(q => {
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
        setQuestions(combinedAnswers)

      }) 
        
  },[startGame])
  

  //console.log({questions})

  function toggleStart(){
    setStartGame(true);
  }

  function handleChange(event){
    setFormData(prevState => {
      const {name, value} = event.target;
      return {
        ...prevState, 
        [name]: value
      }
    })
  }

  function handleChoice(event, id){
    /*
    const newState = [...questions];
   
    newState.answers.map(element => {
      if(element.id === id){
        element.userAnswer = event.target.innerText
      }
  });

  setQuestions(prevState => {
    return {
      ...prevState,
      newState
    }
  })
*/
console.log(id)
}

console.log({questions})


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

  return (
    <div className="App">
      {startGame ? <QuestionList questions={questions} handleChoice={handleChoice} /> : <Start toggleStart={toggleStart} formData={formData} setFormData={setFormData} handleChange={handleChange} />}
    </div>
  );
}

export default App;