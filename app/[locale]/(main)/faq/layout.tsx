import { ErrorView } from '@/views/global/error/ErrorView';

// interface Props {
//   children: ReactNode;
// }

export default function Layout() {
  return <ErrorView code={404} />;
}
