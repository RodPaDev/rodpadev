"use client";

import Link from "next/link";

import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { SortTypes } from "@/types/sort-types";
import { usePathname } from "next/navigation";

export function HeaderNav() {
  const pathname = usePathname();
  const isActive = (path: string, matchExact = true) => {
    const cleanPath = path.split("?")[0];

    if (matchExact) {
      return pathname === cleanPath;
    }
    return pathname.startsWith(cleanPath);
  };

  const blogSearchParams = new URLSearchParams();
  blogSearchParams.set("sort", SortTypes.Date);

  const qotdSearchParams = new URLSearchParams();
  qotdSearchParams.set("tags", "inspirational,famous-quotes");
  qotdSearchParams.set("limit", "1");

  const navs = [
    {
      href: "/",
      label: "home",
    },
    {
      href: "/showcase",
      label: "showcase",
    },
    {
      href: "/journey",
      label: "journey",
    },
    {
      href: "/skills",
      label: "skills",
    },
    {
      href: `/blog?${blogSearchParams.toString()}`,
      label: "blog",
      matchExact: false,
    },
  ];

  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-4">
        {navs.map((nav) => (
          <NavigationMenuItem key={nav.href}>
            <Link href={nav.href} className={cn("text-muted-foreground", isActive(nav.href, nav.matchExact) && "underline text-foreground")}>
              {nav.label}
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
