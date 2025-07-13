import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import { Typewriter } from "react-simple-typewriter";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import SkillCard from "../components/SkillCard";
import SkillIcon from "../components/SkillIcon";

const Home = () => {
  const avatarRef = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });

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

  const projects = [
    { id: 1, title: "Wilia", image: "/public/images/projects/wilia//wilia.jpg", link: "/wilia" },
    { id: 2, title: "SpeakMate", image: "/public/images/projects/speakmate/speakmate.jpg", link: "/speakmate"  },
    { id: 3, title: "Grocery Store Website", image: "/public/images/projects/fivecatweb/fivecatweb.jpg", link: "/fivecatweb"  },
    { id: 4, title: "Augmented Memory", image: "/public/images/projects/augmentedmemory/augmentedmemory.jpg", link: "/augmentedmemory"  },

  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      <section
        id="home"
        className="w-full flex flex-col items-center justify-center text-center px-4 py-8 mx-auto"
        data-aos="fade-up"
      >
        <div
          ref={avatarRef}
          className="transition-transform duration-500 ease-out mb-4"
          style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
        >
          <div
            className="w-28 h-28 sm:w-48 sm:h-48 relative rounded-full perspective"
            onClick={() => setFlipped(!flipped)}
          >
            <div
              className={`absolute w-full h-full rounded-full transition-transform duration-700 transform-style-preserve-3d ${
                flipped ? "rotate-y-180" : ""
              }`}
            >
              <div className="absolute w-full h-full backface-hidden rounded-full overflow-hidden shadow-lg border-2 border-gray-300">
                <img
                  src={`${import.meta.env.BASE_URL}avatar.png`}
                  alt="Alice Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute w-full h-full rotate-y-180 backface-hidden rounded-full overflow-hidden shadow-lg border-2 border-gray-300">
                <img
                  src={`${import.meta.env.BASE_URL}real-avatar.png`}
                  alt="Real Alice"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <h1 className="text-xl font-bold text-gray-600 dark:text-gray-300 mb-1 h-[1.5em] sm:h-[2em]">
          Hi, I'm Alice. I'm a <span className="inline-block"></span>
        </h1>

        <p className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-2">
          <span className="text-black dark:text-white">
            <Typewriter
              words={[
                "Service Designer & Strategist",
                "Design Researcher",
                "Game UX Designer",
                "Character and Narrative Systems Thinker",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={60}
              delaySpeed={2500}
            />
          </span>
        </p>

        <p className="text-base text-gray-500 dark:text-gray-400 max-w-2xl mt-2">
          I design gamified, emotionally engaging experiences to support growth and motivation.
        </p>
      </section>

      {/* Navbar appears below the "I design..." section */}
      <Navbar className="sticky-navbar" />

      <section id="featured" data-aos="fade-up" className="mt-20 w-full">
        <h2 className="text-2xl font-semibold mb-6 text-left">✨ Featured Projects</h2>
        <Slider {...settings} className="max-w-5xl mx-auto">
          {projects.map((project) => {
            const content = (
              <div className="px-4 cursor-pointer">
                <div className="rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[80vh] object-cover border-[2px] border-slate shadow-lg shadow-slate-400 dark:border-gray-700 rounded-lg"                  />
                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>
            );

            return project.link ? (
              <Link to={project.link} key={project.id}>
                {content}
              </Link>
            ) : (
              <div key={project.id}>{content}</div>
            );
          })}
        </Slider>

        {/* === Skills Section === */}
<div data-aos="fade-up" className="mt-20 w-full">
  <h2 className="text-2xl font-semibold mb-10">🧠 Skills</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
    <SkillCard
      title="🔍 Research"
      skills={[
        "User Interviews",
        "Cultural Probes",
        "Thematic Analysis",
        "Field Studies",
        "Affinity Mapping",
      ]}
      colorClass="bg-slate-100 text-slate-900"
    />
    <SkillCard
      title="🛠️ Prototyping"
      skills={[
        "Wireframes & Mockups",
        "Interactive Prototypes",
        "Design Systems",
        "Clickthrough Flows",
      ]}
      colorClass="bg-slate-100 text-slate-900"
    />
    <SkillCard
      title="🎨 UX Design"
      skills={[
        "Narrative Systems",
        "Gamification",
        "Emotional Design",
        "Information Architecture",
      ]}
      colorClass="bg-slate-100 text-slate-900"
    />
    <SkillCard
      title="🎮 Game Design"
      skills={[
        "Feedback Loops",
        "Character/World Building",
        "Player Motivation",
        "Playtesting",
      ]}
      colorClass="bg-slate-100 text-slate-900"
    />
  </div>
</div>

{/* === Tools Section === */}
<div data-aos="fade-up" className="mt-20 w-full px-4">
  <h2 className="text-2xl font-semibold mb-10">⚙️ Tools</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left px-2">
    <SkillCard
      title="🎨 Design Tools"
      skills={["Figma", "Procreate", "Illustrator"]}
      colorClass="bg-slate-100 text-slate-900"
    />
    <SkillCard
      title="💻 Development Tools"
      skills={["HTML/CSS", "JavaScript", "React", "VS Code", "Xcode/SwiftUI"]}
      colorClass="bg-slate-100 text-slate-900"
    />
    <SkillCard
      title="🤝 Collaboration Tools"
      skills={["Miro", "Trello"]}
      colorClass="bg-slate-100 text-slate-900"
    />
  </div>
</div>

       
      </section>
    </div>
  );
};

export default Home;
