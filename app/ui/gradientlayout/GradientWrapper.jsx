import React from 'react'
import LeftGradient from './LeftGradient'
import RightGradient from './RightGradient'

const GradientWrapper = ({children}) => {
  return (
    <div className=' py-32  '>
      {/* <LeftGradient/> */}
      {children}
      {/* <RightGradient/> */}
    </div>
  )
}

export default GradientWrapper
