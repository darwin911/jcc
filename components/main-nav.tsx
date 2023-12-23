"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function MainNav() {
  return (
    <header className="bg-presidente">
      <NavigationMenu className="text-white mx-auto">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>About</NavigationMenuTrigger>
            <NavigationMenuContent className="flex flex-col">
              <NavigationMenuLink href="/#jcc-overview">
                JCC Overview
              </NavigationMenuLink>
              <NavigationMenuLink href="/#mission">Mission</NavigationMenuLink>
              <NavigationMenuLink href="/#director">
                Director
              </NavigationMenuLink>
              <NavigationMenuLink href="/#story">Story</NavigationMenuLink>
              <NavigationMenuLink href="/#board">Board</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <Link href="/#program" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Program
            </NavigationMenuLink>
          </Link>
          <Link href="/campaign" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Campaign
            </NavigationMenuLink>
          </Link>
          <Link href="/henn-campaign" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Henn Family Campaign
            </NavigationMenuLink>
          </Link>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Support</NavigationMenuTrigger>
            <NavigationMenuContent className="flex flex-col bg-indigo-900">
              <NavigationMenuLink href="/#volunteer">
                Volunteer
              </NavigationMenuLink>
              <NavigationMenuLink href="/#host-a-drive">
                Host a Drive
              </NavigationMenuLink>
              <NavigationMenuLink href="/#contribute">
                Contribute
              </NavigationMenuLink>
              <NavigationMenuLink href="/#sponsor">Sponsor</NavigationMenuLink>
              <NavigationMenuLink href="/#jobs">Jobs</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <Link href="/#media" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Media
            </NavigationMenuLink>
          </Link>
          <Link href="/host-a-sports-equiment-drive" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Host a Sports Equiment Drive
            </NavigationMenuLink>
          </Link>
          <Link href="/#contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contact
            </NavigationMenuLink>
          </Link>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
