import { getTranslator } from 'next-intl/server';

interface MetadataProps {
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params: { locale } }: MetadataProps) {
  const t = await getTranslator(locale, 'nav');

  return {
    title: t('faq')
  };
}

export default function Page() {
  return <div>FAQ</div>;
}
