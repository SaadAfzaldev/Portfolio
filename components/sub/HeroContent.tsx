"use client"
import Image from 'next/image';
import React from 'react'
import { motion } from "framer-motion"
import { slideInFromLeft, slideInFromRight,} from '@/utils/motion'
import {TextGenerateEffect} from "@/components/ui/text-generate-effect";
function HeroContent() {
  return (
    <>
      <motion.div
            initial="hidden"
            animate="visible"
            className='flex flex-col md:flex-row items-center justify-center px-4 lg:px-20 mt-5 md:mt-20 md:w-full z-[20]'
            >
                <div className='md:h-full md:w-full flex flex-col gap-5 justify-center text-start pl-20 w-full'>
                    <motion.div
                        variants={slideInFromLeft(0.5)}
                        className="flex flex-col gap-2 mt-6 text-4xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto pl-4 md:pl-10"
                    >
                        WELCOME
                        <span className='text-purple'>To My</span>
                        Creative Space!
                    </motion.div>
                </div>

                    <motion.div
                        variants={slideInFromRight(0.8)}
                        className="w-full h-full flex justify-center items-center md:order-2"
                    >
                        <Image
                        src="/mainIconsdark.svg"
                        alt="work icons"
                        height={650}
                        width={650}
                        className="max-w-full h-auto"
                        />
                    </motion.div>
        </motion.div>
        <div className="flex justify-center relative my-10 md:my-20 z-10">
              <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center p-8 ">
                  <TextGenerateEffect className='text-center text-[30px] md:text-4xl lg:text-5xl text-white'
                                      words="Turning Ideas into Effortless User Experiences"/>
                  <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-white">
                      Hi! I&apos;m Saad, a FullStack <span className='text-purple'>Developer</span>
                  </p>
                  <div className="flex justify-center mt-4">
                      <a href="#about">
                        <button
                          className="inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            Dive Into My Work
                        </button>
                      </a>
                  </div>
              </div>
        </div>
    </>

  )
}

export default HeroContent