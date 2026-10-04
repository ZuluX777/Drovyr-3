const problems = [
  {
    title: "Broken intake",
    description: "Inquiries arrive in several places, and some never get a reply.",
  },
  {
    title: "Inconsistent follow-up",
    description: "Quotes and estimates go out, and then nobody checks back.",
  },
  {
    title: "Scheduling from memory",
    description: "The schedule works because one person remembers everything.",
  },
  {
    title: "Handoffs that slip",
    description: "A task is marked done, but the next step never happens.",
  },
];

export default function ProblemSection() {
  return (
    <section className="border-b border-operational/20 bg-focus">
      <div className="container-content py-20 md:py-28">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-elevation md:text-4xl">
            Automating a broken process just breaks it faster.
          </h2>
          <p className="mt-4 text-lg text-operational">
            Automation repeats whatever you give it. If the process underneath is unreliable, you
            get the same failure, only faster and more often.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {problems.map((problem) => (
            <div key={problem.title} className="rounded-xl border border-operational/20 p-8">
              <h3 className="text-lg font-semibold text-elevation">{problem.title}</h3>
              <p className="mt-3 text-operational">{problem.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-2xl text-operational">
          So we start with the process: who owns it, what goes in, and where it fails. Once it
          works, we connect the systems and automate what should be automated.
        </p>
      </div>
    </section>
  );
}
