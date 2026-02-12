'use client';

import { useState } from 'react';
import { Button, Input } from '@/components/ui';
import { dictionary } from '@/lib/i18n';
import type { Locale } from '@/data/site';

export function ContactForm({ locale }: { locale: Locale }) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function onSubmit(formData: FormData) {
    setStatus('loading');

    const website = String(formData.get('website') || '');
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const message = String(formData.get('message') || '').trim();

    if (website) {
      setStatus('error');
      return;
    }

    if (!name || !email || !message) {
      setStatus('error');
      return;
    }

    const subject = encodeURIComponent(`[Chem Team] Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

    // GitHub Pages is static-only; use mailto as a no-backend submission fallback.
    window.location.href = `mailto:chem.team@example.com?subject=${subject}&body=${body}`;
    setStatus('success');
  }

  return (
    <form
      action={onSubmit}
      className="grid gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft"
      aria-label="Contact form"
    >
      <label className="grid gap-1 text-sm">
        Name
        <Input name="name" required />
      </label>

      <label className="grid gap-1 text-sm">
        Email
        <Input type="email" name="email" required />
      </label>

      <label className="grid gap-1 text-sm">
        Message
        <textarea
          name="message"
          rows={6}
          required
          className="w-full rounded-xl border border-border bg-card px-3 py-2 text-sm outline-none ring-accent focus:ring-2"
        />
      </label>

      <label className="hidden" aria-hidden>
        Website
        <Input name="website" tabIndex={-1} autoComplete="off" />
      </label>

      <Button type="submit" className="w-fit" aria-live="polite">
        {status === 'loading' ? '...' : dictionary[locale].submit}
      </Button>

      {status === 'success' ? (
        <p className="text-sm text-emerald-600">{dictionary[locale].sent}</p>
      ) : null}
      {status === 'error' ? (
        <p className="text-sm text-red-600">Failed to prepare message. Please check the form and try again.</p>
      ) : null}
    </form>
  );
}
