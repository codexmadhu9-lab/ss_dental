import { type ReactNode } from "react";

import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export function PageLayout({ children }: { children: ReactNode }) {
  return <><Navbar /><main className="pt-24">{children}</main><Footer /></>;
}
