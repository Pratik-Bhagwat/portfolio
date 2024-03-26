import Wrapper from "./wrapper";

const HeroSection = () => {
  return (
    <section id="home" className="">
      <Wrapper className="flex min-h-screen items-center justify-center sm:mt-5">
        <div className="flex h-full w-full flex-col items-center justify-center space-y-3 text-balance">
          <h5 className="max-w-full font-proximaNova text-sm uppercase tracking-[0.3em] md:text-base">
            Pratik Bhagwat
          </h5>
          <h1 className="max-w-full text-balance text-center font-avanGarde text-7xl leading-[4rem] sm:text-8xl sm:leading-[5rem] md:text-9xl md:leading-[7.5rem]">
            I am a{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500 bg-clip-text text-transparent">
              Frontend
            </span>{" "}
            Developer.
          </h1>
        </div>
      </Wrapper>
    </section>
  );
};

export default HeroSection;
