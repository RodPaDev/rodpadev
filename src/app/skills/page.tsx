import { cn, fadeIn } from "@/lib/utils";

const skills: Record<string, string[]> = {
  senior: ["TypeScript", "React", "Node.js", "Express.js", "GraphQL", "REST APIs", "PostgreSQL", "HTML & CSS", "SCSS"],
  intermediate: [
    "Terraform",
    "AWS (Development & Solutions)",
    "Tailwind",
    "Jest",
    "Next.js",
    "Sequelize",
    "CI/CD (GitHub Actions & AWS CodePipeline)",
    "Event-Driven Architecture",
  ],
  junior: ["Angular", "Go", ".NET", "MongoDB", "Python", "Docker"],
  newbie: ["ArgoCD", "Kubernetes", "kubectl", "Helm", "Rust", "Nginx", "Networking (VPC, Subnets, LBs)"],
  tools: ["Git", "GitHub", "Jira", "Figma", "Postman", "Bash", "Linux"],
  soft: ["Ownership", "Orchestration", "Problem Solving", "High Agency", "Team Player", "Open Communicator"],
  languages: ["English", "Portuguese", "French", "German (rusty)"],
  certifications: ["Full-Stack Developer + Computer Science (BloomTech)", "AWS Certified Solutions Architect Associate (In progress)"],
};

const skillToDescription: Record<string, string> = {
  senior: "Mastered; can architect and mentor",
  intermediate: "Confident with occasional docs needed",
  junior: "Used but need more experience",
  newbie: "Recently learned, grasping basics",
  tools: "Used in daily workflow",
  soft: "Personal values I practice",
  languages: "Languages I speak fluently",
  certifications: "Credentials I've earned or am pursuing",
};

export default async function Home() {
  return (
    <main className="flex flex-col gap-2">
      <section className={cn(fadeIn, "animation-delay-100")}>
        <span className="pt-3 mt-4 font-light text-muted-foreground">
          These are the skills I have acquired over the years, both in my professional career and personal projects.
        </span>

        <p className="pt-3 mt-4 font-light text-muted-foreground">
          My favorite design pattern is: <span className="font-semibold">No Design Pattern</span>
          <p className="text-muted-foreground">
            The key to good software is simplicity and clarity. A complex product can only benefit from a simple design. We should abstract only
            because it&apos;s necessary, not because we can.
          </p>
        </p>
      </section>

      <hr className={cn("border-1 border-muted-foreground mt-4 mb-4", fadeIn, "animation-delay-200")} />

      <section className={cn(fadeIn, "animation-delay-400")}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {Object.entries(skills).map(([skill, items], skillIndex) => (
            <div
              id={skill}
              key={skill}
              className={cn("flex flex-col gap-2  border-muted-foreground pt-4", fadeIn, `animation-delay-${500 + skillIndex * 100}`)}
            >
              <h3 className="text-lg font-semibold capitalize flex items-center cursor-default">
                <span className="text-2xl mr-2 font-light text-center">#</span>
                <span>{skill}</span>
              </h3>
              <p className="text-sm text-muted-foreground">{skillToDescription[skill]}</p>
              <ul className="list-disc pl-5">
                {items.map((item, itemIndex) => (
                  <li
                    key={item}
                    className={cn("text-sm text-muted-foreground", fadeIn, `animation-delay-${600 + skillIndex * 100 + itemIndex * 50}`)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
