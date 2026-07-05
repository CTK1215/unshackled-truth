/** Format an ISO date (YYYY-MM-DD) as e.g. "June 18, 2026". */
export function formatDate(iso: string): string {
  // Parse as UTC to avoid off-by-one from local timezones.
  const [y, m, d] = iso.split("-").map(Number);
  const date = new Date(Date.UTC(y, (m ?? 1) - 1, d ?? 1));
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
