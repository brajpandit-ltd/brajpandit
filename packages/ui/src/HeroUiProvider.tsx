"use client";

import { HeroUIProvider } from "@heroui/react";

function HeroUiProviders({ children }: { children: React.ReactNode }) {
  return <HeroUIProvider>{children}</HeroUIProvider>;
}

export default HeroUiProviders;
