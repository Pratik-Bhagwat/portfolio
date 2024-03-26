import Image, { StaticImageData } from "next/image";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

interface ProjectImageCarouselProps {
  images: StaticImageData[];
}

const ProjectImageCarousel = ({ images }: ProjectImageCarouselProps) => {
  return (
    <Carousel className="w-4/5">
      <CarouselContent>
        {images?.length > 0 &&
          images.map((img, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex h-[200px] items-center justify-center p-6">
                    <Image
                      src={img}
                      alt={`project-image-${index}`}
                      className="h-full w-full object-cover"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ProjectImageCarousel;
