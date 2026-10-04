/**
 * Minimal in-memory rate limiter.
 *
 * LIMITATION (documented, not hidden): Vercel serverless functions are
 * stateless and can run as multiple concurrent instances, so this map is
 * NOT shared across instances or regions and resets on cold start. It stops
 * basic repeat-submission abuse from a single warm instance, but it is not
 * a substitute for a real distributed limiter.
 *
 * For production-grade protection, replace this with Upstash Redis
 * (@upstash/ratelimit) or Vercel Firewall rate limiting — both documented
 * in README.md.
 */

type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();

const WINDOW_MS = 60_000; // 1 minute
const MAX_REQUESTS = 5; // per IP per window

export function checkRateLimit(identifier: string): { allowed: boolean; retryAfterSeconds?: number } {
  const now = Date.now();
  const bucket = buckets.get(identifier);

  if (!bucket || now > bucket.resetAt) {
    buckets.set(identifier, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true };
  }

  if (bucket.count >= MAX_REQUESTS) {
    return { allowed: false, retryAfterSeconds: Math.ceil((bucket.resetAt - now) / 1000) };
  }

  bucket.count += 1;
  return { allowed: true };
}

// Periodically clean up old buckets so the map doesn't grow unbounded
// within a single long-lived instance.
if (typeof setInterval !== "undefined") {
  setInterval(() => {
    const now = Date.now();
    for (const [key, bucket] of buckets) {
      if (now > bucket.resetAt) buckets.delete(key);
    }
  }, 5 * 60_000);
}
