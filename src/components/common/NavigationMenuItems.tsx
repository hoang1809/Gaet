"use client";

import Link from "next/link";
import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const menuContent = [
  {
    label: "Trang chủ",
    href: "/",
    subContent: [
      {
        label: "Bản đồ",
        href: "/map",
      },
    ],
  },
  {
    label: "Giới thiệu",
    href: "#",
  },
  {
    label: "Lĩnh vực hoạt động",
    href: "/#linh-vuc-hoat-dong",
  },
  {
    label: "Tin tức",
    href: "#tin-tuc",
  },
  {
    label: "Pháo hoa",
    href: "#",
  },
  {
    label: "Thư viện",
    href: "#",
  },
  {
    label: "Liên hệ",
    href: "#",
  },
  {
    label: "Vietnam defence 2024",
    href: "#",
  },
];

export function NavigationMenuItems() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="space-x-8 justify-normal">
        {menuContent.map((item, index) => (
          <NavigationMenuItem key={index}>
            <NavigationMenuTrigger className="hover:bg-none p-0">
              <Link
                className="text-lg hover:text-primary font-normal"
                href={item.href}
              >
                {item.label}
              </Link>
            </NavigationMenuTrigger>
            {item.subContent && (
              <NavigationMenuContent>
                <ul>
                  {item.subContent?.map((subItem, index) => (
                    <ListItem
                      key={index}
                      href={subItem.href}
                      title={subItem.label}
                    />
                  ))}
                </ul>
              </NavigationMenuContent>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 w-fit min-w-24 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
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
