import React from 'react'
import { layout, styles } from '../util/style'
import { apple, bill, google } from './assets'

const Billind = () => {
  return (
    <section id='product' className={`${layout.sectionReverse}`}> 
       <div className={`${layout.sectionImageReverse}`}>
        <img src={bill} className='w-[100%] h-[100%] relative z-[5]' alt='bill' />

        <div className='absolute z-[3] -left-1/2  w-[50%] h-[50%] top-0 rounded-full white-gradient'/>
        <div className='absolute z-[0] w-[50%] h-[50%]  -left-1/2  rounded-full bottom-40 pink__gradient'/>
        
       </div>
       <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}> 
           Hisob kitob va fakturial  <br className='sm:block hidden'/> osongina boshqaring
        </h2>
        <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sequi alias nulla, praesentium aperiam reiciendis illum in pariatur porro amet?
        </p>
        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
            <img src={google} className='w-[129px] h-[42px] object-contain mr-6 cursor-pointer' alt='google' />
            <img src={apple} className='w-[129px] h-[42px] object-contain mr-6 cursor-pointer' alt='apple' />
            
        </div>
       </div>
    </section>
  )
}

export default Billind