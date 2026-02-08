"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [hoverLogo, setHoverLogo] = useState(false);

  return (
    <header className="w-full px-12 flex items-center justify-center py-6">
      <nav className="flex items-center gap-24 text-lg font-medium">
        <div className="flex gap-8 font-arbutus">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </div>

        <Link href="/Login">
          <img
            src={hoverLogo ? "/Image/logo/battle.png" : "/Image/logo/white.png"}
            alt="Logo"
            className="w-40 h-auto object-contain transition-all duration-300 transform hover:scale-105"
            onMouseEnter={() => setHoverLogo(true)}
            onMouseLeave={() => setHoverLogo(false)}
          />
        </Link>

        <div className="flex gap-8 font-arbutus">
          <Link href="/service">Service</Link>
          <Link href="/style">Style</Link>
        </div>
      </nav>
    </header>
  );
}
