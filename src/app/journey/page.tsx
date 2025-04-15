"use client";

import { Button } from "@/components/ui/button";
import { cn, fadeIn } from "@/lib/utils";
import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";
import { DateTime } from "luxon";
import { useState } from "react";

interface JourneyItem {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  achievements: string[];
  skills?: string[];
}

const experiences: JourneyItem[] = [
  {
    title: "Fullstack Engineer II",
    company: "Altar.io",
    startDate: "01/2025",
    endDate: "Present",
    achievements: [
      "Architected and developed a lead tracking software integrated with Salesforce and Hubspot",
      "Discovered lost infrastrcture and rebuilt it using Terraform and AWS CDK",
      "Implemented CI/CD pipelines using GitHub Actions",
    ],
    skills: ["TypeScript", "Node.js", "Angular", "Docker", "Express.Js", "AWS", "MongoDB", "Terraform", "GitHub Actions", "Kafka"],
  },
  {
    title: "Intentional Career Break",
    company: "Self-Directed Projects",
    startDate: "07/2024",
    endDate: "01/2025",
    achievements: [
      "Took a break to recharge and explore new opportunities.",
      "Renovated my home and traveled to new places.",
      "Worked on personal projects and learned new technologies.",
      "Participated and won 3rd place in my very first game jam, creating a game in 72 hours.",
      "Reverse engineered a watercooler LED display to show the current temperature and humidity.",
      "Created a PWA for teachers to manage their classroom timers.",
      "Built a very simple webpage for my local parish to manage their events.",
    ],
    skills: ["Godot", "Go", "Redis", "Rust", "Turso", "SQLite", "AWS Solutions Architect"],
  },
  {
    title: "Fullstack Engineer",
    company: "Awesome Source (formerly Virtual Academies)",
    startDate: "04/2022",
    endDate: "07/2024",
    achievements: [
      "Led the development of a customizable and draggable dashboard, displaying over 50 sensor readings for real-time and historical analysis.",
      "Rewrote Databoards, a browser-based tool to support visualizing up to 15,000 data points of sensor history, allowing for location and date range comparison.",
      "Collaborated on a diagnostics API for sensor and cellular provider troubleshooting, enabling remote diagnostics.",
      "Optimized back-end efficiency by creating libraries for database operations and a GraphQL resolver, alongside Vite Plugins that reduced build sizes by 20% and sped up server startup by 40 seconds.",
      "Architected and implemented APIs for capturing critical data, including fertigation and historical weather information, from diverse sources.",
      "Deployed a customized Webiny CMS instance on AWS and developed a NextJs-powered Supportsite for our User-faced tutorials and articles.",
    ],
    skills: ["TypeScript", "Node.js", "React (Next.JS)", "GraphQL", "AWS (Serverless Architecture + IoT)", "PostgreSQL", "Terraform", "Go"],
  },
  {
    title: "Javscript Developer",
    company: "Virtual Academies",
    startDate: "01/2021",
    endDate: "04/2022",
    achievements: [
      "Built a comprehensive greenhouse management system, overseeing the entire supply chain from crop planning to product sales.",
      "Architected and developed a customizable multi-tenant system for an enterprise learning platform with custom domain provisioning.",
      "Built a simulation course builder for a learning platform, enabling instructors to create and manage simulation courses.",
    ],
    skills: ["React", "Webpack", "Node.js", "Express.Js", "GraphQL", "PostgreSQL", "Docker"],
  },
  {
    title: "Software Engineer",
    company: "Freelancer",
    startDate: "06/2020",
    endDate: "01/2021",
    achievements: ["Developed an in-browser Game Editor for an upcoming Runescape-like game."],
    skills: ["JavaScript", "HTML", "CSS", "Canvas API", "WebGL"],
  },
  {
    title: "Core Curriculum Team Lead",
    company: "BloomTech (formerly Lambda School)",
    startDate: "08/2019",
    endDate: "11/2020",
    achievements: [
      "Led 4 different teams to successfully build and deploy projects within the deadlines & MVP requirements for our Lambda Labs.",
      "Helped several students get back on track with a live 5-day intensive Javascript & progamming fundamentals course",
    ],
    skills: ["JavaScript", "React", "Node.js", "Express.Js", "Docker", "Python", "Flask", "PostgreSQL"],
  },
];

export default function Journey() {
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");

  const currentExperience = experiences.find((experience) => experience.endDate === "Present");

  const sortedExperiences = [...experiences].sort((a, b) => {
    // Parse dates using Luxon
    const parseDate = (dateStr: string) => {
      if (dateStr === "Present") return DateTime.now();

      const [month, year] = dateStr.split("/");
      return DateTime.fromObject({
        month: parseInt(month),
        year: parseInt(year),
      });
    };

    const dateA = parseDate(a.endDate);
    const dateB = parseDate(b.endDate);

    // Compare dates
    if (sortDirection === "desc") {
      return dateB.valueOf() - dateA.valueOf();
    } else {
      return dateA.valueOf() - dateB.valueOf();
    }
  });

  const toggleSort = () => {
    setSortDirection(sortDirection === "desc" ? "asc" : "desc");
  };

  const formatDate = (dateString: string) => {
    if (dateString === "Present") return "Present";

    const [month, year] = dateString.split("/");
    return DateTime.fromObject({
      month: parseInt(month),
      year: parseInt(year),
    }).toFormat("MMM yyyy");
  };

  return (
    <main className="flex flex-col gap-2">
      <section className={cn(fadeIn, "animation-delay-100")}>
        <div className="flex justify-between items-center">
          <span className="font-light text-muted-foreground">My tech journey so far.</span>
          <Button variant="outline" size="sm" onClick={toggleSort} className={cn(fadeIn, "animation-delay-200")}>
            {sortDirection === "desc" ? (
              <span className="flex items-center gap-2">
                Newest First <ArrowDownIcon size={16} />
              </span>
            ) : (
              <span className="flex items-center gap-2">
                Oldest First <ArrowUpIcon size={16} />
              </span>
            )}
          </Button>
        </div>
      </section>

      <hr className={cn("border-1 border-muted-foreground mt-4 mb-4", fadeIn, "animation-delay-200")} />

      <section className={cn(fadeIn, "animation-delay-400", "relative")}>
        {/* Timeline line */}
        <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-border mt-2 ml-2.5 md:ml-4"></div>

        {/* Timeline items */}
        <div className="flex flex-col gap-8 ml-6 md:ml-10">
          {sortedExperiences.map((experience, index) => (
            <div key={`${experience.company}-${experience.title}`} className={cn("relative", fadeIn, `animation-delay-${500 + index * 100}`)}>
              {/* Timeline dot */}
              <div
                className={cn(
                  experience.title === currentExperience?.title ? "bg-primary" : "bg-muted-foreground",
                  "absolute -left-5 md:-left-7 mt-2 w-3 h-3 rounded-full",
                )}
              ></div>

              {/* Content */}
              <div className="flex flex-col gap-2">
                <div className="flex flex-col md:flex-row md:justify-between">
                  <h3 className="text-lg font-semibold text-foreground">{experience.title}</h3>
                  <span className="text-sm text-muted-foreground">
                    {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
                  </span>
                </div>

                <h4 className="text-md font-medium text-foreground">{experience.company}</h4>

                <ul className="list-disc ml-5 text-sm text-muted-foreground">
                  {experience.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>

                {experience.skills && <p className="text-xs text-muted-foreground mt-1">Skills: {experience.skills.join(", ")}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
