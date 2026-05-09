import { isbot } from 'isbot';

// Cache the per-session result. `navigator.userAgent` is immutable for the
// life of the page, and `isbot()` runs a non-trivial regex match — caching
// avoids re-parsing the UA on every Turnstile pre-mint debounce or
// post-submit re-mint check. The SSR fallback (`navigator === undefined`)
// is intentionally NOT cached so that if the same module instance is
// somehow reused between SSR and CSR, the CSR path still reaches the real
// UA check on first call.
let cached: boolean | undefined;

/**
 * Detects whether the current user agent is a bot/crawler.
 * Used to prevent automatic API calls when bots render pages with JavaScript.
 */
export function isBot(): boolean {
  if (typeof navigator === 'undefined') {
    return false;
  }
  if (cached === undefined) {
    cached = isbot(navigator.userAgent);
  }
  return cached;
}
