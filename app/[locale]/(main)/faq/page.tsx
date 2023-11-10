import { getTranslations } from 'next-intl/server';
import { Suspense, lazy } from 'react';
import { notFound } from 'next/navigation';

import { LoadingView } from '@/views/global/loading/LoadingView';

interface Props {
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslations({ locale, namespace: 'nav' });

  return {
    title: t('faq')
  };
}

export default function Page({ params: { locale } }: Props) {
  const MDXComponent = lazy(() =>
    import(`@/assets/faq/welcome/welcome-${locale}.mdx`).catch(() => notFound())
  );

  return (
    <Suspense fallback={<LoadingView />}>
      <MDXComponent />
    </Suspense>
  );
}
