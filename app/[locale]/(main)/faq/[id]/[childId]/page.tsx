import { notFound } from 'next/navigation';
import { Suspense, lazy } from 'react';
import { Metadata } from 'next';
import { getTranslator } from 'next-intl/server';

import { LoadingView } from '@/views/global/loading/LoadingView';

interface Props {
  params: {
    childId: string;
    id: string;
    locale: string;
  };
}

export async function generateMetadata({
  params: { childId, id, locale }
}: Props): Promise<Metadata> {
  const t = await getTranslator(locale, 'faq');

  return {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    title: t(`pages.${id}_pages.${childId}`)
  };
}

export default async function Page({ params: { childId, id, locale } }: Props) {
  const MDXComponent = lazy(() =>
    import(`@/assets/faq/${id}/${childId}/${childId}-${locale}.mdx`).catch(() => notFound())
  );

  return (
    <Suspense fallback={<LoadingView />}>
      <MDXComponent />
    </Suspense>
  );
}
