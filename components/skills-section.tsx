import { skillsList } from "@/constants";
import Wrapper from "./wrapper";
import Image from "next/image";

const SkillsSection = () => {
  return (
    <section id="skills">
      <Wrapper className="flex min-h-screen flex-col justify-center space-y-5 sm:pt-32">
        <h5 className="font-proximaNova text-sm uppercase tracking-[0.3em] md:text-base">
          Skills
        </h5>
        <div>
          <ul className="grid h-full grid-cols-3 place-items-center gap-y-3 lg:grid-cols-4">
            {skillsList.map((skill) => (
              <li
                key={skill.id}
                className="flex size-32 items-center justify-center rounded-full lg:size-60"
              >
                {
                  <div className="flex flex-col items-center space-y-2">
                    <Image
                      src={skill.icon}
                      alt={skill.skill}
                      className="lg:size-30 size-16 object-contain md:size-24"
                    />
                    <span className="font-proximaNova">{skill.skill}</span>
                  </div>
                }
              </li>
            ))}
          </ul>
        </div>
      </Wrapper>
    </section>
  );
};

export default SkillsSection;
