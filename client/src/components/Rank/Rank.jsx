import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Rank = ({ rank }) => {

  const [msg, setMsg] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    if (rank > 70) return setMsg('Well Done 👌');
    if (rank < 70 && rank > 50) return setMsg('Good Job, you can do better next time😉');
    setMsg('you can do better next time 🙁');
  }, [rank])


  return (


    <div className='rank-container'>
      <p>{msg}</p>
      <p className='flex items-center gap-6'>
        Rank: <span className='text-[3.2rem]'>
          {+rank}%
        </span>

      </p>
      <button type='button' className='q-cta' onClick={() => navigate('/')} >Try Again</button>
    </div>

  )
}

export default Rank;