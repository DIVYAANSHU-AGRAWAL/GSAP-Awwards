import { useMediaQuery } from "react-responsive"
import { nutrientLists } from "../constants"
import { useEffect, useState } from "react"


const Nutrition = () => {

  const isMobile = useMediaQuery({         // Hook
    query: "(max-width:768px)",           // Mobile Screen

  })

  const [lists, setLists] = useState(nutrientLists);   // State variable to show elements of nutrient list

  useEffect(()=>{
    if(isMobile){
      setLists(nutrientLists.slice(0,3));       // if isMobile true, show only first 3 items of list
    }
    else{
      setLists(nutrientLists);                  // Else show full list
    }
  },[isMobile])                                 // Run this useEffect every time isMobile changes

  return (
    <section className="nutrition-section">
        <img src="/images/slider-dip.png" alt="dip-slider" className="w-full object-cover" />
        <img src="/images/big-img.png" alt="big-img" className="big-image" />

        <div className="flex md:flex-row flex-col justify-between md:px-10 px-5 mt-14 md:mt-0">
          <div className="relative inline-block md:translate-y-20">
            <div className="general-title relative flex flex-col justify-center items-center gap-24">
              <div className="place-self-start">
                <h1 className="general-text text-5xl">Ayurveda-inspired ingredients</h1>
              </div>
              <div style={{}} className="nutrition-text-scroll place-self-start">
                  <div className="bg-yellow-brown pb-5 md:pt-0 pt-3 md:px-5 px-3 inline-block">
                    <h2 className="text-milk">Body Good</h2>
                  </div>
              </div>
            </div>
          </div>

          <div className="flex md:justify-center items-center translate-y-5">
            <div className="md:max-w-xs max-w-md">
              <p className="text-lg md:text-right text-balance font-paragraph">Milk contains a lot of nutrients...</p>
            </div>
          </div>

          <div className="nutrition-box">
            <div className="list-wrapper">
              {
                // index.js
                lists.map((nutrient,index)=>(
                  <div key={index} className="relative flex-1 col-center">
                    <div className="">
                      <p className="md:text-lg font-paragraph">{nutrient.label}</p>
                      <p className="text-sm font-paragraph mt-2">up to</p>
                      <p className="text-2xl md:text-4xl tracking-tighter font-bold">{nutrient.amount}</p>
                    </div>
                        {/* border divider between nutrients */}
                        {
                          index !== lists.length-1 && <div className="spacer-border"/> // Conditional Rendering (if not list item, add border)
            
                        }

                  </div>
                ))
              }
            </div>
          </div>

        </div>
    </section>
  )
}

export default Nutrition