import React from 'react'
import { styles } from '../util/style';
import { discount, robot } from './assets';
import Button from './button';

const Home = () => {
  return (
    <section id='home' className={`flex md:flex-row   flex-col ${styles.paddindY}`}>
      {/* Animation image*/}
      <div className={`flex-1 ${styles.flexStart} md:my-0  my-10 `}>
        <img src={robot} className='w-[100%] h-[100%] relative z-10  rounded-sm' alt='robot' />

       


      </div>
      {/* informatoin*/}
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-20  sm:px-16 px-6 relative`}>
      {/* Discount informatoin*/}
      
      <div className='flex flex-row items-center py-[6px] px-4 rounded-[10px] mb-2 bg-slate-500 bg-discount-gradinet'>
        <img src={discount} alt='discount' className='w-[32px] h-[32px]' />
        <p className={`${styles.paragraph}  pygolb`}><span className='text-white'>20%</span>
          Chegirma <span className='text-white'>1 Oylik</span> Xisob Uchun</p>
      </div>
      {/* Title*/}
      <div className='w-full'>
        <h1 className={`${styles.heading1}`}>Yangi Avlod <br /><span className='text-gradient'>To'lov Usuli</span></h1>
     
      {/* Description*/}
      <p className={`${styles.paragraph} mt-5 max-w-[550px]`}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum ducimus repellendus assumenda error sint magni. Magnam est nihil ratione veniam.
      </p>
      <Button styles={`mt-5`}/>

      <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink-gradient'/>
        <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 blue__gradient'/>
        <div className='absolute z-[0] w-[50%] h-[55%] right-20 bottom-20 white__gradient' />

      
      </div>
      
      </div>


    </section>
  )
}

export default Home;