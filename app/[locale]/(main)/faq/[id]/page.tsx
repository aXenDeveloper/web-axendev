import { notFound } from 'next/navigation';
import { Suspense, lazy } from 'react';
import { Metadata } from 'next';
import { getTranslator } from 'next-intl/server';

import { LoadingView } from '@/views/global/loading/LoadingView';

interface Props {
  params: {
    id: string;
    locale: string;
  };
}

export async function generateMetadata({ params: { id, locale } }: Props): Promise<Metadata> {
  const t = await getTranslator(locale, 'faq');

  return {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    title: t(`pages.${id}`)
  };
}

export default async function Page({ params: { id, locale } }: Props) {
  const MDXComponent = lazy(() =>
    import(`@/assets/faq/${id}/${id}-${locale}.mdx`).catch(() => notFound())
  );

  return (
    <Suspense fallback={<LoadingView />}>
      <MDXComponent />
    </Suspense>
  );
}
