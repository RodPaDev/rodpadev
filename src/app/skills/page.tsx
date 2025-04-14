import { cn, fadeIn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

const skills: Record<string, string[]> = {
  senior: ["TypeScript", "React", "Node.js", "Express.js", "GraphQL", "REST APIs", "PostgreSQL", "HTML & CSS", "SCSS"],
  intermediate: [
    "Terraform",
    "AWS (non-certified)",
    "Tailwind",
    "Jest",
    "Next.js",
    "Sequelize",
    "CI/CD (GitHub Actions, AWS CodePipeline)",
    "Event-Driven Architecture",
  ],
  junior: ["Go", ".NET", "MongoDB", "Python", "Docker"],
  newbie: ["Kubernetes", "kubectl", "Helm", "Rust", "Nginx", "Networking (TCP/IP, HTTP, DNS)"],
  tools: ["Git", "GitHub", "Jira", "Figma", "Postman", "Bash", "Linux"],
  soft: ["Ownership", "Orchestration", "Problem Solving", "High Agency", "Team Player", "Open Communicator"],
  languages: ["English", "Portuguese", "French", "German (rusty)"],
  certifications: ["Full-Stack Developer + Computer Science (BloomTech)", "AWS Certified Solutions Architect Associate (In progress)"],
};

const skillToDescription: Record<string, string> = {
  senior:
    "Technologies I've mastered through extensive professional experience. I can architect solutions, troubleshoot complex issues, and mentor others with minimal reference to documentation.",
  intermediate:
    "Tools I work with confidently but recognize there are advanced features or optimization techniques I'm still exploring. Comfortable implementing solutions with occasional documentation checks.",
  junior:
    "Technologies I've used in projects but haven't had sufficient time to develop deep expertise. I understand core concepts but benefit from guidance on best practices.",
  newbie: "Recently added to my toolkit. I grasp the fundamentals but haven't had the occasion to dive-in yet.",
  tools: "Some of the tools I use daily",
  soft: "Soft skills I value and practice",
  languages: "Languages I can communicate in",
  certifications: "Certifications I've earned",
};

export default async function Home() {
  return (
    <main className="flex flex-col gap-2">
      <section className={cn(fadeIn, "animation-delay-100")}>
        <span className="text-lg pt-3 mt-4 font-light text-muted-foreground sm:text-xl">
          These are the skills I have acquired over the years, both in my professional career and personal projects.
          <br />
          <span className="font-semibold">This list is static and will be occasionally updated.</span>
        </span>
      </section>

      <hr className={cn("border-1 border-muted-foreground pt-2 pb-1", fadeIn, "animation-delay-200")} />

      <section className={cn(fadeIn, "animation-delay-300 flex flex-col items-center justify-center")}>
        <div className="flex gap-2">
          <ChevronDown className="text-muted-foreground animate-bounce" />
          <span className="text-sm text-muted-foreground mb-2">Click on a section to jump to it</span>
          <ChevronDown className="text-muted-foreground animate-bounce" />
        </div>

        <ul className="flex gap-2 items-center justify-between">
          {Object.keys(skills).map((skill, index) => (
            <a href={`#${skill}`} key={`link-${skill}`}>
              <li key={skill} className={cn("text-sm text-muted-foreground cursor-pointer hover:text-primary", index > 0 && "border-l-2 pl-2")}>
                {skill}
              </li>
            </a>
          ))}
        </ul>
      </section>

      <section className={cn(fadeIn, "animation-delay-400")}>
        <div className="flex flex-col gap-6 pt-4">
          {Object.entries(skills).map(([skill, items], skillIndex) => (
            <div
              id={skill}
              key={skill}
              className={cn("flex flex-col gap-2 border-t border-muted-foreground pt-4", fadeIn, `animation-delay-${500 + skillIndex * 100}`)}
            >
              <a href={`#${skill}`}>
                <h3 className="text-lg font-semibold capitalize flex items-center cursor-default">
                  <span className="text-2xl mr-2 text-center">#</span>
                  <span>{skill}</span>
                </h3>
              </a>
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
