import React from 'react'

const Type = ({type, index}) => {

  console.log(type)
  return (
    <div key={index} className="flex flex-row">
      <p className={`mr-[15px] h-[35px] w-[70px] background${type.type.name} rounded-full 
      text-center flex items-center justify-center m-[10px]`}>{type.type.name}</p>
    </div>
  )
}

export default Type;