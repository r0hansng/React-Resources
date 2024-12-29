import React from 'react'
import { useState, useEffect} from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {

    const data = useLoaderData()

    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response => {
    //         return response.json()
    //     })
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])

  return (
    <div className='bg-gray-600 text-white p-4 text-3xl flex items-center justify-center flex-col gap-4'>GitHub Followers: {data.followers}
    <img src={data.avatar_url} alt="Git Picture" width={300}/></div>
  )
}

export default GitHub

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}