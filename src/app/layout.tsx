import "./globals.css";
import Sidebar from "@/src/components/pages/organisms/sidebar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body className="bg-white text-gray-800 antialiased">
        <div className="min-h-screen w-full overflow-x-hidden bg-[#0a0a0a]">
          <div className="flex flex-col lg:flex-row">
            <Sidebar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
