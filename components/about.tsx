import { Instagram, Mail } from "lucide-react"

export function About() {
  return (
    <section id="about" className="border-t">
      <div className="mx-auto max-w-5xl px-4 py-14">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[160px,1fr]">
          <div className="flex md:block items-start"></div>

          <div className="space-y-4">
            <div className="grid gap-6 sm:grid-cols-5 sm:gap-8">
              <div className="sm:col-span-2">
                <div className="flex items-start gap-4">
                  <div className="h-16 w-16 overflow-hidden rounded-full ring-1 ring-border">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-09-03%20at%2017.22.19_1bfb3bac.jpg-wcoIBOjuM8WVLv4vjnwxfsG5mBqfNv.jpeg"
                      alt="Profile avatar"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="text-balance text-xl font-semibold">About Me</h2>
                    <p className="mt-2 text-sm text-muted-foreground">A quick intro</p>
                    {/* Add a 'Web Developer' topic badge below the subtitle */}
                    <div className="mt-3 flex flex-wrap gap-2" aria-label="Topics">
                      <span className="inline-flex items-center rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-foreground">
                        Web Developer
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sm:col-span-3">
                <div className="prose prose-sm dark:prose-invert max-w-none">
                  <p>
                    I’m a developer specializing in building high-quality, scalable web applications. I enjoy working
                    across the stack, collaborating with teams, and shipping features that users love.
                  </p>
                  <p>
                    My focus areas include performance, accessibility, and clean, maintainable code. I’m always learning
                    and exploring new technologies to deliver better outcomes.
                  </p>
                </div>

                {/* Contact links with icons */}
                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href="mailto:harishrajracer@icloud.com"
                    className="group inline-flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors"
                    aria-label="Email Harish Raj at harishrajracer@icloud.com"
                  >
                    <Mail className="h-4 w-4 text-primary/80 group-hover:text-primary" aria-hidden="true" />
                    <span className="underline decoration-muted-foreground/40 underline-offset-4 group-hover:decoration-primary/60">
                      harishrajracer@icloud.com
                    </span>
                  </a>

                  <a
                    href="https://instagram.com/dhe.mad.biker"
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors"
                    aria-label="Instagram profile @dhe.mad.biker"
                  >
                    <Instagram className="h-5 w-5" aria-hidden="true" />
                    <span className="underline decoration-muted-foreground/40 underline-offset-4 group-hover:decoration-primary/60">
                      @dhe.mad.biker
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
