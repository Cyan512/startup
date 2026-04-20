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
        <div className="fixed inset-0 flex bg-[#0a0a0a]">
          <Sidebar />
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
