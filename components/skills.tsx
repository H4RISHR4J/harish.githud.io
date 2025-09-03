import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skills = {
  Core: ["HTML", "CSS", "JavaScript (ES6+)", "TypeScript"],
  Frontend: ["React", "Next.js", "Tailwind CSS", "shadcn/ui"],
  Tools: ["Git & GitHub", "VS Code", "Figma (basics)"],
  Extras: ["Python (basics)", "SEO (basics)"],
}

export function Skills() {
  return (
    <section id="skills" className="border-t bg-slate-50">
      <div className="mx-auto max-w-5xl px-4 py-14 space-y-8">
        <h2 className="text-xl font-semibold text-slate-900">Skills</h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {Object.entries(skills).map(([group, list]) => (
            <Card key={group} className="shadow-none">
              <CardHeader className="pb-3">
                <CardTitle className="text-base text-slate-800">{group}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {list.map((item) => (
                  <Badge
                    key={item}
                    variant="secondary"
                    className="bg-white border text-slate-700 hover:bg-amber-50 hover:border-amber-300"
                  >
                    {item}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
