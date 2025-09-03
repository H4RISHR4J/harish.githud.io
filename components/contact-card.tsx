"use client"

import { useState } from "react"
import { CardContent } from "@/components/ui/card"
import { Copy, Mail, Instagram } from "lucide-react"

const ContactCard = () => {
  const EMAIL = "harishrajracer@icloud.com" // Replace with your email
  const SUBJECT = "Hello from your website" // Replace with your subject
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <CardContent className="grid gap-4">
      <div className="flex flex-wrap items-center gap-3">
        {/* copy email */}
        <button variant="outline" onClick={copyEmail} className="gap-2 bg-transparent">
          <Copy className="h-4 w-4" />
          {copied ? "Copied!" : "Copy Email"}
        </button>
        {/* email button */}
        <button asChild className="gap-2 bg-blue-600 hover:bg-blue-700">
          <a href={`mailto:${EMAIL}?subject=${encodeURIComponent(SUBJECT)}`}>
            <Mail className="h-4 w-4" />
            Email Me
          </a>
        </button>
        {/* Instagram button */}
        <button asChild variant="outline" className="gap-2 bg-transparent">
          <a
            href="https://instagram.com/dhe.mad.biker"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Instagram profile @dhe.mad.biker in a new tab"
          >
            <Instagram className="h-4 w-4" />
            Instagram
          </a>
        </button>
      </div>
    </CardContent>
  )
}

export default ContactCard
