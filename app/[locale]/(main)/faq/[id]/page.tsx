import { notFound } from 'next/navigation';
import { Suspense, lazy } from 'react';

import { LoadingView } from '@/views/global/loading/LoadingView';

interface Props {
  params: {
    id: string;
    locale: string;
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
