"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components = [
  // {
  //   title: "About us",
  //   href: "/aboutus",
  //   description: "",
  // },
  {
    title: "Team",
    href: "/team",
    description: "",
  },
  {
    title: "Projects",
    href: "/projects",
    description: "",
  },
  {
    title: "Apply",
    href: "/apply",
    description: "",
  },
];

export function Navigbar() {
  return (
    <nav className="flex justify-center w-full bg-white dark:bg-gray-900 py-4">
      <NavigationMenu>
        <NavigationMenuList className="flex sm:space-x-6">
          {/* Home Section */}
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          {/* GeoAI Section */}
          <NavigationMenuItem>
            <Link href="/geoai" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Bindu
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          {/* Contact Us Section */}
          <NavigationMenuItem>
            <Link href="/contact" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contact us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          {/* Company Section */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Company</NavigationMenuTrigger>
            <NavigationMenuContent className="flex justify-center z-50">
              <ul className="grid w-screen max-w-[500px] gap-3 p-4 md:grid-cols-2 lg:w-[600px]">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {/* {component.description} */}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}


const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
