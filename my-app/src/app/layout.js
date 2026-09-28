import "./globals.css";

export const metadata = {
  title: "ANR SOURCEX - Premium Sourcing Partner",
  description: "Premium quality sourcing partner for fresh produce and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
