import React, { useRef, useEffect, useState } from "react";
import Navbar from "../components/navbar";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutMe = () => {
  const avatarRef = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const avatar = avatarRef.current;
      if (!avatar) return;

      const rect = avatar.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 150) {
        setOffset({ x: -dx * 0.25, y: -dy * 0.25 });
        setHovering(true);
      } else if (hovering) {
        setHovering(false);
        setOffset({ x: 0, y: 0 });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [hovering]);

  return (
    <>
   
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">
        {/* 1. Intro Section */}
        <section className="text-center" data-aos="fade-up">
          <div className="relative w-fit mx-auto">
            <div
              ref={avatarRef}
              className={`transition-transform duration-500 ease-out mb-4 mx-auto w-32 h-32 sm:w-40 sm:h-40 rounded-full cursor-pointer perspective`}
              style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
              onClick={() => setFlipped(!flipped)}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                  flipped ? "rotate-y-180" : ""
                }`}
              >
                <div className="absolute w-full h-full backface-hidden rounded-full overflow-hidden shadow-md">
                  <img
                    src={`${import.meta.env.BASE_URL}avatar.png`}
                    alt="Alice Front"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute w-full h-full rotate-y-180 backface-hidden rounded-full bg-white overflow-hidden shadow-md">
                  <img
                    src={`${import.meta.env.BASE_URL}kaewfuu.png`}
                    alt="Alice Back"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
            <p className="absolute -top-5 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 italic">click me</p>
          </div>
          <h1 className="text-2xl font-bold mb-4">
          Designing for soft growth, quiet motivation, and meaningful magic — one system at a time.
          </h1>
        </section>

        {/* 2. About Me Bio */}
        <section data-aos="fade-up">
          <h2 className="text-2xl font-semibold mb-4">🧭 About Me</h2>
          <p className="text-lg mb-4">
          I’m an interaction designer and illustrator who transforms everyday challenges into emotionally engaging, gamified experiences.          </p>
          <p className="text-lg mb-4">
          I specialize in designing soft systems — tools that support well-being, emotional growth, and self-reflection — by weaving together narrative design, psychology, and low-pressure game mechanics.
</p>
          <p className="text-lg">
          My work often explores the intersection of play and emotion: how characters, rituals, and visual storytelling can gently support personal growth.          </p>

          <p className="text-lg">
          I'm especially interested in roles like UX Designer, User Researcher, or Gamification Strategist, particularly in teams creating emotionally resonant, reflective, or therapeutic experiences. </p>
          </section>

        {/* 3. Fun Fast Facts */}
        <section data-aos="fade-up">
          <h2 className="text-2xl font-semibold mb-4">🎨 Fun Fast Facts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg">
            <p>🎮 Favorite game mechanic: <strong>Unlockable insights</strong></p>
            <p>🐋 Design spirit animal: <strong>Curious Whale</strong></p>
            <p>✈️ Travel style: <strong>Exploration, Must have a plan</strong></p>
            <p>🧠 Thinks best when: <strong>Walking, researching, reflecting</strong></p>
            <p>✍️ Usually sketching: <strong>Cats, coral, systems, storyboards</strong></p>
          </div>
        </section>

        {/* 4. Beliefs */}
        <section data-aos="fade-up">
          <h2 className="text-2xl font-semibold mb-4">🧩 How I Work</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-xl font-bold">🪞 Reflective</p>
              <p>I build meaning before pixels.</p>
            </div>
            <div>
              <p className="text-xl font-bold">🧩 Systematic</p>
              <p>I turn insights into gentle frameworks.</p>
            </div>
            <div>
              <p className="text-xl font-bold">💛 Emotionally Aware</p>
              <p>I design for how it feels as much as how it works.</p>
            </div>
          </div>
        </section>

        {/* 5. Exploring Now */}
        <section data-aos="fade-up">
          <h2 className="text-2xl font-semibold mb-4">🌱 What I'm Exploring</h2>
          <ul className="list-disc pl-6 space-y-1 text-lg">
            <li>🌀 Gamified tools for emotional motivation</li>
            <li>🐾 Cat-themed reflection decks & archetypes</li>
            <li>🌊 Marine-inspired service journeys</li>
            <li>📚 PhD ideas mixing UX + emotion + conservation</li>
          </ul>
        </section>

        {/* 6. Contact */}
        <section className="text-center space-y-4" data-aos="fade-up">
          <h2 className="text-2xl font-semibold">📬 Let's Connect</h2>
          <p className="text-lg">Want to collaborate or just say hi?</p>
          <div className="space-x-4">
            <a
              href="mailto:natch284@gmail.com"
              className="inline-block bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
            >
              Say Hello
            </a>
            <a
              href="https://linkedin.com/in/natchaya-futragoon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-100 text-gray-800 px-6 py-2 rounded-full hover:bg-black hover:text-white transition"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutMe;
