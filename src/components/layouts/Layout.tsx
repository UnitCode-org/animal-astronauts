import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({
  children,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-center bg-unit-blue-50 font-inter text-white overflow-y-clip overflow-x-hidden">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}

export default Layout;
