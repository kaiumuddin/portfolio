import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Welcome to my portfolio, where I showcase my expertise in web development, leveraging a powerful tech stack that includes React, Next.js, and TypeScript. By utilizing these cutting-edge technologies, I create dynamic and engaging user interfaces that deliver exceptional user experiences. To enhance the visual appeal of my projects, I harness the flexibility of Tailwind CSS for stylish and responsive designs.In my pursuit of excellence, I have integrated essential tools like ESLint, Prettier, Husky, and lint-staged into my development environment. These tools ensure high code quality, consistent formatting, and a smooth development process, enabling me to focus on delivering top-notch solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
