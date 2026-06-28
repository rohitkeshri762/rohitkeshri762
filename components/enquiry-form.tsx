'use client'

import { useRef, useState, type FormEvent } from 'react'
import { WHATSAPP_NUMBER, PACKAGES } from '@/lib/site'
import { MessageCircle, Check } from 'lucide-react'

export function EnquiryForm({
  defaultPackage,
  variant = 'light',
}: {
  defaultPackage?: string
  variant?: 'light' | 'dark'
}) {
  const formRef = useRef<HTMLFormElement>(null)
  const [sent, setSent] = useState(false)

  const dark = variant === 'dark'

  function buildMessage(data: FormData) {
    const lines = [
      'Namaste KedarFly, I would like to enquire about a pilgrimage.',
      `Name: ${data.get('name') || '-'}`,
      `Phone: ${data.get('phone') || '-'}`,
      `Email: ${data.get('email') || '-'}`,
      `Travel Date: ${data.get('date') || '-'}`,
      `Travellers: ${data.get('travellers') || '-'}`,
      `Package: ${data.get('package') || '-'}`,
      `Message: ${data.get('message') || '-'}`,
    ]
    return lines.join('\n')
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const text = encodeURIComponent(buildMessage(data))
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank')
    setSent(true)
  }

  function onWhatsApp() {
    if (!formRef.current) return
    const data = new FormData(formRef.current)
    const text = encodeURIComponent(buildMessage(data))
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank')
  }

  const labelCls = `mb-1.5 block font-num text-[11px] uppercase tracking-[0.15em] ${
    dark ? 'text-background/60' : 'text-muted-foreground'
  }`
  const fieldCls = `w-full rounded-lg border px-4 py-3 font-sans text-sm outline-none transition-colors focus:border-saffron ${
    dark
      ? 'border-background/20 bg-background/5 text-background placeholder:text-background/40'
      : 'border-border bg-card text-foreground placeholder:text-muted-foreground'
  }`

  return (
    <form ref={formRef} onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="name">
            Name
          </label>
          <input id="name" name="name" required className={fieldCls} placeholder="Your full name" />
        </div>
        <div>
          <label className={labelCls} htmlFor="phone">
            Phone
          </label>
          <input id="phone" name="phone" required className={fieldCls} placeholder="+91" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="email">
            Email
          </label>
          <input id="email" name="email" type="email" className={fieldCls} placeholder="you@email.com" />
        </div>
        <div>
          <label className={labelCls} htmlFor="date">
            Travel Date
          </label>
          <input id="date" name="date" type="date" className={fieldCls} />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="travellers">
            Travellers
          </label>
          <input
            id="travellers"
            name="travellers"
            type="number"
            min={1}
            defaultValue={2}
            className={fieldCls}
          />
        </div>
        <div>
          <label className={labelCls} htmlFor="package">
            Package
          </label>
          <select
            id="package"
            name="package"
            defaultValue={defaultPackage || ''}
            className={fieldCls}
          >
            <option value="">Select a journey</option>
            {PACKAGES.map((p) => (
              <option key={p.slug} value={p.title}>
                {p.title}
              </option>
            ))}
            <option value="Temple Tours">Temple Tours</option>
            <option value="Helicopter Assistance">Helicopter Assistance</option>
            <option value="Ritual Services">Ritual Services</option>
          </select>
        </div>
      </div>

      <div>
        <label className={labelCls} htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          className={fieldCls}
          placeholder="Tell us about your pilgrimage plans..."
        />
      </div>

      <div className="flex flex-col gap-3 pt-2 sm:flex-row">
        <button
          type="submit"
          data-cursor="Book"
          className="inline-flex flex-1 items-center justify-center rounded-full bg-saffron px-6 py-3.5 font-num text-xs uppercase tracking-[0.15em] text-primary-foreground transition-all hover:brightness-110"
        >
          {sent ? (
            <>
              <Check className="mr-2 h-4 w-4" /> Request Sent
            </>
          ) : (
            'Request Callback'
          )}
        </button>
        <button
          type="button"
          onClick={onWhatsApp}
          data-cursor="WhatsApp"
          className={`inline-flex flex-1 items-center justify-center rounded-full border px-6 py-3.5 font-num text-xs uppercase tracking-[0.15em] transition-colors ${
            dark
              ? 'border-background/30 text-background hover:bg-background/10'
              : 'border-primary text-primary hover:bg-primary hover:text-primary-foreground'
          }`}
        >
          <MessageCircle className="mr-2 h-4 w-4" />
          WhatsApp
        </button>
      </div>
    </form>
  )
}
