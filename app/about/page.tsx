import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About — Dor Alagem",
  description:
    "Computer Science student at HIT. Passionate about software engineering, cloud, DevOps, and AI.",
};

export default function About() {
  const skills = [
    "Python",
    "C",
    "SQL",
    "Data Structures",
    "Algorithms",
    "AI Tools",
    "GitHub",
    "Docker",
    "Prompt Engineering",
  ];

  return (
    <div className="flex-1 min-h-screen flex flex-col justify-center p-8 max-w-3xl mx-auto gap-12">
      <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:items-start sm:text-left">
        <Image
          src="/profile.jpg"
          alt="Dor Alagem"
          width={124}
          height={124}
          priority
          className="rounded-full ring-2 ring-cyan-400 shrink-0"
        />
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-white">About Me</h1>
          <div className="h-1 w-16 bg-cyan-400 rounded-full mt-3 mb-4 mx-auto sm:mx-0"></div>
          <p className="text-zinc-300">
            Third-year Computer Science student at HIT, passionate about
            technology, software engineering, and building things that work.
            Currently learning CI/CD pipelines and diving deeper into AI tools,
            cloud, and DevOps.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-8 w-full">
        <section className="flex flex-col gap-2">
          <h2 className="text-cyan-400 font-mono text-sm uppercase tracking-widest">
            Education
          </h2>
          <p className="text-white font-semibold">
            B.Sc. Computer Science — HIT
          </p>
          <p className="text-zinc-400 text-sm">2024 – Expected Oct 2026</p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-cyan-400 font-mono text-sm uppercase tracking-widest">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-neutral-800 text-zinc-300 text-sm px-3 py-1 rounded-full border border-neutral-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-cyan-400 font-mono text-sm uppercase tracking-widest">
            Currently Learning
          </h2>
          <p className="text-zinc-300">
            CI/CD pipelines and working deeper with AI tools. Exploring cloud,
            DevOps, and networking alongside my studies.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-cyan-400 font-mono text-sm uppercase tracking-widest">
            Interests
          </h2>
          <p className="text-zinc-300">
            Gym, swimming, and travelling the world whenever I get the chance.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-cyan-400 font-mono text-sm uppercase tracking-widest">
            Looking For
          </h2>
          <p className="text-zinc-300">
            A software engineering role with a focus on cloud, DevOps, or
            networking. Open to internships and collaborations.
          </p>
        </section>
      </div>
    </div>
  );
}
