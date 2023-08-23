import { Suspense, lazy } from 'react';
import { Metadata } from 'next';
import { getTranslator, redirect } from 'next-intl/server';

import { LoadingView } from '@/views/global/loading/LoadingView';
import { faqData } from '@/views/faq/faqData';

interface Props {
  params: {
    id: string;
    locale: string;
  };
}

export async function generateMetadata({ params: { id, locale } }: Props): Promise<Metadata> {
  const t = await getTranslator(locale, 'faq');

  const isDataExist = faqData
    .map(data => data.items)
    .flat()
    .find(item => item.id === id);
  if (!isDataExist) {
    redirect('/faq');
  }

  return {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    title: t(`pages.global.${id}`)
  };
}

export default async function Page({ params: { id, locale } }: Props) {
  const MDXComponent = lazy(() =>
    import(`@/assets/faq/${id}/${id}-${locale}.mdx`).catch(() => redirect('/faq'))
  );

  return (
    <Suspense fallback={<LoadingView />}>
      <MDXComponent />
    </Suspense>
  );
}
