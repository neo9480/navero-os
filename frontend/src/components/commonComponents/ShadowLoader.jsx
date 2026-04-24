import React from 'react'
import CircularText from '../shadcnComponents/CircularText'

const ShadowLoader = () => {
  return (
    <div className='w-full flex bg-space_indigo-100 justify-center items-center h-full'>
      <CircularText 
        text={"NAVéRO*TRADE*WITHOUT*FRICTION*"}
        spinDuration={7}
        className='pointer-events-none'
      />
    </div>
  )
}

export default ShadowLoader