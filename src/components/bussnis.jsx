import React from 'react'
import { features } from '../util/constants';
import { layout, styles } from '../util/style'
import Button from './button';
import FeatureCard from './feature-card';



const Bussnis = () => {
    return (
        <section id='features' className={`${layout.section}`}>
            <div className={`${layout.sectionInfo}`}>
                <h2 className={`${styles.heading2}`}>
                    Biznes rivojlantiring <br className='sm:block hidden' /> pulni hal qilamiz
                    </h2>
                    <p className={`${styles.paragraph} max-w-[550px] mt-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia debitis quod, illum ut nemo natus eaque dignissimos ea quos eos?</p>
            <Button styles={`mt-10`} />
           
            </div>
            <div className={`${layout.sectionImage} flex-col`}>
              {features.map((features , idx ) => (
                 <FeatureCard key={features.id} {...features} idx={idx}/>
              )) },
           </div>
        </section>
    )
}

export default Bussnis;