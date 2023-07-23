"use client"
import { useState } from 'react'

const PromptInput = () => {
    const [input, useInput] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [chat, setChat] = useState('')
  
    const generateImage = async() =>{
     try {
      setIsLoading(true)
     const response = await fetch('localhost:8080/api/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({prompt: input}),
     })
     const data = await response.json()
     console.log(data)
     setChat(data)
      
     } catch (error) {
      console.log(error)
     }finally{
      setIsLoading(false)
     }
    }
  return (
    <div className='m-10'>
    <form  className='flex flex-col lg:flex-row shadow-md shadow-slate-400/10 border round-md lg:divide-x'
    onSubmit={()=> generateImage()}>
        <textarea className='flex-1 p-4 outline-none rounded-md'
        placeholder='Enter a prompt to generate an AI image...'
        value={input}
        onChange={(e) => useInput(e.target.value)}
        />
        <button type="submit" className={`p-4 font-bold ${input ? "bg-white text-violet-500  hover:text-white hover:bg-violet-500 hover:rounded-md transition-colors duration-200": "text-gray-300 cursor-not-allowed"}`}
        disabled={!input}
        >Generate</button>
        <button type="button" className='p-4 bg-violet-600 text-white transition-colors duration-200 font-bold'>Use Suggestion</button>
        <button type="button" className='p-4 bg-white text-violet-500 transition-colors duration-200 font-bold'>New Suggestion</button>
    </form>
    {isLoading && <div className='mt-10'>Loading...</div>}
    {chat && <div className='mt-10'>{chat}</div>}
    </div>
  )
}

export default PromptInput
