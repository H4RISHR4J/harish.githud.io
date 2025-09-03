import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

type Project = {
  title: string
  description: string
  imageQuery: string
  tech: string[]
  href?: string
  repo?: string
}

const projects: Project[] = [
  {
    title: "Responsive Portfolio",
    description: "A fast, accessible personal portfolio built with Next.js and Tailwind.",
    imageQuery: "portfolio%20website%20screenshot",
    tech: ["Next.js", "Tailwind", "TypeScript"],
    href: "#",
    repo: "#",
  },
  {
    title: "Crypto Price Tracker",
    description: "Simple dashboard fetching and charting crypto prices with client-side caching.",
    imageQuery: "crypto%20dashboard%20ui",
    tech: ["React", "SWR", "Recharts"],
    href: "#",
    repo: "#",
  },
  {
    title: "Game Highlights Reels",
    description: "Landing page to showcase gaming reels and embed short-form videos.",
    imageQuery: "video%20gallery%20ui",
    tech: ["Next.js", "shadcn/ui"],
    href: "#",
  },
]

export function Projects() {
  return (
    <section id="projects" className="border-t">
      <div className="mx-auto max-w-5xl px-4 py-14">
        <div className="flex items-end justify-between">
          <h2 className="text-xl font-semibold text-slate-900">Projects</h2>
          <p className="text-sm text-slate-600">Selected work — replace with your real projects</p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <Card key={p.title} className="overflow-hidden shadow-none">
              <div className="relative h-40 w-full">
                <Image
                  src={`/abstract-geometric-shapes.png?height=200&width=600&query=${p.imageQuery}`}
                  alt={`${p.title} preview`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{p.title}</CardTitle>
                <CardDescription>{p.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <Badge key={t} variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200">
                      {t}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  {p.href && (
                    <a href={p.href}>
                      <Button className="bg-blue-600 hover:bg-blue-700">Live</Button>
                    </a>
                  )}
                  {p.repo && (
                    <a href={p.repo}>
                      <Button variant="outline">Code</Button>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
