import Image from "next/image";
import Link from "next/link";
import "styles/globals.css"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div className="text-center bg-gray-800 p-8">
        <Link href="/">
          <h1 className="text-3xl text-white font-bold">Georgi&rsquo;s Blog</h1>
        </Link>
        <p className="text-slate-300">Welcome to my blog</p>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className="border-t border-slate-400 mt-12 py-6 text-center text-slate-400">
        <h3>Developed by Georgi</h3>
      </div>
    </footer>
  );

  return (
    <html>
      <head />
      <body className="dark:bg-gray-900">
        {header}
        <div className="mx-auto mt-6 max-w-3xl px-6">
          {children}
        </div>
        {footer}
      </body>
    </html>
  );
}