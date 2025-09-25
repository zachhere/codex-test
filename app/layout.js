import './globals.css';

export const metadata = {
  title: 'ZACH — Fashion Forward',
  description: 'Discover bold silhouettes and elevated staples from ZACH, the modern luxury label.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
