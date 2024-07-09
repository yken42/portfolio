import React from 'react'

export const SingleProject = ({ img, title, content, gitLink }) => {
  return (
    <div className='transition duration-300 md:w-3/5 lg:w-2/5 xl:w-1/4 mt-10 md:mx-auto lg:mx-10 shadow-lg rounded-2xl md:hover:scale-105'>
        <div className='img-holder w-full '>
            <img src={img} alt='project' className='h-64 w-full rounded-2xl'/>
        </div>
        <div className='project-content font-poppins px-4 w-full '>
            <h2 className='text-3xl font-bold py-4'>{title}</h2>
            <p className='text-xl'>{content}</p>
            <button className='transition my-10 rounded-md h-full border-[#5C51D6] border-2 text-xl text-[#5C51D6] p-2 hover:bg-[#5c51d6] hover:text-white' onClick={() => window.open(gitLink, "_blank")}>View on Github</button>
        </div>
        
    </div>
  )
}
