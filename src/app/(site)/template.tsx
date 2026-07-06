/**
 * Wraps every site page so navigations get a soft fade-up transition.
 * (template.tsx re-mounts on each route change, unlike layout.tsx.)
 */
export default function SiteTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="page-transition">{children}</div>;
}
