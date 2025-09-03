"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
        <div className="flex flex-col items-start gap-6 sm:gap-8">
          <div className="flex items-center gap-4">
            
            <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
              Open to freelance and internships
            </span>
          </div>

          <h1 className="text-pretty text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
            Hi, I’m <span className="text-blue-600">B.Harish RAJ</span> — aspiring developer
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-slate-600">
            📚 Student | 📈 Trader | 🎮 Gamer | 🎥 Reel Creator. I build clean, responsive web experiences while
            learning, earning, and having fun. Focused on modern JavaScript, React, and Next.js.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-3">
            <a href="#projects">
              <Button className="bg-blue-600 hover:bg-blue-700">View Projects</Button>
            </a>
            <a href="#contact">
              <Button variant="outline" className="border-amber-500 text-amber-700 hover:bg-amber-50 bg-transparent">
                Contact Me
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
