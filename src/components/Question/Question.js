import './Question.css';

function Question(props) {

    const htmlDecode = input => {
        const doc = new DOMParser().parseFromString(input, "text/html")
        return doc.documentElement.textContent
    }

    return (
        <div>
            <div>{htmlDecode(props.question.question)}</div>
            <div>
                {props.question.answers.map(answer => {

                    const style1 = {
                        backgroundColor: props.question.correctAnswer === props.question.userAnswer ? "#94D7A2" : "#F8BCBC"
                    }

                    const style2 = {
                        backgroundColor: answer.isHeld ? "skyblue" : "",
                    }

                    return (
                        <div
                            key={answer.id}
                            onClick={(event) => props.handleChoice(event, props.question.id, answer.id)}
                        >
                            <span
                                style={props.showAnswers && answer.isHeld ? style1 : style2}
                            >
                                {answer.answer}
                            </span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Question;