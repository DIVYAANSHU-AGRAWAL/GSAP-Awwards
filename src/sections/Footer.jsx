const Footer = () => {
  return (
    <section className="footer-section">
      <img
        src="/images/footer-dip.png"
        alt="footer-dip"
        className="w-full object-cover -translate-y-1"
      />
      <div className="2xl:h-[110dvh] relative md:pt-[20vh] pt-[10vh]">
        <div className="overflow-hidden">
          <h1 className="general-title text-center text-milk py-5 ">
            #PIYO JEE BHAR KE!
          </h1>
        </div>

        <video
          src="/videos/splash.mp4"
          autoPlay
          playsInline
          muted
          loop
          className="absolute top-0 object-contain mix-blend-lighten"
        ></video>

        <div className="flex-center gap-5 relative z-10 md:mt-20 mt-5">
          <div className="social-btn">
            <img src="/images/yt.svg" alt="youtube" />
          </div>
          <div className="social-btn">
            <img src="/images/insta.svg" alt="insta" />
          </div>
        </div>
        <p class="text-center text-sm text-gray-500">
  © 2025 Divyaanshu Agrawal. All rights reserved. Built with ❤️ in India.
</p>

      </div>
    </section>
  );
};

export default Footer;
