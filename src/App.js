

import Billind from './components/billind';
import Bussnis from './components/bussnis';
import Clients from './components/clients';
import Contract from './components/contract';
import Cta from './components/cta';
import Footer from './components/footer';
import Home from './components/home';
import  {Navbar} from './components/index';
import Statistics from './components/statistics';
import Testimonials from './components/testimonials';
import { styles } from './util/style';


function App() {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddindX} ${styles.flexCenter}`}>
       <div className={`${styles.container}`}>
         <Navbar />
        
        </div>
      </div>

      <div className={` bg-primary ${styles.flexStart}`}>
          <div className={`${styles.container}`}>
          <Home />
          </div>
      </div>


      <div className={`bg-primary ${styles.paddindX} ${styles.flexStart}`}>
       <div className={`${styles.container}`}>
           <Statistics />
           <Contract />
           <Billind />
           <Bussnis />
           <Testimonials />
           <Clients />
           <Cta />
           <Footer />
           
           
        
        </div>
      </div>
   </div>
   );
}

export default App;
