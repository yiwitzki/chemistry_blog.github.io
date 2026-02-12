import { Container } from '@/components/ui';
import { ContactForm } from '@/components/contact-form';
import { dictionary, getLocaleFromParams } from '@/lib/i18n';

export default function ContactPage({ params }: { params: { locale: string } }) {
  const locale = getLocaleFromParams(params.locale);

  return (
    <Container className="space-y-6 py-12">
      <section className="space-y-2">
        <h1 className="text-3xl font-bold">Contact</h1>
        <p className="text-foreground/75">{dictionary[locale].contactIntro}</p>
      </section>
      <ContactForm locale={locale} />
    </Container>
  );
}
