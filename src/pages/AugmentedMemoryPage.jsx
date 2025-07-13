import React from "react";
import ProjectPage from "../components/ProjectPage";

const AugmentedMemoryPage = () => {
  return (
    <>
      <ProjectPage
        title="Augmented Memory"
        video="/videos/probe_kits.mp4"
        overview="This project explores how Augmented Reality (AR) can enrich the recall of emotional memories—especially those involving loved ones. By combining AR with self-recorded videos, the study examines how immersive features (like filters and prompts) enhance memory vividness, emotional engagement, and the desire to reconnect."
        timeline="6 weeks"
        team="Individual"
        role="Design Researcher"
        tools="Cultural Probe, Interview, Thematic Analysis"
        problem={
          <>
            Many people struggle to reconnect with memories of loved ones after loss or separation. Our challenge was to explore how emerging technologies—specifically AR—could support this emotionally rich, delicate space of remembering.
          </>
        }
        goal="To explore how Augmented Reality can be used to trigger, enhance, and emotionally deepen the experience of memory recall with loved ones."
        process={`• Conducted cultural probes study and interviews with participant about memory objects and emotional experiences
• Analyzed findings using Thematic Analysis (Braun & Clarke)
• Identified emotional triggers like objects, places, voices
• Informed design of possible features`}
outcome={
    <>
      <p>
        This study resulted in key insights and design implications for how AR can emotionally support memory recall and reconnection:
      </p>
  
      {/* 🧠 Key Findings */}
      <h4 className="text-lg font-semibold mt-4">🧠 Key Findings</h4>
      <ul className="list-disc pl-6 space-y-1 mt-2">
        <li><strong>Stronger Emotional Connection:</strong> AR made memory recall more vivid and emotionally engaging.</li>
        <li><strong>Desire to Reconnect:</strong> AR videos evoked a sense of longing, prompting reconnection.</li>
        <li><strong>Enhanced Video Quality:</strong> Participants felt AR improved clarity and visual quality.</li>
        <li><strong>Sharing & Social Influence:</strong> Participants were more inclined to share AR-enhanced videos.</li>
      </ul>
      <blockquote className="italic border-l-4 border-gray-400 pl-4 mt-4 text-gray-600">
      “If I could enhance the video quality, maybe I’d feel it more.”<br />
        “I just saw this video… it makes me miss you.”
      </blockquote>
  
      {/* 💡 Design Implications */}
      <h4 className="text-lg font-semibold mt-6">💡 Design Implications</h4>
      <ul className="list-disc pl-6 space-y-1 mt-2">
        <li>Simple AR tools can guide emotional storytelling.</li>
        <li>Emotion-based filters and prompts improve immersion.</li>
        <li>AR could foster reconnection through shared experiences or meaningful messages.</li>
      </ul>
  
      <p className="mt-4">
        These findings contribute to research on emotional design and AR-based memory experiences, offering guidance for future explorations in therapeutic or meaningful immersive media.
      </p>
    </>
  }
  
  
      >
        {/* 🔍 Probe Method Section */}
        <section className="space-y-6 mt-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">📦 Method: Probe Study</h3>
            <p>
              To explore how AR can enhance memory recall, a probe kit was created including:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li><strong>A card deck</strong> introducing AR interaction possibilities</li>
              <li><strong>A reflective journal</strong> to imagine emotional scenarios</li>
              <li><strong>Postcards and a Polaroid</strong> to capture emotional memories</li>
              <li><strong>A scrapbook and self-letter</strong> to deepen reflection</li>
            </ul>
            <p className="mt-2">
              Participants used these tools before being interviewed, and insights were analyzed thematically.
            </p>
          </div>

    
        </section>
      </ProjectPage>

      {/* Download link placed outside ProjectPage */}
      <section className="text-center my-10">
        <a
          href="/files/Augmented-Memory-Probe-Study.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
        >
          📄 View Full Report (PDF)
        </a>
      </section>
    </>
  );
};

export default AugmentedMemoryPage;
