type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const globalStore = globalThis as typeof globalThis & {
  __iesRateLimit?: Map<string, RateLimitEntry>;
};

function getStore(): Map<string, RateLimitEntry> {
  if (!globalStore.__iesRateLimit) {
    globalStore.__iesRateLimit = new Map();
  }
  return globalStore.__iesRateLimit;
}

/**
 * Simple in-memory rate limiter for serverless/dev use.
 * Replace with Redis or edge rate limiting for multi-instance production.
 */
export function checkRateLimit(
  key: string,
  limit = 5,
  windowMs = 60_000,
): { allowed: boolean; remaining: number; retryAfterSec: number } {
  const store = getStore();
  const now = Date.now();
  const existing = store.get(key);

  if (!existing || existing.resetAt <= now) {
    store.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, remaining: limit - 1, retryAfterSec: 0 };
  }

  if (existing.count >= limit) {
    return {
      allowed: false,
      remaining: 0,
      retryAfterSec: Math.ceil((existing.resetAt - now) / 1000),
    };
  }

  existing.count += 1;
  store.set(key, existing);
  return {
    allowed: true,
    remaining: limit - existing.count,
    retryAfterSec: 0,
  };
}
