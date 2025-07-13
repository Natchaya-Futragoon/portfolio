import React from "react";
import ProjectPage from "../components/ProjectPage";
import WiliaProcess from "../components/WiliaProcess";

const WiliaPage = () => {
  return (
    <>
      <ProjectPage
        title="Wilia"
        image={[
          "/public/images/projects/wilia/wilia-1.jpg",
          "/public/images/projects/wilia/wilia-2.jpg",
          "/public/images/projects/wilia/wilia-3.jpg",
          "/public/images/projects/wilia/wilia-4.jpg",
        ]}
        overview="Wilia is a platform that aim to ransform WIL (Work integrated leartning experience by leveraging AI technologies to reduce friction in connections between key stakeholders (students, professionals, and academics), while optimising resources and delivering measurable value to all stakeholders (beyond the 3 groups, like leadership teams).
"
timeline="12 weeks (5 sprints)"
  team="6 members"
  role="UX Researcher & Designer (Focus on Reflection"
  tools="Miro, Figma" 
        problem={
          <>
            Based on the design brief, desk research, and field study, the key challenges in Work Integrated Learning (WIL) programs include:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Communication gaps between students, industry partners, and academics</li>
              <li>Repetitive and time-consuming task handling</li>
              <li>Lack of meaningful and structured reflection</li>
              <li>Limited visibility into student progress</li>
            </ul>
          </>
        }
        goal="To support students in reflecting regularly during internships by making self-reflection feel light, emotionally supportive, and easy to start — ultimately building a sustainable and enjoyable habit."
        process="We co-designed low-pressure emoji-based prompts, created a Figma prototype, and ran user tests."
        outcome={
          <>
            The final design is a low-pressure, emotionally aware reflection system featuring:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Emoji-based mood check-ins</li>
              <li>Gentle daily prompts styled like messages from a supportive buddy</li>
              <li>A warm, minimal interface that encourages consistent use</li>
            </ul>
            <p className="mt-2">
              It supports students in meaningful self-reflection while streamlining feedback for both industry and academic supervisors.
            </p>
          </>
        }
      >
        <WiliaProcess />
      </ProjectPage>

      {/* ✅ This part is now OUTSIDE the ProjectPage layout */}
      <section className="text-center my-10">
        <a
  href="/files/wilia-case-study.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
>
  📄 View Full Case Study (PDF)
</a>

      </section>
    </>
  );
};

export default WiliaPage;
