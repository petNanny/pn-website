import { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";
import BackgroundWrapper from "./backgroundWrapper";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar/Navbar";
import SearchCard from "../components/SearchCard/SearchCard";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Navbar />
      <SearchCard />
      <Hero />
      <BackgroundWrapper>
        <div>{children}</div>
        <Footer />
      </BackgroundWrapper>
    </>
  );
};

export default Layout;
