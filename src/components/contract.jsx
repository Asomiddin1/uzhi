import React from 'react'
import { layout, styles } from '../util/style'
import { card } from './assets'
import Button from './button'

const Contract = () => {
  return (
    <section id='features' className={`${layout.section}`}>
           <div className={`${layout.sectionInfo}`}>
            <h1 className={`${styles.heading2}`}>Bir necha qadamda 
            <br className='sm:block hidden'></br> oson contract tuzing</h1>
            <p className={`${styles.paragraph} max-w-[550px] mt-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia debitis quod, illum ut nemo natus eaque dignissimos ea quos eos?</p>
            <Button styles={`mt-10`} />
           </div>
           <div className={`${layout.sectionImage}`}>
              <img src={card} className='w-[100%] h-[100%]' alt='card' />
              
           </div>
    </section>
  )
}

export default Contract;