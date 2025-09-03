import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import Link from "next/link"

export default function HomePage() {
  return (
    <>
      <header className="border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
          <Link href="/" className="font-semibold text-slate-900">
            {"<"}Harish.dev{"/>"}
          </Link>
          <nav className="flex items-center gap-4 text-sm text-slate-700">
            <a href="#about" className="hover:text-blue-600">
              About
            </a>
            <a href="#skills" className="hover:text-blue-600">
              Skills
            </a>
            <a href="#projects" className="hover:text-blue-600">
              Projects
            </a>
            <a href="#contact" className="hover:text-blue-600">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t">
        <div className="mx-auto max-w-5xl px-4 py-8 text-center text-sm text-slate-600">
          © {new Date().getFullYear()} B.Harish RAJ — Built with Next.js + shadcn/ui
        </div>
      </footer>
    </>
  )
}
