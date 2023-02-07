import React from 'react'
import { styles } from '../util/style';
import Button from './button';

const Cta = () => {
  return (
    <div className={`${styles.flexCenter} ${styles.marginY} rounded-[20px] ${styles.paddind} sm:flex-row  flex-col box-shadow bg-dark-gradient`}>
      <div className={`flex-1 flex flex-col`}>
        <h2 className={`${styles.heading2}`}>Xizmatlarni sinab ko'rish !</h2>
        <p className={`max-w-[550px] ${styles.paragraph}`}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi nihil illum et nemo nesciunt, dignissimos facilis. 
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10  ml-0  sm:mt-0  mt-10`}>
         <Button />
      </div>
    </div>
  )
}

export default Cta;