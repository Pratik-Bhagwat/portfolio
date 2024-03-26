import Image from "next/image";
import resumeSVG from "../assets/svgs/CarbonDocumentAttachment.svg";
import Link from "next/link";

const ResumeDownloadSpinner = () => {
  const text = "Pratik - Bhagwat - resume - view - here -";
  return (
    <div className="fixed bottom-3 right-0 z-10">
      <div className="relative flex size-28 items-center justify-center rounded-full">
        <div
          style={{ position: "absolute", zIndex: 1 }}
          className="flex size-14 animate-pulse items-center justify-center rounded-full text-foreground"
        >
          <Link href="/home">
            <Image
              src={resumeSVG}
              alt="resume-svg"
              className="size-8 cursor-pointer"
            />
          </Link>
        </div>

        <div className="absolute h-full w-full animate-rotate">
          <p>
            {text.split("").map((char, idx) => (
              <span
                key={idx}
                style={{
                  transform: `rotate(${idx * 8.7}deg)`,
                }}
                className="absolute left-1/2 origin-[0_56px] font-proximaNova text-xs uppercase"
              >
                {char}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResumeDownloadSpinner;
