import { cn, fadeIn } from "@/lib/utils";

import { ArrowUpRightFromSquare, LockKeyholeIcon } from "lucide-react";

interface ShowcaseItem {
  title: string;
  description: string;
  link: string;
  tags?: string[];
  type: "personal" | "work";
}

const projects: ShowcaseItem[] = [
  {
    title: "Codename_Shops",
    description:
      "A B2B e-commerce platform that allows users to create and manage their own online stores. It includes features like product management, order processing, and customer relationship management via automations.",
    link: "secretive",
    tags: [
      "TypeScript",
      "Node.js",
      "Angular",
      "React (Next.JS)",
      "Express.JS",
      "Kubernetes",
      "AWS (EKS)",
      "MongoDB",
      "Terraform",
      "Kafka",
      "ArgoCD",
      "Redis",
    ],
    type: "work",
  },
  {
    title: "Tasktimer",
    description: "A lightweight, focused classroom timer PWA for teachers. Create sequential timed activities that automatically progress in order, perfect for managing lesson pacing.",
    link: "https://tasktimer.rodpa.dev",
    tags: ["TypeScript", "React", "Vite", "PWA", "TailwindCSS"],
    type: "personal",
  },
  {
    title: "Codename_Deals",
    description:
      "A B2B platform that tracks offline deal activity. Teams can visualize negotiations, flag issues, add ratings, and monitor progress over time. Fully integrated with Salesforce and HubSpot.",
    link: "secretive",
    tags: ["TypeScript", "Node.js", "Angular", "Express.JS", "Kubernetes", "AWS (EKS)", "MongoDB", "Terraform"],
    type: "work",
  },
  {
    title: "SecondSky Data",
    description:
      "An advanced agricultural data platform that delivers actionable insights and analytics for farmers and agribusinesses, powered by real-time field sensor data.",
    link: "https://secondsky.com/data/",
    tags: ["TypeScript", "Node.js", "React", "GraphQL", "AWS (Serverless Architecture + IoT)", "PostgreSQL", "Terraform", "Go"],
    type: "work",
  },
  {
    title: "Codename_Brain",
    description:
      "A high-performance learning management system (LMS) designed for academic use. Enables educators to create interactive, simulation-rich courses with support for quizzes, activities, and real-time feedback.",
    link: "secretive",
    tags: ["JavaScript", "Node.js", "React", "GraphQL", "AWS (Serverless Architecture)", "PostgreSQL", "Terraform"],
    type: "work",
  },
  {
    title: "Cssify",
    description:
      "A playful Go utility that converts images into pure HTML and CSS. An unconventional and visually creative way to render graphics directly in the browser.",
    link: "https://github.com/RodPaDev/cssify",
    tags: ["Go", "HTML", "CSS"],
    type: "personal",
  },
  {
    title: "GoPuby",
    description:
      "A minimalist terminal-based ePub reader built in Go. Lightweight, intuitive, and ideal for distraction-free reading directly from the command line.",
    link: "https://github.com/RodPaDev/gopuby",
    tags: ["Go", "Terminal", "ePub", "XML"],
    type: "personal",
  },
  {
    title: "aws-profiles",
    description:
      "A command-line utility for managing default AWS CLI profiles. Easily switch, add, or remove profiles with simple, intuitive commands.",
    link: "https://github.com/RodPaDev/aws-profiles",
    tags: ["TypeScript", "Node.js", "Commander"],
    type: "personal",
  },
];

export default async function Home() {
  return (
    <main className="flex flex-col gap-2">
      <section className={cn(fadeIn, "animation-delay-100")}>
        <span className="pt-3 mt-4 font-light text-muted-foreground">
          These are the projects I have worked on throughout my career, both in my professional life and personal projects.
        </span>
      </section>

      <hr className={cn("border-1 border-muted-foreground mt-4 mb-4", fadeIn, "animation-delay-200")} />
      <section className={cn(fadeIn, "animation-delay-400")}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              id={project.title}
              key={project.title}
              className={cn("flex flex-col gap-2  border-muted-foreground pt-4", fadeIn, `animation-delay-${500 + index * 100}`)}
            >
              <h3 className="text-lg font-semibold text-foreground flex items-center justify-between">
                {project.link !== "secretive" ? (
                  <a href={project.link} className="flex gap-2 items-center" target="_blank" rel="noopener noreferrer">
                    {project.title}
                    <ArrowUpRightFromSquare size={18} className="inline-block ml-1" />
                  </a>
                ) : (
                  <span className="cursor-default flex gap-2 items-center">
                    {project.title}
                    <LockKeyholeIcon size={18} className="inline-block ml-1" />
                  </span>
                )}
                {project.type === "work" && <span className="text-xs font-semibold text-muted-foreground bg-muted rounded-full px-2 py-1">Work</span>}
                {project.type === "personal" && (
                  <span className="text-xs font-semibold text-muted-foreground bg-muted rounded-full px-2 py-1">Personal</span>
                )}
              </h3>
              <p className="text-sm text-muted-foreground">{project.description}</p>
              <p className="text-xs text-muted-foreground">{project.tags?.join(", ")}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
