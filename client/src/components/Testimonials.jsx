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

import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Testimonials = () => {
  return (
    <motion.div 
    initial={{opacity:0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once:true}}
    className='flex flex-col items-center justify-center my-20 p-12'>
        <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>User Reviews</h1>
        <p className='text-gray-500 mb-12'>What our customers say</p>

        <div className='flex flex-wrap gap-6'>
          {testimonialsData.map((testimonail, index)=>(
            <div key={index} className='bg-white/20 p-12 rounded-lg shadow-md border w-80 m-auto cursor-pointer hover:scale-[1.02] transition-all'>
              <div className='flex flex-col items-center'>
                <img src={testimonail.image} alt='' className='rounded-full w-14'/>
                <h2 className='text-xl font-semibold mt-3'>{testimonail.name}</h2>
                <p className='text-gray-500 mb-4'>{testimonail.role}</p>
                <div className='flex mb-4'>
                  {Array(testimonail.stars).fill().map((item,index)=>(
                    <img key={index} src={assets.rating_star} alt=''/>
                  ))}
                </div>
                <p className='text-center text-sm text-gray-600'>{testimonail.text}</p>
              </div>
            </div>
          ))}
        </div>
      
    </motion.div>
  )
}

export default Testimonials