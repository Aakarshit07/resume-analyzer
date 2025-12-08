import Navbar from "components/Navbar";
import type { Route } from "./+types/home";
import { resumesData } from "constants/index";
import ResumeCard from "components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "NexuCV" },
    {
      name: "description",
      content: "Smart feedback for your dream job with NexuCV",
    },
  ];
}

export default function Home() {
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />
      <section className="main-section">
        <div className="page-heading py-16">
          <h1>Track Your Application & Resume Rating</h1>
          <h2>Review your submission and check AI-powered feedback</h2>
        </div>

        {resumesData?.length > 0 && (
          <div className="resumes-section">
            {resumesData?.map((resume) => (
              <ResumeCard key={resume.id} resume={resume} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
