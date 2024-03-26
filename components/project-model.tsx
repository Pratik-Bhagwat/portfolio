import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Project } from "@/types";
import Link from "next/link";
import { ExternalLink, Link2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectModelProps {
  project: Project;
}

const ProjectModel = ({ project }: ProjectModelProps) => {
  const {
    description,
    images,
    name,
    thumbnail,
    videoURL,
    techstacks,
    completed,
    URL,
  } = project;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="group relative max-h-[300px] max-w-full cursor-pointer overflow-hidden md:h-[265px]">
          <Image
            src={thumbnail}
            alt="image"
            className="h-full w-full rounded-lg object-cover"
          />
          <div className="absolute top-96 h-full w-full bg-[#f7998484] transition-all duration-300 group-hover:top-0" />
        </div>
      </DialogTrigger>
      <DialogContent>
        <div className="h-[500px]">
          <div className="mt-5 flex h-[180px] w-full justify-center">
            <video
              muted
              autoPlay
              loop
              controls
              className="h-full w-full rounded-lg object-cover"
            >
              <source src={videoURL} type="video/mp4" />
            </video>
          </div>

          <div>
            <CardHeader>
              <CardTitle className="text-base sm:text-2xl">{name}</CardTitle>
              <CardDescription className="text-xs sm:text-sm">
                {description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-2 sm:space-y-5">
                <div>
                  <h4 className="font-avanGarde text-sm sm:text-lg">
                    Techstacks :{" "}
                  </h4>
                  <div className="flex items-center justify-between px-3">
                    <div
                      className={cn(
                        "flex items-center space-x-2 rounded-md px-3 py-1",
                        completed ? "bg-green-500/15" : "bg-yellow-500/15",
                      )}
                    >
                      <span
                        className={cn(
                          "size-2 rounded-full ring-2",
                          completed
                            ? "bg-greeen-500 ring-green-700"
                            : "bg-yellow-500 ring-yellow-700",
                        )}
                      ></span>
                      <span
                        className={cn(
                          "font-proximaNova text-xs sm:text-sm",
                          completed ? "text-green-500" : "text-yellow-500",
                        )}
                      >
                        {completed ? "Completed" : "Ongoing"}
                      </span>
                    </div>
                    <Link href={URL}>
                      <ExternalLink className="size-4 text-foreground" />
                    </Link>
                  </div>
                </div>
                <ul className="grid grid-cols-2 gap-y-3 px-3 sm:grid-cols-3">
                  {techstacks.map((stack) => (
                    <li key={stack.id} className="flex items-center space-x-3">
                      <span className="font-proximaNova text-xs">
                        {stack.name}
                      </span>
                      <Image
                        src={stack.image}
                        alt={stack.name}
                        className="size-5"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModel;
