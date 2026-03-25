'use client';

import { useRouter } from 'next/navigation';
import { Select } from '@/components/ui';
import type { Locale } from '@/data/site';

const quickNavItems = {
  zh: [
    { href: '/competition', label: '化学竞赛（CCC/UKChO）' },
    { href: '/curriculum', label: '国家课程' },
    { href: '/ap-chemistry', label: 'AP化学' },
    { href: '/organic-chemistry', label: '有机化学' }
  ],
  en: [
    { href: '/competition', label: 'Competition (CCC/UKChO)' },
    { href: '/curriculum', label: 'National Curriculum' },
    { href: '/ap-chemistry', label: 'AP Chemistry' },
    { href: '/organic-chemistry', label: 'Organic Chemistry' }
  ]
} as const;

export function HomeQuickNav({ locale }: { locale: Locale }) {
  const router = useRouter();
  const items = quickNavItems[locale];

  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-border/80 bg-white/85 p-4 shadow-soft md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-sm font-semibold text-foreground">{locale === 'zh' ? '学习专区快捷入口' : 'Quick Study Access'}</p>
        <p className="mt-1 text-sm text-foreground/70">
          {locale === 'zh'
            ? '下拉即可直达国家课程、AP化学和有机化学页面。'
            : 'Use the dropdown to jump to the national curriculum, AP Chemistry, or Organic Chemistry.'}
        </p>
      </div>

      <div className="flex w-full flex-col gap-3 md:w-auto md:min-w-[320px]">
        <Select
          defaultValue=""
          onChange={(event) => {
            const value = event.target.value;
            if (value) router.push(`/${locale}${value}`);
          }}
        >
          <option value="">{locale === 'zh' ? '请选择要进入的栏目' : 'Select a section'}</option>
          {items.map((item) => (
            <option key={item.href} value={item.href}>
              {item.label}
            </option>
          ))}
        </Select>
      </div>
    </div>
  );
}
