import Link from "next/link";
import React from "react";

function Footer() {
  const links = [
    { href: "https://github.com/RodPaDev", label: "GitHub" },
    { href: "https://www.linkedin.com/in/rodpadev/", label: "Linkedin" },
    // { href: "https://ui.shadcn.com", label: "shadcn/ui" },
    // { href: "https://vercel.com", label: "Vercel" },
  ];

  return (
    <footer className="mb-8 mt-12 flex flex-col items-center justify-center text-sm leading-snug text-muted-foreground">
      <span>
      Visit me on&nbsp;
        {links.map((link, index) => (
          <React.Fragment key={link.href}>
            <Link href={link.href} target="_blank" rel="noopener noreferrer" className="underline">
              {link.label}
            </Link>
            {index < links.length - 1 ? index === links.length - 2 ? <span>&nbsp;and&nbsp;</span> : <span>,&nbsp;</span> : null}
          </React.Fragment>
        ))}
        {" 👋"}
      </span>
      <span className="mt-2 text-center">
        Built with{" "}
        <Link href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="underline">
          Next.js
        </Link>
        ,{" "}
        <Link href="https://hashnode.com/headless" target="_blank" rel="noopener noreferrer" className="underline">
          Hashnode
        </Link>
        , and{" "}
        <Link href="https://ui.shadcn.com" target="_blank" rel="noopener noreferrer" className="underline">
          shadcn/ui
        </Link>
        .
      </span>
    </footer>
  );
}

export default Footer;
