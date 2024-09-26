import React from 'react'
import { FaBootstrap, FaCss3, FaHtml5, FaLaravel, FaNodeJs, FaPhp } from 'react-icons/fa6'
import { RiReactjsLine } from 'react-icons/ri'
import { SiAxios, SiLaravel, SiMongodb, SiTailwindcss } from 'react-icons/si'
import { TbBrandMysql, TbBrandNextjs } from 'react-icons/tb'

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <h1 className='my-20 text-center text-4xl'>Technologies</h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className='text-4xl text-cyan-400'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiAxios className='text-4xl'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandMysql className='text-4xl text-cyan-400'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiLaravel className='text-4xl text-red-400'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className='text-4xl text-green-400'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaPhp className='text-4xl text-blue-400'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiTailwindcss className='text-4xl text-cyan-400'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaHtml5 className='text-4xl text-orange-400'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaBootstrap className='text-4xl text-darkBlue'/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaCss3 className='text-4xl text-cyan-400'/>
            </div>
        </div>
    </div>
  )
}

export default Technologies
