import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen flex flex-col">
      <Header/>
      <main className="flex-1">
        {children}
      </main>
      <Footer/>    
    </main>
  );
};

export default Layout;