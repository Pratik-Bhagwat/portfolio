import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

import ProjectModel from "./project-model";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="group/card ml-2 max-w-[85vw] border-foreground bg-background text-foreground ring-2 ring-violet-400 transition-all duration-500 ease-in-out hover:scale-110 sm:ml-0 md:max-h-[50vh] md:max-w-[75vw] lg:max-h-[50vh] lg:max-w-[41vw]">
      <CardHeader>
        <CardTitle>{project.name}</CardTitle>
        <CardDescription className="truncate">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ProjectModel project={project} />
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
