import "@/styles/globals.css";

import { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";

import { MainProvider } from "@/components/providers/MainProvider";
import { MainLayout } from "@/components/templates/MainLayout";

import { cookies } from "next/headers";

import { cn } from "@/lib/utils";
import { THEME_LAYOUT } from "@/constants/keys";

const inter = Inter({ subsets: ["latin"], variable: "--font-primary" });

export const metadata: Metadata = {
  title: "Home",
  description: "",
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = async ({ children }: RootLayoutProps) => {
  const cookieStore = await cookies();
  const theme = cookieStore.get(THEME_LAYOUT)?.value || "";

  return (
    <html lang="en" className={theme}>
      <body
        className={cn(inter.variable, "bg-light-grey font-primary")}
        suppressHydrationWarning
      >
        <MainProvider>
          <MainLayout>
            <main>{children}</main>
          </MainLayout>
        </MainProvider>
      </body>
    </html>
  );
};

export default RootLayout;
