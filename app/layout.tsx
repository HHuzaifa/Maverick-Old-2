import Header from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "Maverick",
  description: "Personal Portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        <Header />
        {children}
      </body>
    </html>
  );
}
