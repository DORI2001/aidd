export default function About() {
  const skills = ["Python", "C", "SQL", "Data Structures", "Algorithms", "AI Tools", "GitHub", "Docker"];

  return (
    <div className="flex-1 min-h-screen flex flex-col items-center justify-center gap-12 p-8 max-w-3xl mx-auto">

      <div className="text-center">
        <h1 className="text-4xl font-bold text-white">About Me</h1>
        <div className="h-1 w-16 bg-cyan-400 rounded-full mt-3 mx-auto"></div>
      </div>

      <div className="flex flex-col gap-8 w-full">

        <section className="flex flex-col gap-2">
          <h2 className="text-cyan-400 font-mono text-sm uppercase tracking-widest">Education</h2>
          <p className="text-white font-semibold">B.Sc. Computer Science — HIT</p>
          <p className="text-zinc-400 text-sm">2024 – Expected Oct 2026</p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-cyan-400 font-mono text-sm uppercase tracking-widest">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill} className="bg-neutral-800 text-zinc-300 text-sm px-3 py-1 rounded-full border border-neutral-700">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-cyan-400 font-mono text-sm uppercase tracking-widest">Currently Learning</h2>
          <p className="text-zinc-300">CI/CD pipelines and working deeper with AI tools. Exploring cloud, DevOps, and networking alongside my studies.</p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-cyan-400 font-mono text-sm uppercase tracking-widest">Interests</h2>
          <p className="text-zinc-300">Gym, swimming, and travelling the world whenever I get the chance.</p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-cyan-400 font-mono text-sm uppercase tracking-widest">Looking For</h2>
          <p className="text-zinc-300">A software engineering role with a focus on cloud, DevOps, or networking. Open to internships and collaborations.</p>
        </section>

      </div>
    </div>
  );
}
