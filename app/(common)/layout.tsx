import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import BackToTop from "@/components/elements/BackToTop";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen flex flex-col">
      <Header/>
      <main className="flex-1">
        {children}
      </main>
      <Footer/>   
      <BackToTop/> 
    </main>
  );
};

export default Layout;