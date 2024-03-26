import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

import img from "../assets/about.png";
import ProjectModel from "./project-model";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="w-[375px] border-foreground bg-background text-foreground md:w-[300px] lg:max-w-[350px]">
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
