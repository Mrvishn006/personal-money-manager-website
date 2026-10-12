import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock window.scrollTo in JSDOM environment
Object.defineProperty(window, 'scrollTo', {
  value: vi.fn(),
  writable: true,
});
