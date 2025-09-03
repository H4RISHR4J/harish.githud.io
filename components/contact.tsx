import { Mail, Instagram } from "lucide-react"

export function Contact() {
  const email = "harishrajracer@icloud.com"
  const instagram = "dhe.mad.biker"

  return (
    <section id="contact" className="mx-auto max-w-5xl px-4 py-16">
      <div className="space-y-6">
        <header className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground">Contact</h2>
          <p className="text-muted-foreground">Reach me via email or Instagram.</p>
        </header>

        <div className="flex flex-col gap-3">
          {/* Email */}
          <a
            href={`mailto:${email}`}
            className="group inline-flex items-center gap-3 rounded-md px-3 py-2 ring-1 ring-border transition-colors hover:bg-muted"
            aria-label={`Email ${email}`}
          >
            <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary" aria-hidden="true" />
            <span className="text-sm text-foreground">{email}</span>
          </a>

          {/* Instagram */}
          <a
            href={`https://instagram.com/${instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-md px-3 py-2 ring-1 ring-border transition-colors hover:bg-muted"
            aria-label={`Open Instagram profile ${instagram}`}
          >
            <Instagram className="h-5 w-5 text-muted-foreground group-hover:text-primary" aria-hidden="true" />
            <span className="text-sm text-foreground">@{instagram}</span>
          </a>
        </div>
      </div>
    </section>
  )
}

// Export both ways so imports like `import Contact from ...` and `import { Contact } from ...` work.
export default Contact
