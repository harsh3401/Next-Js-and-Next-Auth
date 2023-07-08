import React from 'react'

const BoxItem = ({bold,name,icon}) => {
  var fontclass="font-light"
  if(bold)
  {
    fontclass="font-bold"
  }

  return (
    <div className={"ml-12 font-montserrat text-lg mb-10 flex items-center hover:cursor-pointer "+fontclass}>
      {icon}
    <p className="ml-5 ">{name}</p>
    </div>
  )
}

export default BoxItem