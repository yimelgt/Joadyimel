'use client'
import { SectionReveal } from '../shared/SectionReveal'
import { GlassCard } from '../shared/GlassCard'
import { SectionTitle } from '../shared/SectionTitle'
import { personalInfo } from '../../data/content'

export default function ContactSection() {
  const { email, phone, social } = personalInfo

  return (
    <section id="contact" className="relative px-6 py-24 md:py-32 max-w-7xl mx-auto">
      <SectionReveal>
        <SectionTitle
          number="06"
          title="Get in Touch"
          subtitle="Have a project in mind or just want to chat? I'd love to hear from you."
        />
      </SectionReveal>

      <SectionReveal>
        <GlassCard className="max-w-3xl mx-auto p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-10 md:gap-16">
            {/* Contact Info */}
            <div className="flex-1 space-y-8">
              <div>
                <p className="text-xs font-mono text-muted tracking-widest uppercase mb-2">Email</p>
                <a
                  href={`mailto:${email}`}
                  className="text-heading text-lg font-medium hover:text-mint transition-colors duration-300"
                >
                  {email}
                </a>
              </div>

              <div>
                <p className="text-xs font-mono text-muted tracking-widest uppercase mb-2">Phone</p>
                <p className="text-heading text-lg font-medium">{phone}</p>
              </div>

              <div>
                <p className="text-xs font-mono text-muted tracking-widest uppercase mb-2">LinkedIn</p>
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-heading text-lg font-medium hover:text-mint transition-colors duration-300 inline-flex items-center gap-2"
                >
                  /in/yimelgt
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              <div className="flex gap-4 pt-4">
                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-mint/10 border border-mint/20 text-mint font-medium text-sm tracking-wider uppercase hover:bg-mint/20 transition-all duration-300"
                >
                  Send email
                </a>
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-heading font-medium text-sm tracking-wider uppercase hover:border-mint/30 hover:text-mint transition-all duration-300"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Closing Quote */}
            <div className="flex-1 flex items-center">
              <div className="border-l-2 border-mint/30 pl-6">
                <p className="text-2xl md:text-3xl font-bold text-heading leading-tight">
                  Let&apos;s build
                  <br />
                  something
                  <br />
                  <span className="text-mint">remarkable.</span>
                </p>
                <p className="text-body mt-4 text-sm leading-relaxed">
                  Every project starts with a conversation. Reach out and let&apos;s explore what we can create together.
                </p>
              </div>
            </div>
          </div>
        </GlassCard>
      </SectionReveal>
    </section>
  )
}
