import {useState, useEffect} from 'react'
import Questions from '../../../asyncmock'
import './Quiz.css'
import SellYourPhone from '../SellYourPhone'


const Quiz = ({model}) => {

    const [actualAnswer, setActualAnswer] = useState(null);
    const [finalInfo, setFinalInfo] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);


    const nextQuestion = (info) => {

        if (actualAnswer!=null) {

            if (finalInfo.length < 5) {

                setFinalInfo(prevState => [...prevState, actualAnswer]);
                setActualAnswer(null);
    
            }
    
            if (currentQuestion < Questions.length - 1) {
            
            setCurrentQuestion(currentQuestion + 1);
    
            }

        }
        
    }

    const addAnswerInfo = (event) => {

        const selectedAnswer = event.target.value;
       setActualAnswer(selectedAnswer);

    }


    return(

        <div className='quizContainer'>

            <div className='questAns'>

                <h2> {Questions[currentQuestion].question}</h2>

                <div className='list'>

                    {Questions[currentQuestion].answers.map((answer, id) => {
                            return(
                                <button key={id} value={answer} onClick={addAnswerInfo}>{answer}</button>
                            );
                        })}
                </div>

                <button className='buttonCont' onClick={nextQuestion}>Continuar</button>

            </div>

            <div className='answersInfo'>

                <h2>{model}</h2>

                    <ul>
                        {finalInfo.map((answer, index) => {
                            return (
                                <li key={index}>{answer}</li>
                            );
                        })}
                    </ul>

                <div className='finalPrice'>

                    <h3>Total: </h3>
                    <p>PRECIO A ASIGNAR</p>

                </div>
            
            </div>

        </div>
    )
}

export default Quiz;