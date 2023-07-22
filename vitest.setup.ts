import { afterEach, vi, beforeEach, Mock } from 'vitest';
import { cleanup } from '@testing-library/react';
import resizeObserverPolyfill from 'resize-observer-polyfill';
import {
  useRouter,
  useSearchParams,
  useParams,
  usePathname
} from 'next/navigation';

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});

global.ResizeObserver = resizeObserverPolyfill;

vi.mock('next/navigation', () => ({
  useRouter: vi.fn(),
  useSearchParams: vi.fn(),
  usePathname: vi.fn(),
  useParams: vi.fn()
}));

beforeEach(() => {
  (useSearchParams as Mock).mockImplementation(() => ({
    get: vi.fn(() => null)
  }));
  (useRouter as Mock).mockImplementation(() => ({
    push: vi.fn(() => null)
  }));
  (usePathname as Mock).mockImplementation(() => '/');
  (useParams as Mock).mockImplementation(() => ({
    locale: 'en'
  }));
});
