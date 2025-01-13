'use client';

import { ThemeProvider } from "next-themes";

export default function Provider({ children }) {
  if (typeof window === "undefined") return null; // Avoid rendering on the server
  return (
    <ThemeProvider attribute="class" enableSystem defaultTheme="light">
      {children}
    </ThemeProvider>
  );
}
