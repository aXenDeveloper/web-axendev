'use client';

import { ErrorView } from '@/views/global/error/ErrorView';

export default function Error() {
  return <ErrorView code={500} />;
}
