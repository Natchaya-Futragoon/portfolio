import React from "react";
import ProjectPage from "../components/ProjectPage";
import SpeakMateProcess from "../components/SpeakMateProcess";

const SpeakMatePage = () => {
  return (
    <ProjectPage
      title="SpeakMate"
      image={[
        `${import.meta.env.BASE_URL}images/projects/speakmate/speakmate-1.jpg`,
        `${import.meta.env.BASE_URL}images/projects/speakmate/speakmate-2.jpg`,
        `${import.meta.env.BASE_URL}images/projects/speakmate/speakmate-3.jpg`,
        `${import.meta.env.BASE_URL}images/projects/speakmate/speakmate-4.jpg`,
        `${import.meta.env.BASE_URL}images/projects/speakmate/speakmate-5.jpg`,
        `${import.meta.env.BASE_URL}images/projects/speakmate/speakmate-6.jpg`,
        `${import.meta.env.BASE_URL}images/projects/speakmate/speakmate-7.jpg`,
      ]}
      
      overview="SpeakMate is a gamified platform designed to help non-native English speakers build consistent speaking habits through bite-sized daily challenges and emotional encouragement."
      timeline="4 weeks"
      team="5 members"
      role="IOS App Designer & Developer"
      tools="Miro, Figma, SwiftUI, XCode" 
      problem={
        <>
          Based on our shared team vision around the theme of growth, we developed the challenge statement: “Foster Progressive Growth.” Through literature review and user interviews, we identified key challenges faced by international students in Australia—particularly around communication.
          International students often struggle with:
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Low confidence in formal or group conversations</li>
            <li>Reduced academic participation and a weakened sense of belonging</li>
            <li>Lack of emotional support and positive feedback lead to inconsistent speaking practice habits</li>
            <li>Social exclusion and limited engagement in class or campus life</li>
          </ul>
          A deeper challenge lies in how to sustain motivation and engagement in communication practice, as students can easily lose confidence or give up without consistent, low-pressure support.
          This insight shaped our design direction: to create a solution that makes language learning more approachable, culturally relevant, and habit-forming.
        </>
      }
      goal="To create a soft, gamified system that gently encourages daily speaking practice with emotional safety, curiosity, and reward."
      process={`We followed a design thinking process:

        1. Explored the problem space by reviewing literature on language anxiety, habit formation, and motivational psychology.
        2. Conducted learner interviews to uncover pain points and barriers in speaking practice.
        3. Ideated playful, low-pressure challenges that build consistency and emotional safety.
        4. Designed a prototype featuring timed daily prompts, character feedback, and fun vocab.
        5. Developed the application using SwiftUI, focusing on smooth interaction and gentle reinforcement.`}
        

      outcome={
        <>
          SpeakMate is a mobile app that gamifies daily communication practice through AI-powered analysis and feedback. It helps international students build confidence in speaking Australian English—especially when navigating slang, informal phrases, and cultural nuances. Key features include:
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li><strong> 1-Minute Daily Challenge:</strong> Users complete a short speaking prompt once a day. The 1-minute time limit and daily restriction create a sense of scarcity, encouraging habit formation and sustained engagement.</li>
            <li><strong>Cultural Relevance:</strong>  Prompts and feedback incorporate Aussie slang and cultural nuances, making language practice more authentic, engaging, and socially meaningful.</li>
            <li><strong>Progressive Growth System:</strong>  Users receive friendly, AI-generated feedback and can track their progress over time—fostering a sense of growth, consistency, and confidence without feeling overwhelmed.</li>
          </ul>
          <p className="mt-2">
            By combining gamification, cultural relevance, and micro-learning, SpeakMate transforms language learning into a simple, engaging daily ritual that supports both academic success and social integration.
          </p>
        </>
      }
    >
      <SpeakMateProcess />
    </ProjectPage>
  );
};

export default SpeakMatePage;
