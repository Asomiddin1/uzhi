import React, { useState } from 'react'
import { navigationLinks } from '../util/constants'
import {  menu , close, } from './assets/index'

const Navbar = () => {
  const [togleNav , setTogleNav]=useState(true);
  const togleHandler =() => setTogleNav(prev => !prev);

  const [active ,setActive]= useState('home');
  return (
    <div className='w-full py-6 flex justify-between items-center'>
      <img src={require('./icon2.png')} alt='logo'  className='w-[200] h-[100px] object-contain cursor-pointer'/>

      <ul className='list-none sm:flex hidden justify-end items-center'>
        {navigationLinks.map((nav , idx)=>(
         <li key={nav.id} className={`font-montserrat  font-normal cursor-pointer text-[16px] text-white mr-10 
         ${idx === navigationLinks.length -1 ? 'mr-0' : 'mr-10'}
         ${active === nav.id ? 'text-white' : "text-lightWhite"}
         hover:text-white  transition-all duration-500`}>
          <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
      ))}</ul>

      {/* navigation btn*/}
      <div className='sm:hidden flex flex-1  justify-end items-center'>
        <img src={togleNav ? menu : close } alt='nav' className='w-[30px] h-[30px] object-contain'  onClick={togleHandler}/>
        <div className={`${togleNav ? 'hidden' : 'flex'} py-6 absolute top-20 right-0 left-0  w-full sidebar  bg-black-gradient`}>

        <ul className='list-none flex justify-center items-center flex-row flex-1 '>
        {navigationLinks.map((nav , idx)=>(
           <li key={nav.id} className={`font-montserrat  font-normal cursor-pointer text-[10px] text-white mr-6 
           ${idx === navigationLinks.length -1 ? 'mr-0' : 'mr-10'}
           ${active === nav.id ? 'text-white' : "text-lightWhite"}
           hover:text-white  transition-all duration-500`}><a href={`#${nav.id}`}>{nav.title}</a></li>
         ))}</ul>

        </div>
      </div>
      </div>
  )
}

export default Navbar




