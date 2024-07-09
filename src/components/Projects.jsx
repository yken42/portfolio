import React, { forwardRef } from 'react'
import { SingleProject } from './SingleProject'
import tttwist from '../images/tic-tac-twist.png'
import planit from '../images/plan-it.png'

export const Projects = forwardRef((props, ref) => {
  return (
    <div ref={ref} className='w-[85%] mx-auto py-20 md:py-12 xl:py-0 '>
        <div className='projects-title font-poppins'>
            <h1 className='text-4xl font-bold'>My Projects</h1>
        </div>
        <div className='all-projects flex flex-wrap'>
            <SingleProject img={tttwist} title={"Tic-Tac-Twist"} content={'A simple Tic-Tac-Toe game we are all familiar with but with a special twist of my own'} gitLink={'https://github.com/yken42/tic-tac-twist'} />
            <SingleProject img={planit} title={"Plan it"} content={'A productivity website to manage our tasks and todos, with an authentication and storage system'} gitLink={"https://github.com/yken42/plan-it"} />
        </div>
    </div>
  )
});