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
      <body className="bg-black">
        <div className="background-blobs">
          <div className="blob-1"></div>
          <div className="blob-2"></div>
        </div>
        <Header />
        {children}
      </body>
    </html>
  );
}
