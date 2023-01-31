import { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";
import BackgroundWrapper from "./backgroundWrapper";
import Hero from "../components/Hero";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Hero />
      <BackgroundWrapper>
        <div>{children}</div>
        <Footer />
      </BackgroundWrapper>
    </>
  );
};

export default Layout;
