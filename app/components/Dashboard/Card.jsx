import React from 'react'

const Card = (props) => {
  return (
    <div className= {props.color+" flex-col min-w-56 h-28  rounded-2xl relative"}>
        {props.icon}
      <div className=" mt-10 lg:mt-none font-lato font-normal ml-6 max-w-10">{props.desc}</div>
      <div className="ml-6 h-8 font-bold font-sans text-xl max-w-10">{props.amount}</div>
    </div>
  )
}

export default Card