import React from 'react'

export default function Input(props:any) {
    const {className,height,type,placeholder = "here..."}:{className?:string,type:string,placeholder:string,height?:any} = props
  return (
    <input type={type} height={height} className={` border-2 border-blue-500  py-1.5 px-4 w-full bg-gray-50 outline-none rounded-md ${className}`} placeholder={placeholder} />
  )
}
