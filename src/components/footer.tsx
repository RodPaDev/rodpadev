import Link from "next/link";
import React from "react";

function Footer() {
  const links = [
    { href: "https://hashnode.com/headless", label: "GitHub" },
    { href: "https://nextjs.org", label: "Linkedin" },
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
        .
      </span>
    </footer>
  );
}

export default Footer;
