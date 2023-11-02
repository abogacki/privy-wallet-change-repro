"use client";
import { Content } from "@/components/Content";
import { Providers } from "@/components/Providers";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Providers>
        <Content />
      </Providers>
    </main>
  );
}
