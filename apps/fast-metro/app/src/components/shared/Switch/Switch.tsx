import { useEffect, useState } from 'react'

interface Switch  {
    IsDark?:any
    className?:string
}

export default function Switch({IsDark,className}:Switch) {
    
    const [clicked, setClicked] = useState(false)

    useEffect(() => {
      IsDark(clicked)
    
    }, [clicked])
    

    return (
        <div className={` ${className} `}
            onClick={() => { setClicked(!clicked) }}
        >
            {clicked ? <On/> : <Off />}
        </div>
    )
}



function Off() {
    return (
        <div className='relative bg-gray-400 rounded-2xl h-5 w-10'>
            <div className='absolute left-0 top-0.5 rounded-full bg-white h-4 w-4 ml-0.5 '>
            </div>
        </div>
    )
}
function On() {
    return (
        <div className='relative bg-blue-500 rounded-2xl h-5 w-10'>
            <div className='absolute right-0 top-0.5 rounded-full bg-white h-4 w-4 mr-0.5 '>
            </div>
        </div>
    )
}

