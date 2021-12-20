import { AppRoutes } from '@routes';

import { Header } from '../Header';

export function Layout() {
  return (
    <>
      <Header />
      <AppRoutes />
    </>
  );
}
