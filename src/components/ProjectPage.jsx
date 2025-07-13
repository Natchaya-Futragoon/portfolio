import React, { useEffect, useState } from 'react';

const ProjectPage = ({
  title,
  overview,
  problem,
  process,
  outcome,
  goal,
  image,
  video,
  timeline,
  team,
  role,
  tools,
  children,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    if (!video && Array.isArray(image) && image.length > 1) {
      const interval = setInterval(() => {
        setFade(false);
        setTimeout(() => {
          setCurrentImageIndex((prev) => (prev + 1) % image.length);
          setFade(true);
        }, 300);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [image, video]);

  const currentImage = Array.isArray(image) ? image[currentImageIndex] : image;

  return (
    <div className="max-w-5xl mx-auto px-6 py-14 space-y-12">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center">{title}</h1>

      {/* Media block */}
      {video ? (
        <div className="relative w-full max-w-5xl h-[500px] mx-auto rounded-lg overflow-hidden shadow-md">
          <video
            src={video}
            className="w-full h-full object-cover"
            controls
            playsInline
            autoPlay
            muted
            loop
          />
        </div>
      ) : (
        <div className="relative w-full max-w-5xl h-[700px] mx-auto rounded-lg overflow-hidden shadow-md">
          {Array.isArray(image) &&
            image.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={title}
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              />
            ))}
        </div>
      )}

      {/* Overview */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Overview</h2>
        <p>{overview}</p>
      </section>

      {/* Info blocks */}
      {(timeline || team || role || tools) && (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {timeline && (
            <div>
              <h3 className="text-xl font-semibold mb-1">⏳ Timeline</h3>
              <p className="text-gray-700">{timeline}</p>
            </div>
          )}
          {team && (
            <div>
              <h3 className="text-xl font-semibold mb-1">👥 Team</h3>
              <p className="text-gray-700">{team}</p>
            </div>
          )}
          {role && (
            <div>
              <h3 className="text-xl font-semibold mb-1">🎯 My Role</h3>
              <p className="text-gray-700">{role}</p>
            </div>
          )}
          {tools && (
            <div>
              <h3 className="text-xl font-semibold mb-1">🛠 Tools</h3>
              <p className="text-gray-700">{tools}</p>
            </div>
          )}
        </section>
      )}

      {/* Problem */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Problem</h2>
        <div className="space-y-2">{problem}</div>
      </section>

      {/* Goal */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Goal</h2>
        <p>{goal}</p>
      </section>

      {/* Process */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Process</h2>
        <p className="mb-4 whitespace-pre-line">{process}</p>
        {children}
      </section>

      {/* Outcome */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Outcome</h2>
        <div className="space-y-2">{outcome}</div>
      </section>
    </div>
  );
};

export default ProjectPage;
