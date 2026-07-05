import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

/** Layout for the public marketing site — everything except /studio. */
export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
