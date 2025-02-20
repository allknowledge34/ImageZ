// Copyright 2025 PREM
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     https://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { delay, motion } from "motion/react"
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const Header = () => {

  const {user, setShowLogin} = useContext(AppContext)
  const navigate = useNavigate()

  const onClickHandler =() => {
    if (user) {
      navigate('/result')
    }else{
      setShowLogin(true)
    }
  }
  return (
    <motion.div className=' flex flex-col justify-center items-center text-center my-20'
    initial={{opacity:0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}>
      <motion.div className='text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border hover:scale-105 border-neutral-500 transition-all duration-700'
      initial={{opacity:0, y:-20}}
      animate={{opacity:1, y:0}}
      viewport={{delay:0.2, duration:0.8}}>
        <p>Best Transform Words into Art</p>
        <img src={assets.star_icon} alt=''/>
      </motion.div>
      <motion.h1 className='text-4xl max-w-[300px] sm:text-6xl sm:max-w-[590px] mx-auto mt-10 text-center'>Transform Words into <span className='text-red-600 font-bold'
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay:0.4,duration:2}}
      >Art</span>  in seconds.</motion.h1>
      <motion.p className='text-center max-w-xl mx-auto mt-5'
      initial={{opacity:0, y:20}}
      animate={{opacity:1, y:0}}
      transition={{delay:0.6,duration:0.8}}
      >Unleash boundless creativity with AI – Turn your thoughts into stunning visual art instantly. Just type, and watch the magic unfold.</motion.p>

      <motion.button onClick={onClickHandler} className='sm:text-lg text-white bg-pink-700 w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full'
      whileHover={{scale:1.05}}
      whileTap={{scale:0.95}}
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{default: {duration:0.5}, opacity: {delay:0.8, duration: 1}}}
      >
        Generate Images
        <img className='h-6' src={assets.star_group} alt=''/>
      </motion.button>
      <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay:1,duration:1}}
      className='flex flex-wrap justify-center mt-16 gap-3'>
        {Array(6).fill('').map((item, index)=>(
            <motion.img
            whileHover={{scale:1.05, duration:0.1}}
            className='rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10'
             src ={index % 2 ===0 ? assets.sample_img_2: assets.sample_img_1} alt='' key={index} width={70} />
        ))}
      </motion.div>

      <motion.p 
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay:1.2,duration:0.8}}
      className='mt-2 text-neutral-600'>Generated images from ImageZ</motion.p>
    </motion.div>
  )
}

export default Header
