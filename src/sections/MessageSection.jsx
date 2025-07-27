import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import React from 'react'
import gsap from 'gsap/all'

const MessageSection = () => {

   

    useGSAP(()=>{
        const firstMsgSplit = SplitText.create(".first-message",{
            type:"words",
        });
        const secMsgSplit = SplitText.create(".second-message",{
            type:"words",
        });
        const paragraphSplit = SplitText.create(".message-content p",{
            type:"words, lines",
            linesClass: "paragraph-line"            // Tailwind custom utility class
        });

        // Start animation
        gsap.to(firstMsgSplit.words,{
            color:"#faeade",
            ease: "power1.in",
            stagger: 1,                 // Delay between words
            scrollTrigger: {
                trigger: ".message-content",         // Trigger animation only when we scroll to message content
                start: "top center",
                end: "30% center",
                scrub: true                         // Animation synced with scroll position
            }
        });
        gsap.to(secMsgSplit.words,{
            color:"#faeade",
            ease: "power1.in",
            stagger: 1,                 // Delay between words
            scrollTrigger: {
                trigger: ".second-message",         // Trigger animation only when we scroll to message content
                start: "top center",                // Animation starts when scroll hit start
                end: "bottom center",               // Animation ends when scroll hits end
                scrub: true                         // Animation synced with scroll position
            }
        });
        const revealTl = gsap.timeline({
            delay:1,
            scrollTrigger:{
                trigger:".msg-text-scroll",
                start:"top 60%",

            }
        })
        revealTl.to(".msg-text-scroll",{
            duration:1,
            clipPath: "polygon(0% 0%,100% 0%, 100% 100%, 0% 100%)",
            ease: "circ.inOut",
        });

        const paragraphTl = gsap.timeline({
            scrollTrigger:{
                trigger:".message-content p",
                start: "top 80%",
            }
        })
        paragraphTl.from(paragraphSplit.words,{
            yPercent: 300,
            rotate: 3,
            ease: "power2.inOut",
            duration: 0.8,
            stagger: 0.01
        })
    })

  return (
    <section className='message-content'>
        <div className="container mx-auto flex-center py-28 relative">
            <div className='w-full h-full'>
                <div className="msg-wrapper">
                    <h1 className='first-message'>Kal ka dam, aaj ki bottle mein.</h1>

                    <div style={{clipPath: "polygon(0 0,0 0, 0 100%, 0 100%)"}} className="msg-text-scroll">
                        <div className='bg-light-brown md:pb-5 pb-3 px-5'>
                            <h2 className='text-red-brown'>Fuel Up</h2>
                        </div>
                    </div>

                    <h1 className='second-message'>Your future with every gulp of protein</h1>
                </div>
                <div className="flex-center md:mt-20 mt-10">
                    <div className="max-w-md px-10 flex-center overflow-hidden">
                        <p>I have sourced nutrients your dadi would be proud of, calcium-rich milk, no added sugar, lactose-free, and full of power.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MessageSection