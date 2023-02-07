import React from 'react'

import { quotes } from './assets'

const Feedback = ({content , name , title ,idx} ) => {
  const nameC = 'Herma Jensen';
  console.log(nameC.split(' ').map( c => c[0]))
  return (
    <div className={`flex justify-between flex-col px-10 py-12 rounded-[10px] max-w-[370px] md:mr-10 sm:mr-5  mr-0 feedback-card `}>
      <img src={quotes}  className='w-[42px] h-[27px] object-contain' alt='quoets'/>
      <p className='font-montserrat font-normal text-[18px] leading-[32px] text-white my-10'>{content}</p>

      <div className='flex flex-row ml-4'> 
         <div className='w-[50px] h-[50px] flex justify-center items-center rounded-full bg-dark-gradient '>
          <p className='text-gradient text-[22px] font-semibold font-montserrat '>{name.split(' ').map(c => c[0]).toString().toUpperCase()}</p>
         </div>

        <div className='flex flex-col ml-4'>
          <h4 className={`font-montserrat  font-semibold text-[20px]  leading-[32px] text-white`}>{name}</h4>
          <p className='font-montserrat font-normal text-[16px] leading-[24px] text-lightWhite'>{title}</p>
        </div>
      </div>
    </div>
  )
}

export default Feedback;