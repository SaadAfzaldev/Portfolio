import React from 'react'
import { InfiniteMovingCards } from './infiniteMovingCards';
import { testimonials } from '@/data';
const Client = () => {
  return (
    <div className="py-20" id='testimonials'>
        <h1 className='heading text-3xl flex justify-center items-center'>
            Kind Words from {' '}
            <span className='text-purple ml-2'> Satisfied Clients </span>
        </h1>
        <div className='flex flex-col items-center justify-center p-4 gap-x-24 gap-y-8 mt-10'>
          <div className='h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden'>
            <InfiniteMovingCards
            items={testimonials}
            direction='right'
            speed='slow'
            />
          </div>  
        </div>
    </div>
  )
}

export default Client;