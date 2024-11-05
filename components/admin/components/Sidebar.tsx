"use client";
import React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

const Sidebar: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <aside
      className={`w-64 h-full p-6 ${
        theme === "light" ? "bg-gray-200 text-black" : "bg-zinc-900"
      }`}
    >
      <h2 className="text-2xl font-bold mb-8">PB Census</h2>
      <nav className="space-y-4">
        <Link href="/" legacyBehavior>
          <a className="block px-4 py-2 hover:bg-gray-700 rounded">Dashboard</a>
        </Link>
        <Link href="/landing-page/news" legacyBehavior>
          <a className="block px-4 py-2 hover:bg-gray-700 rounded">News</a>
        </Link>
        <Link href="/family-profiles" legacyBehavior>
          <a className="block px-4 py-2 hover:bg-gray-700 rounded">
            Family Profiles
          </a>
        </Link>
        <Link href="/protected/graph" legacyBehavior>
          <a className="block px-4 py-2 hover:bg-gray-700 rounded">
            Census Graph
          </a>
        </Link>
        <Link href="/marketing" legacyBehavior>
          <a className="block px-4 py-2 hover:bg-gray-700 rounded">Marketing</a>
        </Link>
        <Link href="/users" legacyBehavior>
          <a className="block px-4 py-2 hover:bg-gray-700 rounded">Users</a>
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
