/**
 * Escape user-provided text before embedding in emails or logs.
 */
export function sanitizePlainText(input: string): string {
  return input
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .replace(/[<>]/g, "")
    .trim();
}

export function sanitizeContactPayload<T extends Record<string, unknown>>(
  payload: T,
): T {
  const sanitized = { ...payload };
  for (const [key, value] of Object.entries(sanitized)) {
    if (typeof value === "string") {
      (sanitized as Record<string, unknown>)[key] = sanitizePlainText(value);
    }
  }
  return sanitized;
}
