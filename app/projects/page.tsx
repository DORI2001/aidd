
const projects = [
  {
    name: "smart irrigation system",
    description: "An IoT-based system for efficient water management in agriculture.",
    link: "https://github.com/DORI2001/IOT_SMART_HOME"
  },
  {
    name: "path planning using A* algorithm",
    description: "Implementation of the A* algorithm for path planning in robotics.",
    link: "https://github.com/DORI2001/AV-course"
  },
];

export default function Projects() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center gap-4 p-8">
      <h1 className="text-3xl font-bold text-white">Projects</h1>
      <div>
        {projects.map((project) => (
           <div key={project.name} className="border border-neutral-700 rounded-lg p-6 w-80">

            <h2 className="text-xl font-bold text-white">{project.name}</h2>
            <p className="text-gray-300">{project.description}</p>
            <a href={project.link} className="text-blue-400 hover:text-blue-300 text-sm" target="_blank">
  View on GitHub
</a>

          </div>
        ))}
      </div>
    </main>
  );
}
