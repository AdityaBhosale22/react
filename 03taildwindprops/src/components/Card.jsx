import React from 'react'

const Card = () => {
  return (
    <div className='max-w-xs rounded-xl overflow-hidden shadow-lg m-4 bg-white transform transition duration-500 hover:scale-105'>
        
        {/* Album Art Image (The corrected self-closing tag is here) */}
        <img 
            className='w-full object-cover h-auto'
            src='https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg' // Changed size for a square album cover look
            alt="Album cover for Inaam by Anuv Jain"
        />

        {/* Card Content */}
        <div className='px-6 py-4'>
            
            {/* Title */}
            <h1 className='font-extrabold text-2xl mb-2 text-gray-900 truncate'>
                Inaam
            </h1>

            {/* Artist */}
            <p className='text-sm text-indigo-600 font-semibold mb-3'>
                Anuv Jain
            </p>

            {/* Description */}
            <p className='text-gray-700 text-base'>
                Inaam is a soulful track by Anuv Jain that explores themes of love, longing, and emotional connection through its heartfelt lyrics and soothing melody.
            </p>
        </div>

        {/* Footer/Action (Optional) */}
        <div className='px-6 pt-4 pb-2'>
            <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-300 cursor-pointer'>
                #AnuvJain
            </span>
            <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-300 cursor-pointer'>
                #Soulful
            </span>
            <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mb-2 hover:bg-gray-300 cursor-pointer'>
                #IndianMusic
            </span>
        </div>
    </div>
  )
}

export default Card