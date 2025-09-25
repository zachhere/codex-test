import './globals.css';

export const metadata = {
  title: 'codex-test',
  description: 'Generated with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
