import { ReactNode } from 'react';
import { WrapperFaq } from '@/views/faq/wrapper/WrapperFaq';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return <WrapperFaq>{children}</WrapperFaq>;
}
