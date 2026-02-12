import { redirect } from 'next/navigation';
import { getLocaleFromParams } from '@/lib/i18n';
import { siteConfig } from '@/data/site';

export default function PublicationsRootPage({ params }: { params: { locale: string } }) {
  const locale = getLocaleFromParams(params.locale);
  redirect(`/${locale}/publications/category/${siteConfig.defaultCategory}`);
}
