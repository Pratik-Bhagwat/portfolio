import { whatIDoList } from "@/constants";
import Wrapper from "./wrapper";

const AboutUsSection = () => {
  return (
    <section id="about">
      <Wrapper className="mb-32 flex min-h-screen flex-col justify-center space-y-20 sm:mb-0 sm:pt-32">
        <div className="space-y-5">
          <h5 className="font-proximaNova text-sm uppercase tracking-[0.3em] md:text-base">
            About me
          </h5>
          <p className=":text-[5.5rem] text-pretty px-2 font-avanGarde text-5xl leading-tight sm:text-5xl md:text-6xl lg:text-[5rem]">
            I&rsquo;m a{" "}
            <span className="text-[#EB5939]">selectively skilled</span> Frontend
            Developer, adept in responsive design and interactive UI. I innovate
            with cutting-edge web tech and empower the next wave of developers.
          </p>
        </div>
        <div className="space-y-5">
          <h5 className="font-proximaNova text-sm uppercase tracking-[0.3em] md:text-base">
            What I do
          </h5>
          <ul className="flex w-full flex-col">
            {whatIDoList.map((task) => (
              <li
                key={task.id}
                className="font group relative flex h-12 w-full cursor-default items-center border-y border-muted/10 font-avanGarde text-[2.8rem] uppercase tracking-tighter sm:h-20 sm:text-7xl md:h-24 md:text-8xl"
              >
                <span className="whitespace-nowrap transition-all duration-500 group-hover:text-background">
                  {task.task}
                </span>
                <div className="absolute inset-0 -z-10 h-full w-full scale-y-0 bg-[#EB5939] transition-all duration-500 group-hover:scale-y-100" />
              </li>
            ))}
          </ul>
        </div>
      </Wrapper>
    </section>
  );
};

export default AboutUsSection;
``;
