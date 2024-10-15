
import React from 'react'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'

export default function page() {
  return (
        <div className='flex justify-center h-screen bg-black-100'>
            <h1 className='flex justify-center items-center text-6xl'>
                <TextGenerateEffect words='Launching Soon'/>
            </h1>
        </div>
  )
}
