import { Link } from "react-router";
import ScoreCircle from "./ScoreCircle";
import Navbar from "components/Navbar";
import { resumesData } from "constants/index";
import { usePuterStore } from "~/lib/puter";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

const ResumeCard = ({ resume }: { resume: Resume }) => {
  const { id, companyName, jobTitle, imagePath, resumePath, feedback } = resume;
  const fs = usePuterStore((state) => state.fs);
  const [resumeUrl, setResumeUrl] = useState("");

  useEffect(() => {
    const loadResume = async () => {
      const blob = await fs.read(imagePath);
      if (!blob) return;
      let url = URL.createObjectURL(blob);
      setResumeUrl(url);
    };
    loadResume();
  }, [imagePath]);

  return (
    <Link
      to={`/resume/${resume.id}`}
      className="resume-card animate-in fade-in duration-1000"
    >
      <div className="resume-card-header">
        <div className="flex flex-col gap-2">
          {companyName && (
            <h2 className="text-black! font-bold wrap-break-word">
              {companyName}
            </h2>
          )}
          {jobTitle && (
            <h3 className="text-lg wrap-break-word text-gray-500">
              {jobTitle}
            </h3>
          )}
          {!companyName && !jobTitle && (
            <h2 className="text-black! font-bold">Resume</h2>
          )}
        </div>
        <div className="flex-shirnk-0">
          <ScoreCircle score={feedback.overallScore} />
        </div>
      </div>
      {resumeUrl && (
        <div className="gradient-border animte-in fade-in duration-1000">
          <div className="w-full h-full">
            <img
              src={resumeUrl}
              alt={companyName + " resume"}
              className="w-full h-[350px] max-sm:h-[200px] object-cover object-top"
            />
          </div>
        </div>
      )}
    </Link>
  );
};

export default ResumeCard;
