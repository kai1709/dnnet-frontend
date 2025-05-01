import { ReactNode } from "react";

import { cn } from "@/lib/utils";
import Header from "@/components/components/Header";

interface MainLayoutProps {
  children: ReactNode;
  className?: string;
}

// This is the place responsible for wrapping your app.
// Add here components like Footer, Nav etc.
export const MainLayout = ({ children, className }: MainLayoutProps) => {
  return (
    <div className={cn("", className)}>
      <div className="bg-main-background mx-auto min-h-screen w-full max-w-[1280px]">
        {/* <ThemeSwitcher /> */}
        <Header />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};

{
  /* <header className="bg-slate-900 p-4">
        <ul className="flex items-center gap-10 text-gray-50">
          {links.map(({ slug, label }) => (
            <li key={slug}>
              <Link href={slug} className="inline-block p-2 transition-colors hover:text-green-300">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </header> */
}
