import React from 'react'
import GradientWrapper from '../gradientlayout/GradientWrapper'
import Button from '../buttons/Button'

const Greetings = () => {
  return (
    <GradientWrapper>
        <div className='flex flex-col md:flex-row md:justify-between max-w-screen-xl m-auto' >
        <div className='flex flex-col items-left md:w-1/2 ' >
        <p className='text-white text-5xl  ' >
            We &apos; re <span className='blue-text gradient-text' >DevSpark Solutions.</span>
         </p>
        <p className='text-white text-4xl leading-normal md:leading-relaxed ' >Pleased to meet you.</p>
        <p  className='text-white py-5 md:py-10 text-lg '>
        Phunk is a full-service digital marketing agency based out of Saltaire, in West Yorkshire, UK. Our niche is storytelling — taking your raw ideas and vision and translating them into a clear brand narrative, expressed through design, video, copy and UX. <br/>
<p className=' pt-2 md:pt-5  ' >
     If you’re looking for a forward-thinking team of creatives to build a brand identity that stands out from the crowd, then you’re exactly where you need to be.
     </p>
        </p>
        <Button btnText='Hire Us' type='primary' width='w-[8rem]' />
        </div>
        <div className='text-white' >
            Right robot
        </div>
        </div>
    </GradientWrapper>
  )
}

export default Greetings
