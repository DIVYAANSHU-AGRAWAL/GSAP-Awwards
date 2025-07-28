import React, { useRef } from 'react'
import { flavorlists } from '../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const FlavourSlider = () => {

  const sliderRef = useRef();

  useGSAP(() => {

    if (window.innerWidth < 1024) return;        // Disable this animation on small screens

    const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".flavor-section",      // pin the whole section
        start: "top top",
        end: `+=${scrollAmount}`,
        scrub: true,
        pin: true,
      }
    });

    // Animate the sliderRef content — NOT the section
    tl.to('.flavors', {
      x: -scrollAmount, // move left
      ease: "none"
    });

  }, []);

  return (
    <div ref={sliderRef} className='slider-wrapper flex w-max'>
      <div className="flavors flex space-x-10">
        {
          flavorlists.map((flavor) => (
            <div
              key={flavor.name}
              className={`relative z-30 lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none ${flavor.rotation}`}
            >
              <img src={`/images/${flavor.color}-bg.svg`} alt="" className='absolute bottom-0' />
              <img src={`/images/${flavor.color}-drink.webp`} alt="" className='drinks' />
              <img src={`/images/${flavor.color}-elements.webp`} alt="" className='elements' />
              <h1 className='text-center'>{flavor.name}</h1>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default FlavourSlider
