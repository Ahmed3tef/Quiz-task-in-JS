import React, { useEffect, useState } from 'react'
import ProgressBar from './ProgressBar'

const Quiz = (props) => {

  const inCorrectMsg = 'Incorrect answer 😔';
  const correctMsg = 'Good job 🎉👏';

  // question number state
  const [qNumber, setQNumber] = useState(1)
  // isSelected to handle showing btns or msg
  const [isSelected, setIsSelected] = useState(false);

  // state to show view results btn.
  const [showResults, setShowResults] = useState(false)

  // msg state
  const [answerStatus, setAnswerStatus] = useState(inCorrectMsg)

  const nextQHandler = () => {
    // to stop increasing number if it reaches the end of qs list.
    if (props.data.length === qNumber) return;

    // increase number and reset other states

    setQNumber(prev => prev + 1)
    setIsSelected(false)
    setAnswerStatus(inCorrectMsg)
  }

  const answerHandler = (e) => {
    setIsSelected(true);

    if (e.target.value === props.data[qNumber - 1].pos) {
      setAnswerStatus(correctMsg);
      props.setScore(prev => prev + 10);
      return
    }
  }

  useEffect(() => {
    if (props.data.length === qNumber) {
      setShowResults(true)
    };
  }, [qNumber])

  return (
    <div className="questions-container">

      <div className="q-title">
        What is the type of this word?
      </div>

      <div className="q-body">

        <p className='q-word'>{props.data[qNumber - 1]?.word}</p>

        <div className='flex gap-8'>
          {!isSelected && ['Noun', 'Adverb', 'Adjective', 'Verb'].map((e, i) =>
            <button type="button" key={i}
              className='q-answer' value={e.toLowerCase()} disabled={isSelected && e.toLowerCase() !== answer} onClick={(event) => answerHandler(event)}>
              {e}
            </button>
          )}
          {isSelected && <p>{answerStatus}</p>}
        </div>

      </div>

      <ProgressBar progress={qNumber} />

      <div className="q-footer">
        <div className="q-number">Q {qNumber} / {props.data.length || 10}</div>
        {!showResults && <button type="button" className='q-cta ' onClick={nextQHandler}>Next</button>}
        {showResults && <button type="button" className='q-cta ' onClick={props.fetchRankHandler}>View results</button>}
      </div>

    </div>
  )
}

export default Quiz