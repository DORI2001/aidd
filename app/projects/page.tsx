const projects = [
  {
    name: "smart irrigation system",
    description: "An IoT-based system for efficient water management in agriculture.",
    link: "https://github.com/DORI2001/IOT_SMART_HOME",
  },
  {
    name: "path planning using A* algorithm",
    description: "Implementation of the A* algorithm for path planning in robotics.",
    link: "https://github.com/DORI2001/AV-course",
  },
  {
    name: "portfolio website",
    description: "My personal portfolio built with Next.js and Tailwind CSS.",
    link: "https://github.com/DORI2001/aidd",
  },
];

export default function Projects() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center gap-4 p-8">
      <h1 className="text-3xl font-bold text-white">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.name} className="border border-neutral-700 rounded-lg p-6">
            <h2 className="text-xl font-bold text-white">{project.name}</h2>
            <p className="text-gray-300">{project.description}</p>
            <a
              href={project.link}
              className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
              target="_blank"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
