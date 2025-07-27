
import { useGSAP } from '@gsap/react'
import ClipPathTitle from '../components/ClipPathTitle'
import gsap from 'gsap/all'

const BenefitSection = () => {

    

    useGSAP(()=>{
        const revealTtl = gsap.timeline({
            delay: 1,
            scrollTrigger:{
                trigger:".benefit-section",
                start: "top 60%",
                end: "top top",
                scrub:1.5,
            }
        });
        revealTtl.to(".benefit-section .first-title",{
            duration:1,
            opacity:1,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "circ.out",
        }).to(".benefit-section .second-title",{
            duration:1,
            opacity:1,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "circ.out",
        }).to(".benefit-section .third-title",{
            duration:1,
            opacity:1,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "circ.out",
        }).to(".benefit-section .fourth-title",{
            duration:1,
            opacity:1,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            ease: "circ.out",
        });
    })

  return (
   <section className='benefit-section'>
        <div className='container mx-auto pt-20'>
            <div className="col-center">
                <p>Unlock the key Advantages: <br/>
                Explore key benefits of choosing Spylt!
                </p>
                <div className='mt-20 col-center text-5xl md:text-6xl'>
                    <ClipPathTitle title={"Shelf Stable"} color={"#faeade"} bg={"#c88e64"} className={"first-title"} borderColor={"#222123"}/>
                    <ClipPathTitle title={"Shakti + Tazgi"} color={"#faeade"} bg={"#c88e64"} className={"second-title"} borderColor={"#222123"}/>
                    <ClipPathTitle title={"Infinitely Recyclable"} color={"#faeade"} bg={"#c88e64"} className={"third-title"} borderColor={"#222123"}/>
                    <ClipPathTitle title={"Lactose Free"} color={"#faeade"} bg={"#c88e64"} className={"fourth-title"} borderColor={"#222123"}/>
                </div>
                <div className="md:mt-0 mt-10">
                    <p className="font-paragraph">And much more...</p>
                </div>
            </div>
        </div>
   </section>
  )
}

export default BenefitSection