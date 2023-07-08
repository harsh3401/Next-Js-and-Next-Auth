import React from 'react'

const Schedule = () => {
    const ScheduleData=
    [{
        event:"Meeting with suppliers from Kuta Bali",
        time:"14.00-15.00",
        location:"at Sunset Road, Kuta, Bali",
        fill:"#9BDD7C"
    },
    {
        event:"Check operation at Giga Factory 1",
        time:"18.00-20.00",
        location:"at Central Jakarta ",
        fill:"#6972C3"
    }]
  return (
    <div className="flex-col  font-lato ">
        {ScheduleData.map((data) => {
     return( <div className="flex justify-start items-center mt-3 mb-4 " key={data.event}>
      <div style={
        {background:data.fill}
      }className={"h-16 w-1 mr-3"}></div>
      <div className="flex-col text-xs font-thin text-cardsub">
          <p className="font-bold text-sm text-cardheading">{data.event}</p>
          <p>{data.time}</p>
          <p>{data.location}</p>
      </div>
      </div>)
        })}
  
    </div>
  )
}

export default Schedule