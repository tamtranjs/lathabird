import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header/>
      <div className="min-h-screen">
        {children}
      </div>
      <Footer/>    
    </>
  );
};

export default Layout;