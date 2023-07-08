import React from 'react'

const Pie = () => {
    const pieData=[{
        name:"Basic Tees",
        percentage:"55%",
        fill:"#98D89E"
    },{
        name:"Custom Short Pants",
        percentage:"31%",
        fill:"#F6DC7D"
    },{
        name:"Super Hoodies",
        percentage:"14%",
        fill:"#EE8484"
    },]
  return (
    <div className="ml-15 mt-4  flex items-center">
        <div className="aspect-square w-32 h-32 rounded-full bg-pie">  </div>
        <div className="pl-12 flex-col ">
           
                {pieData.map((item,index)=>{
                    
                    // var s = apiData?apiData[index].title.substring(0, Math.min(apiData[index].title.length, 20)):"test";
                    return <div className="flex-col pb-4" key={item.name}>
                        <div className="flex items-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
  <circle cx="5.5" cy="5.5" r="5.5" fill={item.fill}/>
</svg>
                            <div>
                            <div className="font-montserrat text-sm font-bold ml-3">{item.name}</div>
                            <div className="font-lato font-thin text-xs text-secondarytext ml-3">{item.percentage}</div>
                            </div>
                        </div>
                       
                    </div>
            })}
        
        </div>
    </div>
  )
}

export default Pie