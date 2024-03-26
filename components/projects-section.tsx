import { projectList } from "@/constants";
import ProjectCard from "./project-card";
import Wrapper from "./wrapper";

const ProjectsSection = () => {
  return (
    <section id="projects">
      <Wrapper className="flex min-h-screen flex-col justify-center space-y-5 sm:pt-32">
        <h5 className="font-proximaNova text-sm uppercase tracking-[0.5em] sm:text-base">
          Projects
        </h5>
        <div className="grid grid-cols-1 place-items-center gap-y-10 px-2 md:grid-cols-2 xl:grid-cols-3">
          {projectList.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default ProjectsSection;
