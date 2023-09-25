'use client';

import { ErrorView } from '@/views/global/error/ErrorView';

export default function NotFoundPage() {
  return <ErrorView code={404} />;
}
