import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";

const HeroSection = () => {
  useGSAP(() => {
    // Run all animations as soon as the component is mounted (Like useEffect but for GSAP)
    const titleSplit = SplitText.create(".hero-title", {
      type: "chars",
    });

    const tl = gsap.timeline({
      delay: 0.5, // 1 second
    });

    // use timeline
    tl.to(".hero-content", {
      opacity: 1, // Final keyframe thing
      y: 0,
      ease: "power1.inOut",
    })
      .to(
        ".hero-text-scroll",
        {
          duration: 1,
          clipPath: "polygon(0% 0, 100% 0, 100% 100%, 0% 100%)",
          ease: "circ.out",
        },
        "-=0.5"
      ) // both animations start together
      .from(
        titleSplit.chars,
        {
          yPercent: 200,
          stagger: 0.02, // Delay between letters
          ease: "power2.out",
        },
        "-=0.5"
      ); // Overlap animations

    // New timeline
    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-container", // Include everything in hero container
        start: "1% top", // 1% from top of hero container
        end: "bottom top",
        scrub: true, // Animation synced to scroll position
      },
    });
    heroTl.to(".hero-container", {
      rotate: 3,
      scale: 0.9,
      yPercent: 20,
      ease: "power1.inOut",
    });
  });
  return (
    <section className="bg-main-bg">
      <div className="hero-container">
        <img
          src="public/images/static-img.png"
          alt="static-img"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 object-auto scale-100 md:scale-150"
        />
        <div className="hero-content opacity-0">
          <div className="overflow-hidden">
            <h1 className="hero-title">Protein thoda hatke!</h1>
          </div>
          {/* Reveal text animation */}
          <div
            style={{
              clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            }}
            className="hero-text-scroll"
          >
            <div className="hero-subtitle">
              <h1>100% Quality 0 Jugaad</h1>
            </div>
          </div>
          {/* Subtitle and Call to Action Button */}
          <h2>From Mumbai traffic to gym hustle — SwasthSip fuels your day</h2>
          <button className="hero-button">
            Taste of the west, power of desi milk
          </button>
          <p className="text-md text-black mt-3">
           © {new Date().getFullYear()} SwasthSip by Divyaanshu Agrawal. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
