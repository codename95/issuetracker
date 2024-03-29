"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { BsBugFill } from "react-icons/bs";
import classNames from "classnames";
import { useSession } from "next-auth/react";
import { Avatar, Box, DropdownMenu, Flex, Text } from "@radix-ui/themes";

const NavBar = () => {
  var currentPath = usePathname();

  const { status, data: session } = useSession();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues/list" },
  ];
  return (
    <nav className="border-b mb-5 px-5 py-3">
      <Flex justify="between">
        <Flex align="center" gap="3">
          {" "}
          <Link href="/">
            <BsBugFill />
          </Link>
          <ul className="flex space-x-6">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  className={classNames({
                    "text-zinc-900": link.href === currentPath,
                    "text-zinc-500": link.href !== currentPath,
                    "hover:text-zinc-800 transition-colors": true,
                  })}
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </Flex>

        <Box>
          {status === "authenticated" && (
            //
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <Avatar
                  size="2"
                  radius="full"
                  className="cursor-pointer"
                  src={session.user!.image!}
                  fallback="?" referrerPolicy="no-referrer"
                />
              </DropdownMenu.Trigger>
              <DropdownMenu.Content>
                <DropdownMenu.Label>
                  <Text size="2"> {session.user!.email}</Text>
                </DropdownMenu.Label>
                <DropdownMenu.Item>
                  <Link href="/api/auth/signout">Log out</Link>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          )}
          {status === "unauthenticated" && (
            <Link href="/api/auth/signin">Login</Link>
          )}
        </Box>
      </Flex>
    </nav>
  );
};

export default NavBar;
