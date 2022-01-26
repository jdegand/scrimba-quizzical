import './Question.css';

function Question(props){
    return (
        <div key={props.id}>
            {props.question}
            <div>
                {props.answers.map((answer,index) => {
                   return (
                    <div key={answer.id}>
                       <label>{answer.answer}
                            <input type="radio" name={answer.id} value={answer.answer} id={answer.answer} onChange={props.handleChange} />
                       </label>
                    </div>
                   )  
                })}
            </div>
        </div>
    )
}

export default Question;