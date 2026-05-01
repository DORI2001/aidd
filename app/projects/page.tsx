const projects = [
  {
    name: "Smart Irrigation System",
    description: "IoT course final project. Monitors soil moisture via MQTT and triggers irrigation alerts automatically. Built a live Streamlit dashboard to track moisture history in real time.",
    link: "https://github.com/DORI2001/IOT_SMART_HOME",
  },
  {
    name: "A* Path Planning Visualizer",
    description: "Implements the A* algorithm for robot navigation through obstacle-filled environments. Includes an interactive GUI where you can place start/goal points and watch the algorithm explore in real time.",
    link: "https://github.com/DORI2001/AV-course",
  },
  {
    name: "This Portfolio",
    description: "Built from scratch with Next.js 16 and Tailwind CSS v4. My first web dev project — designed and coded while learning the fundamentals.",
    link: "https://github.com/DORI2001/aidd",
  },
];

export default function Projects() {
  return (
    <div className="flex-1 min-h-screen flex flex-col items-center justify-center gap-4 p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white">Projects</h1>
        <div className="h-1 w-16 bg-cyan-400 rounded-full mt-3 mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {projects.map((project) => (
          <div key={project.name} className="border border-neutral-700 rounded-lg p-6 hover:-translate-y-1 transition-transform">
            <h2 className="text-cyan-400 font-mono text-sm uppercase tracking-widest mb-2">{project.name}</h2>
            <p className="text-zinc-300 text-sm">{project.description}</p>
            <a
              href={project.link}
              className="text-cyan-400 hover:text-cyan-300 transition-colors text-xs font-mono mt-3 inline-block"
              target="_blank"
            >
              view on github →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
