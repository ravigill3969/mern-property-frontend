import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ReactNode } from "react";

type MyComponentProps = {
  children: ReactNode;
};

function Layout({ children }: MyComponentProps) {
  return (
    <>
      <div className="mt-4 max-w-7xl mx-auto">
        <Header />
        {children}
      </div>
      <Footer />
    </>
  );
}

export default Layout;
