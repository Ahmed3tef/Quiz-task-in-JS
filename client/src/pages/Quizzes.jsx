import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ErrorMsg, Quiz, Rank, Spinner } from '../components';

import { loadRank } from '../store/reducers/rank';
import { loadWords } from '../store/reducers/words'



const Quizzes = () => {

  const dispatch = useDispatch()

  const [score, setScore] = useState(0)
  const [showRank, setShowRank] = useState(false);


  const words = useSelector(state => state.words.words)
  const wordsError = useSelector(state => state.words.error)
  const wordsIsLoading = useSelector(state => state.words.isLoading)

  const rank = useSelector(state => state.rank.rank);
  const rankError = useSelector(state => state.rank.error)
  const rankIsLoading = useSelector(state => state.rank.isLoading)

  useEffect(() => {
    dispatch(loadWords())
  }, [])

  const fetchRankHandler = () => {

    setShowRank(true)
    dispatch(loadRank({ score }));
  }



  return (
    <div className="page-layout">

      {/* quiz */}

      {wordsIsLoading && <Spinner />}

      {!wordsIsLoading && wordsError && <ErrorMsg />}

      {!wordsIsLoading && !wordsError && words && !showRank &&
        <Quiz data={words} setShowRank={setShowRank} setScore={setScore} score={score} fetchRankHandler={fetchRankHandler} />
      }


      {/* Rank */}

      {rankIsLoading && <Spinner />}

      {!rankIsLoading && rankError && <ErrorMsg />}

      {!rankIsLoading && !rankError && !isNaN(rank) && showRank && <Rank rank={rank} />}
      {/* !isNaN() checks if rank is a number */}
    </div>
  )
}

export default Quizzes