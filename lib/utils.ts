import clsx from 'clsx';

export function cn(...inputs: Array<string | false | undefined | null>) {
  return clsx(inputs);
}

export function formatDate(input: string, locale: string) {
  return new Intl.DateTimeFormat(locale === 'zh' ? 'zh-CN' : 'en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }).format(new Date(input));
}

export function toTitleCase(value: string) {
  return value
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

export function normalizeTag(tag: string) {
  return tag.trim().toLowerCase().replace(/\s+/g, '-');
}
