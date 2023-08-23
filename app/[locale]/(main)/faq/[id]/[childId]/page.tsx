import { Suspense, lazy } from 'react';
import { Metadata } from 'next';
import { getTranslator, redirect } from 'next-intl/server';

import { LoadingView } from '@/views/global/loading/LoadingView';
import { faqData } from '@/views/faq/faqData';

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

  const isDataExist = faqData.find(data => data.id === id)?.items.find(item => item.id === childId);
  if (!isDataExist) {
    redirect('/faq');
  }

  return {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    title: t(`pages.${id}.${childId}`)
  };
}

export default async function Page({ params: { childId, id, locale } }: Props) {
  const MDXComponent = lazy(() =>
    import(`@/assets/faq/${id}/${childId}/${childId}-${locale}.mdx`).catch(() => redirect('/faq'))
  );

  return (
    <Suspense fallback={<LoadingView />}>
      <MDXComponent />
    </Suspense>
  );
}
