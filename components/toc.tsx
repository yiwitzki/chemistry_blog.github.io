import type { Heading } from '@/lib/content';

export function TOC({ headings }: { headings: Heading[] }) {
  if (!headings.length) return null;

  return (
    <details className="rounded-xl border border-border bg-card p-3 lg:open">
      <summary className="cursor-pointer text-sm font-semibold">Table of Contents</summary>
      <nav aria-label="Table of contents" className="mt-2">
        <ul className="space-y-2 text-sm">
          {headings.map((heading) => (
            <li key={heading.id} className={heading.level === 3 ? 'ml-3' : ''}>
              <a className="no-underline hover:text-accent" href={`#${heading.id}`}>
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </details>
  );
}
