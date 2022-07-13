import React from 'react'

export default function TextBox(props:any) {
    const {className,content} : {className?:string,content:string} =props
  return (
    <div className={`text-xl p-4 rounded-lg bg-gray-100 ${className}`}>{content}</div>
  )
}
