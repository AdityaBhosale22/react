// github.jsx
import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { GitHubCalendar } from 'react-github-calendar' 

function Github() {
    const data = useLoaderData()

    return (
        <div className='flex flex-col items-center gap-8 py-10 bg-gray-800 text-white min-h-screen'>
            <h1 className='text-4xl font-bold'>Github Profile</h1>
            
            <div className='flex flex-col items-center p-6 bg-gray-700 rounded-lg shadow-xl'>
                <img src={data?.avatar_url} alt="Git picture" width={200} className='rounded-full mb-4' />
                <p className='text-2xl'>Followers: {data?.followers}</p>
            </div>

            <div className='bg-white p-8 rounded-lg shadow-inner'>
                
                <GitHubCalendar 
                    username="AdityaBhosale22" 
                    colorScheme='light'
                />
            </div>
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/AdityaBhosale22')
    return response.json() 
}