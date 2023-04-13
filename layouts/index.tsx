import { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";
import BackgroundWrapper from "./backgroundWrapper";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar/Navbar";
import SearchCard from "../components/SearchCard/SearchCard";
import process from "process";
interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Navbar />
      <SearchCard />
      {/* <Hero /> */}
      <BackgroundWrapper>
        <div>{children}</div>
        {/* <Footer /> */}
      </BackgroundWrapper>
      <script
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAP_KEY}&libraries=places`}
      ></script>
    </>
  );
};

export default Layout;
