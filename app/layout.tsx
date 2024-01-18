import "@radix-ui/themes/styles.css";
import "./theme-config.css";
import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./NavBar";
import { Container, Theme } from "@radix-ui/themes";
import AuthProvider from "./auth/Provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Issue Tracker Application",
  description: "Log and manage software issues for small and medium teams...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <AuthProvider>
          <Theme
            appearance="light"
            accentColor="grass"
            grayColor="slate"
            panelBackground="solid"
            radius="none"
            scaling="110%"
          >
            {" "}
            <Container>
              <NavBar />
              <main className="p-5">{children}</main>
            </Container>
          </Theme>
        </AuthProvider>
      </body>
    </html>
  );
}
