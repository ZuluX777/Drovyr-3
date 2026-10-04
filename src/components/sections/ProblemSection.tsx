const problems = [
  {
    title: "Leads sit too long before anyone follows up",
    description: "By the time a lead gets a reply, they've often already called someone else.",
  },
  {
    title: "Work is trapped in email and spreadsheets",
    description: "Information that should move automatically instead depends on someone remembering to send it.",
  },
  {
    title: "Owners chase updates instead of getting them",
    description: "Without real-time visibility, checking on a job means asking a person and waiting.",
  },
  {
    title: "New software doesn't fix a broken process",
    description: "Adding another tool rarely helps if the underlying workflow around it stays the same.",
  },
];

export default function ProblemSection() {
  return (
    <section className="border-b border-focus-border/60 bg-focus">
      <div className="container-content py-20 md:py-28">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-elevation md:text-4xl">
            Your business doesn&rsquo;t need more software. It needs more clarity.
          </h2>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-focus-border bg-focus-border md:grid-cols-2">
          {problems.map((problem) => (
            <div key={problem.title} className="bg-focus-card p-8">
              <h3 className="text-lg font-semibold text-elevation">{problem.title}</h3>
              <p className="mt-3 text-elevation-muted">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
